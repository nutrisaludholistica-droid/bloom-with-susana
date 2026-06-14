import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// ============ PATIENTS ============
const patientSchema = z.object({
  full_name: z.string().trim().min(1).max(200),
  birth_date: z.string().optional().nullable(),
  sex: z.enum(["femenino", "masculino", "otro"]).optional().nullable(),
  phone: z.string().max(40).optional().nullable(),
  email: z.string().email().max(255).optional().nullable().or(z.literal("")),
  occupation: z.string().max(200).optional().nullable(),
  address: z.string().max(500).optional().nullable(),
  emergency_contact_name: z.string().max(200).optional().nullable(),
  emergency_contact_phone: z.string().max(40).optional().nullable(),
  consent_signed: z.boolean().optional(),
  notes: z.string().max(2000).optional().nullable(),
});

export const listPatients = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("patients")
      .select("id, full_name, birth_date, sex, phone, email, active, created_at")
      .order("full_name");
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const createPatient = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => patientSchema.parse(d))
  .handler(async ({ data, context }) => {
    const payload = {
      ...data,
      email: data.email || null,
      owner_id: context.userId,
      consent_signed_at: data.consent_signed ? new Date().toISOString() : null,
    };
    const { data: row, error } = await context.supabase
      .from("patients")
      .insert(payload)
      .select("id")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const getPatient = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const [patient, allergies, history, meds, consultations, anthro, bio, appts] =
      await Promise.all([
        context.supabase.from("patients").select("*").eq("id", data.id).single(),
        context.supabase
          .from("allergies")
          .select("*")
          .eq("patient_id", data.id)
          .order("severity", { ascending: false }),
        context.supabase
          .from("medical_history")
          .select("*")
          .eq("patient_id", data.id)
          .maybeSingle(),
        context.supabase
          .from("medications")
          .select("*")
          .eq("patient_id", data.id)
          .order("status")
          .order("name"),
        context.supabase
          .from("consultations")
          .select("*")
          .eq("patient_id", data.id)
          .order("consulted_at", { ascending: false }),
        context.supabase
          .from("anthropometry")
          .select("*")
          .eq("patient_id", data.id)
          .order("measured_at", { ascending: false }),
        context.supabase
          .from("bioimpedance")
          .select("*")
          .eq("patient_id", data.id)
          .order("measured_at", { ascending: false }),
        context.supabase
          .from("appointments")
          .select("*")
          .eq("patient_id", data.id)
          .order("scheduled_at", { ascending: false })
          .limit(20),
      ]);
    if (patient.error) throw new Error(patient.error.message);
    return {
      patient: patient.data,
      allergies: allergies.data ?? [],
      history: history.data ?? null,
      medications: meds.data ?? [],
      consultations: consultations.data ?? [],
      anthropometry: anthro.data ?? [],
      bioimpedance: bio.data ?? [],
      appointments: appts.data ?? [],
    };
  });

// ============ ALLERGIES ============
const allergySchema = z.object({
  patient_id: z.string().uuid(),
  allergen: z.string().trim().min(1).max(200),
  severity: z.enum(["leve", "moderada", "severa"]),
  reaction: z.string().max(500).optional().nullable(),
  detected_at: z.string().optional().nullable(),
  notes: z.string().max(1000).optional().nullable(),
});
export const addAllergy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => allergySchema.parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("allergies")
      .insert({ ...data, owner_id: context.userId });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
