
-- ============ ENUMS ============
CREATE TYPE public.sex_type AS ENUM ('femenino','masculino','otro');
CREATE TYPE public.consultation_type AS ENUM ('inicial','seguimiento');
CREATE TYPE public.consultation_modality AS ENUM ('presencial','online');
CREATE TYPE public.appointment_status AS ENUM ('agendada','confirmada','realizada','cancelada','no_asistio');
CREATE TYPE public.allergy_severity AS ENUM ('leve','moderada','severa');
CREATE TYPE public.medication_status AS ENUM ('activo','suspendido');
CREATE TYPE public.audit_action AS ENUM ('insert','update','delete');

-- ============ updated_at helper ============
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- ============ PROFILES ============
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT 'LN Susana Wignall',
  cedula TEXT NOT NULL DEFAULT '156228944',
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own profile" ON public.profiles FOR ALL TO authenticated
  USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE TRIGGER profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email) VALUES (NEW.id, NEW.email)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============ PATIENTS ============
CREATE TABLE public.patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  birth_date DATE,
  sex public.sex_type,
  phone TEXT,
  email TEXT,
  occupation TEXT,
  address TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  consent_signed BOOLEAN NOT NULL DEFAULT false,
  consent_signed_at TIMESTAMPTZ,
  notes TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX patients_owner_idx ON public.patients(owner_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.patients TO authenticated;
GRANT ALL ON public.patients TO service_role;
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner patients" ON public.patients FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE TRIGGER patients_updated BEFORE UPDATE ON public.patients
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ ALLERGIES ============
CREATE TABLE public.allergies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  allergen TEXT NOT NULL,
  severity public.allergy_severity NOT NULL DEFAULT 'leve',
  reaction TEXT,
  detected_at DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX allergies_patient_idx ON public.allergies(patient_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.allergies TO authenticated;
GRANT ALL ON public.allergies TO service_role;
ALTER TABLE public.allergies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner allergies" ON public.allergies FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- ============ MEDICAL HISTORY (1:1) ============
CREATE TABLE public.medical_history (
  patient_id UUID PRIMARY KEY REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  hereditary TEXT,
  pathological TEXT,
  non_pathological TEXT,
  gyneco_obstetric TEXT,
  surgical TEXT,
  smoking TEXT,
  alcohol TEXT,
  physical_activity TEXT,
  sleep TEXT,
  bowel_habits TEXT,
  hydration TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.medical_history TO authenticated;
GRANT ALL ON public.medical_history TO service_role;
ALTER TABLE public.medical_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner history" ON public.medical_history FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE TRIGGER mh_updated BEFORE UPDATE ON public.medical_history
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ MEDICATIONS ============
CREATE TABLE public.medications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  is_supplement BOOLEAN NOT NULL DEFAULT false,
  dose TEXT,
  frequency TEXT,
  indication TEXT,
  prescriber TEXT,
  start_date DATE,
  end_date DATE,
  status public.medication_status NOT NULL DEFAULT 'activo',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX medications_patient_idx ON public.medications(patient_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.medications TO authenticated;
GRANT ALL ON public.medications TO service_role;
ALTER TABLE public.medications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner meds" ON public.medications FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- ============ CONSULTATIONS ============
CREATE TABLE public.consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  consultation_type public.consultation_type NOT NULL DEFAULT 'seguimiento',
  modality public.consultation_modality NOT NULL DEFAULT 'presencial',
  consulted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reason TEXT,
  soap_subjective TEXT,
  soap_objective TEXT,
  soap_assessment TEXT,
  soap_plan TEXT,
  goals TEXT,
  next_appointment_at TIMESTAMPTZ,
  recommendations TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX consultations_patient_idx ON public.consultations(patient_id, consulted_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.consultations TO authenticated;
GRANT ALL ON public.consultations TO service_role;
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner consultations" ON public.consultations FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE TRIGGER consultations_updated BEFORE UPDATE ON public.consultations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ ANTHROPOMETRY ============
CREATE TABLE public.anthropometry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id UUID REFERENCES public.consultations(id) ON DELETE CASCADE,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  measured_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  weight_kg NUMERIC(5,2),
  height_cm NUMERIC(5,2),
  bmi NUMERIC(5,2),
  waist_cm NUMERIC(5,2),
  hip_cm NUMERIC(5,2),
  arm_cm NUMERIC(5,2),
  thigh_cm NUMERIC(5,2),
  calf_cm NUMERIC(5,2),
  neck_cm NUMERIC(5,2),
  triceps_fold_mm NUMERIC(5,2),
  subscapular_fold_mm NUMERIC(5,2),
  suprailiac_fold_mm NUMERIC(5,2),
  abdominal_fold_mm NUMERIC(5,2),
  thigh_fold_mm NUMERIC(5,2),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX anthro_patient_idx ON public.anthropometry(patient_id, measured_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.anthropometry TO authenticated;
GRANT ALL ON public.anthropometry TO service_role;
ALTER TABLE public.anthropometry ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner anthro" ON public.anthropometry FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- ============ BIOIMPEDANCE (Tanita 8 electrodos) ============
CREATE TABLE public.bioimpedance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id UUID REFERENCES public.consultations(id) ON DELETE CASCADE,
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  measured_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  body_fat_pct NUMERIC(5,2),
  body_fat_kg NUMERIC(5,2),
  muscle_mass_kg NUMERIC(5,2),
  bone_mass_kg NUMERIC(4,2),
  total_body_water_pct NUMERIC(5,2),
  visceral_fat NUMERIC(4,1),
  metabolic_age INTEGER,
  bmr_kcal INTEGER,
  -- Segmentado
  fat_pct_trunk NUMERIC(5,2),
  fat_pct_right_arm NUMERIC(5,2),
  fat_pct_left_arm NUMERIC(5,2),
  fat_pct_right_leg NUMERIC(5,2),
  fat_pct_left_leg NUMERIC(5,2),
  muscle_kg_trunk NUMERIC(5,2),
  muscle_kg_right_arm NUMERIC(5,2),
  muscle_kg_left_arm NUMERIC(5,2),
  muscle_kg_right_leg NUMERIC(5,2),
  muscle_kg_left_leg NUMERIC(5,2),
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX bio_patient_idx ON public.bioimpedance(patient_id, measured_at DESC);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.bioimpedance TO authenticated;
GRANT ALL ON public.bioimpedance TO service_role;
ALTER TABLE public.bioimpedance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner bio" ON public.bioimpedance FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);

-- ============ APPOINTMENTS ============
CREATE TABLE public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES public.patients(id) ON DELETE CASCADE,
  owner_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  modality public.consultation_modality NOT NULL DEFAULT 'presencial',
  status public.appointment_status NOT NULL DEFAULT 'agendada',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX appointments_owner_date_idx ON public.appointments(owner_id, scheduled_at);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.appointments TO authenticated;
GRANT ALL ON public.appointments TO service_role;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner appointments" ON public.appointments FOR ALL TO authenticated
  USING (auth.uid() = owner_id) WITH CHECK (auth.uid() = owner_id);
CREATE TRIGGER appointments_updated BEFORE UPDATE ON public.appointments
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ============ AUDIT LOG (NOM-004) ============
CREATE TABLE public.audit_log (
  id BIGSERIAL PRIMARY KEY,
  table_name TEXT NOT NULL,
  row_id TEXT,
  action public.audit_action NOT NULL,
  actor_id UUID,
  patient_id UUID,
  before JSONB,
  after JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX audit_patient_idx ON public.audit_log(patient_id, created_at DESC);
CREATE INDEX audit_actor_idx ON public.audit_log(actor_id, created_at DESC);
GRANT SELECT ON public.audit_log TO authenticated;
GRANT ALL ON public.audit_log TO service_role;
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read audit" ON public.audit_log FOR SELECT TO authenticated
  USING (auth.uid() = actor_id);
-- No INSERT/UPDATE/DELETE policies → immutable from client.

-- Audit trigger
CREATE OR REPLACE FUNCTION public.log_audit()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  v_patient UUID;
  v_row_id TEXT;
BEGIN
  v_patient := COALESCE(
    (CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END) ->> 'patient_id',
    (CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END) ->> 'id'
  )::UUID;
  v_row_id := COALESCE(
    (CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END) ->> 'id',
    (CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END) ->> 'patient_id'
  );
  INSERT INTO public.audit_log (table_name, row_id, action, actor_id, patient_id, before, after)
  VALUES (
    TG_TABLE_NAME,
    v_row_id,
    LOWER(TG_OP)::public.audit_action,
    auth.uid(),
    v_patient,
    CASE WHEN TG_OP IN ('UPDATE','DELETE') THEN to_jsonb(OLD) END,
    CASE WHEN TG_OP IN ('INSERT','UPDATE') THEN to_jsonb(NEW) END
  );
  RETURN COALESCE(NEW, OLD);
END; $$;

CREATE TRIGGER audit_patients AFTER INSERT OR UPDATE OR DELETE ON public.patients
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_allergies AFTER INSERT OR UPDATE OR DELETE ON public.allergies
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_history AFTER INSERT OR UPDATE OR DELETE ON public.medical_history
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_meds AFTER INSERT OR UPDATE OR DELETE ON public.medications
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_consultations AFTER INSERT OR UPDATE OR DELETE ON public.consultations
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_anthro AFTER INSERT OR UPDATE OR DELETE ON public.anthropometry
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_bio AFTER INSERT OR UPDATE OR DELETE ON public.bioimpedance
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
CREATE TRIGGER audit_appointments AFTER INSERT OR UPDATE OR DELETE ON public.appointments
  FOR EACH ROW EXECUTE FUNCTION public.log_audit();