export const deleteAllergy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase.from("allergies").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ MEDICAL HISTORY ============
const historySchema = z.object({
  patient_id: z.string().uuid(),
  hereditary: z.string().max(2000).optional().nullable(),
  pathological: z.string().max(2000).optional().nullable(),
  non_pathological: z.string().max(2000).optional().nullable(),
  gyneco_obstetric: z.string().max(2000).optional().nullable(),
  surgical: z.string().max(2000).optional().nullable(),
  smoking: z.string().max(500).optional().nullable(),
  alcohol: z.string().max(500).optional().nullable(),
  physical_activity: z.string().max(500).optional().nullable(),
  sleep: z.string().max(500).optional().nullable(),
  bowel_habits: z.string().max(500).optional().nullable(),
  hydration: z.string().max(500).optional().nullable(),
});
export const upsertHistory = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => historySchema.parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("medical_history")
      .upsert({ ...data, owner_id: context.userId }, { onConflict: "patient_id" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ MEDICATIONS ============
const medSchema = z.object({
  patient_id: z.string().uuid(),
  name: z.string().trim().min(1).max(200),
  is_supplement: z.boolean().optional(),
  dose: z.string().max(100).optional().nullable(),
  frequency: z.string().max(100).optional().nullable(),
  indication: z.string().max(500).optional().nullable(),
  prescriber: z.string().max(200).optional().nullable(),
  start_date: z.string().optional().nullable(),
  end_date: z.string().optional().nullable(),
  status: z.enum(["activo", "suspendido"]).optional(),
  notes: z.string().max(1000).optional().nullable(),
});
export const addMedication = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => medSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("medications")
      .insert({ ...data, owner_id: context.userId });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
export const updateMedicationStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(["activo", "suspendido"]) }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("medications")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// ============ CONSULTATIONS (with anthro + bio) ============
const numericOpt = z.preprocess(
  (v) => (v === "" || v === null || v === undefined ? null : Number(v)),
  z.number().nullable().optional(),
);
const intOpt = z.preprocess(
  (v) => (v === "" || v === null || v === undefined ? null : Math.round(Number(v))),
  z.number().int().nullable().optional(),
);

const consultationSchema = z.object({
  patient_id: z.string().uuid(),
  consultation_type: z.enum(["inicial", "seguimiento"]),
  modality: z.enum(["presencial", "online"]),
  consulted_at: z.string(),
  reason: z.string().max(500).optional().nullable(),
  soap_subjective: z.string().max(5000).optional().nullable(),
  soap_objective: z.string().max(5000).optional().nullable(),
  soap_assessment: z.string().max(5000).optional().nullable(),
  soap_plan: z.string().max(5000).optional().nullable(),
  goals: z.string().max(2000).optional().nullable(),
  recommendations: z.string().max(5000).optional().nullable(),
  next_appointment_at: z.string().optional().nullable(),
  // Anthro
  anthro: z
    .object({
      weight_kg: numericOpt,
      height_cm: numericOpt,
      waist_cm: numericOpt,
      hip_cm: numericOpt,
      arm_cm: numericOpt,
      thigh_cm: numericOpt,
      calf_cm: numericOpt,
      neck_cm: numericOpt,
      triceps_fold_mm: numericOpt,
      subscapular_fold_mm: numericOpt,
      suprailiac_fold_mm: numericOpt,
      abdominal_fold_mm: numericOpt,
      thigh_fold_mm: numericOpt,
    })
    .optional(),
  // Bio
  bio: z
    .object({
      body_fat_pct: numericOpt,
      body_fat_kg: numericOpt,
      muscle_mass_kg: numericOpt,
      bone_mass_kg: numericOpt,
      total_body_water_pct: numericOpt,
      visceral_fat: numericOpt,
      metabolic_age: intOpt,
      bmr_kcal: intOpt,
      fat_pct_trunk: numericOpt,
      fat_pct_right_arm: numericOpt,
      fat_pct_left_arm: numericOpt,
      fat_pct_right_leg: numericOpt,
      fat_pct_left_leg: numericOpt,
      muscle_kg_trunk: numericOpt,
      muscle_kg_right_arm: numericOpt,
      muscle_kg_left_arm: numericOpt,
      muscle_kg_right_leg: numericOpt,
      muscle_kg_left_leg: numericOpt,
    })
    .optional(),
});

export const createConsultation = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => consultationSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { anthro, bio, ...consult } = data;
    const { data: row, error } = await context.supabase
      .from("consultations")
      .insert({ ...consult, owner_id: context.userId })
      .select("id, consulted_at")
      .single();
    if (error) throw new Error(error.message);

    if (anthro && Object.values(anthro).some((v) => v !== null && v !== undefined)) {
      const bmi =
        anthro.weight_kg && anthro.height_cm && anthro.height_cm > 0
          ? Math.round(
              (anthro.weight_kg / Math.pow(anthro.height_cm / 100, 2)) * 100,
            ) / 100
          : null;
      await context.supabase.from("anthropometry").insert({
        ...anthro,
        bmi,
        patient_id: consult.patient_id,
        owner_id: context.userId,
        consultation_id: row.id,
        measured_at: row.consulted_at,
      });
    }
    if (bio && Object.values(bio).some((v) => v !== null && v !== undefined)) {
      await context.supabase.from("bioimpedance").insert({
        ...bio,
        patient_id: consult.patient_id,
        owner_id: context.userId,
        consultation_id: row.id,
        measured_at: row.consulted_at,
      });
    }

    if (consult.next_appointment_at) {
      await context.supabase.from("appointments").insert({
        patient_id: consult.patient_id,
        owner_id: context.userId,
        scheduled_at: consult.next_appointment_at,
        modality: consult.modality,
        status: "agendada",
      });
    }
    return { id: row.id };
  });

// ============ APPOINTMENTS ============
const apptSchema = z.object({
  patient_id: z.string().uuid(),
  scheduled_at: z.string(),
  duration_minutes: z.number().int().min(15).max(480).optional(),
  modality: z.enum(["presencial", "online"]),
  status: z
    .enum(["agendada", "confirmada", "realizada", "cancelada", "no_asistio"])
    .optional(),
  notes: z.string().max(1000).optional().nullable(),
});
export const createAppointment = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => apptSchema.parse(d))
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("appointments")
      .insert({ ...data, owner_id: context.userId });
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const updateAppointmentStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        status: z.enum(["agendada", "confirmada", "realizada", "cancelada", "no_asistio"]),
      })
      .parse(d),
  )
  .handler(async ({ data, context }) => {
    const { error } = await context.supabase
      .from("appointments")
      .update({ status: data.status })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const listAppointments = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data, error } = await context.supabase
      .from("appointments")
      .select("*, patients(id, full_name, phone)")
      .gte("scheduled_at", new Date(Date.now() - 30 * 24 * 3600 * 1000).toISOString())
      .order("scheduled_at");
    if (error) throw new Error(error.message);
    return data ?? [];
  });

// ============ DASHBOARD ============
export const getDashboard = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const now = new Date();
    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfDay);
    endOfWeek.setDate(endOfWeek.getDate() + 7);

    const [todayAppts, weekAppts, patientCount, recent] = await Promise.all([
      context.supabase
        .from("appointments")
        .select("*, patients(id, full_name, phone)")
        .gte("scheduled_at", startOfDay.toISOString())
        .lt(
          "scheduled_at",
          new Date(startOfDay.getTime() + 24 * 3600 * 1000).toISOString(),
        )
        .neq("status", "cancelada")
        .order("scheduled_at"),
      context.supabase
        .from("appointments")
        .select("id")
        .gte("scheduled_at", startOfDay.toISOString())
        .lt("scheduled_at", endOfWeek.toISOString())
        .neq("status", "cancelada"),
      context.supabase.from("patients").select("id", { count: "exact", head: true }),
      context.supabase
        .from("patients")
        .select("id, full_name, updated_at")
        .order("updated_at", { ascending: false })
        .limit(5),
    ]);
    return {
      today: todayAppts.data ?? [],
      weekCount: weekAppts.data?.length ?? 0,
      patientCount: patientCount.count ?? 0,
      recent: recent.data ?? [],
    };
  });
