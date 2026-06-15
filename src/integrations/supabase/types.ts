export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      allergies: {
        Row: {
          allergen: string
          created_at: string
          detected_at: string | null
          id: string
          notes: string | null
          owner_id: string
          patient_id: string
          reaction: string | null
          severity: Database["public"]["Enums"]["allergy_severity"]
        }
        Insert: {
          allergen: string
          created_at?: string
          detected_at?: string | null
          id?: string
          notes?: string | null
          owner_id: string
          patient_id: string
          reaction?: string | null
          severity?: Database["public"]["Enums"]["allergy_severity"]
        }
        Update: {
          allergen?: string
          created_at?: string
          detected_at?: string | null
          id?: string
          notes?: string | null
          owner_id?: string
          patient_id?: string
          reaction?: string | null
          severity?: Database["public"]["Enums"]["allergy_severity"]
        }
        Relationships: [
          {
            foreignKeyName: "allergies_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      anthropometry: {
        Row: {
          abdominal_fold_mm: number | null
          arm_cm: number | null
          bmi: number | null
          calf_cm: number | null
          consultation_id: string | null
          created_at: string
          height_cm: number | null
          hip_cm: number | null
          id: string
          measured_at: string
          neck_cm: number | null
          notes: string | null
          owner_id: string
          patient_id: string
          subscapular_fold_mm: number | null
          suprailiac_fold_mm: number | null
          thigh_cm: number | null
          thigh_fold_mm: number | null
          triceps_fold_mm: number | null
          waist_cm: number | null
          weight_kg: number | null
        }
        Insert: {
          abdominal_fold_mm?: number | null
          arm_cm?: number | null
          bmi?: number | null
          calf_cm?: number | null
          consultation_id?: string | null
          created_at?: string
          height_cm?: number | null
          hip_cm?: number | null
          id?: string
          measured_at?: string
          neck_cm?: number | null
          notes?: string | null
          owner_id: string
          patient_id: string
          subscapular_fold_mm?: number | null
          suprailiac_fold_mm?: number | null
          thigh_cm?: number | null
          thigh_fold_mm?: number | null
          triceps_fold_mm?: number | null
          waist_cm?: number | null
          weight_kg?: number | null
        }
        Update: {
          abdominal_fold_mm?: number | null
          arm_cm?: number | null
          bmi?: number | null
          calf_cm?: number | null
          consultation_id?: string | null
          created_at?: string
          height_cm?: number | null
          hip_cm?: number | null
          id?: string
          measured_at?: string
          neck_cm?: number | null
          notes?: string | null
          owner_id?: string
          patient_id?: string
          subscapular_fold_mm?: number | null
          suprailiac_fold_mm?: number | null
          thigh_cm?: number | null
          thigh_fold_mm?: number | null
          triceps_fold_mm?: number | null
          waist_cm?: number | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "anthropometry_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "anthropometry_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          created_at: string
          duration_minutes: number
          id: string
          modality: Database["public"]["Enums"]["consultation_modality"]
          notes: string | null
          owner_id: string
          patient_id: string
          scheduled_at: string
          status: Database["public"]["Enums"]["appointment_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          duration_minutes?: number
          id?: string
          modality?: Database["public"]["Enums"]["consultation_modality"]
          notes?: string | null
          owner_id: string
          patient_id: string
          scheduled_at: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          duration_minutes?: number
          id?: string
          modality?: Database["public"]["Enums"]["consultation_modality"]
          notes?: string | null
          owner_id?: string
          patient_id?: string
          scheduled_at?: string
          status?: Database["public"]["Enums"]["appointment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: Database["public"]["Enums"]["audit_action"]
          actor_id: string | null
          after: Json | null
          before: Json | null
          created_at: string
          id: number
          patient_id: string | null
          row_id: string | null
          table_name: string
        }
        Insert: {
          action: Database["public"]["Enums"]["audit_action"]
          actor_id?: string | null
          after?: Json | null
          before?: Json | null
          created_at?: string
          id?: number
          patient_id?: string | null
          row_id?: string | null
          table_name: string
        }
        Update: {
          action?: Database["public"]["Enums"]["audit_action"]
          actor_id?: string | null
          after?: Json | null
          before?: Json | null
          created_at?: string
          id?: number
          patient_id?: string | null
          row_id?: string | null
          table_name?: string
        }
        Relationships: []
      }
      bioimpedance: {
        Row: {
          bmr_kcal: number | null
          body_fat_kg: number | null
          body_fat_pct: number | null
          bone_mass_kg: number | null
          consultation_id: string | null
          created_at: string
          fat_pct_left_arm: number | null
          fat_pct_left_leg: number | null
          fat_pct_right_arm: number | null
          fat_pct_right_leg: number | null
          fat_pct_trunk: number | null
          id: string
          measured_at: string
          metabolic_age: number | null
          muscle_kg_left_arm: number | null
          muscle_kg_left_leg: number | null
          muscle_kg_right_arm: number | null
          muscle_kg_right_leg: number | null
          muscle_kg_trunk: number | null
          muscle_mass_kg: number | null
          notes: string | null
          owner_id: string
          patient_id: string
          total_body_water_pct: number | null
          visceral_fat: number | null
        }
        Insert: {
          bmr_kcal?: number | null
          body_fat_kg?: number | null
          body_fat_pct?: number | null
          bone_mass_kg?: number | null
          consultation_id?: string | null
          created_at?: string
          fat_pct_left_arm?: number | null
          fat_pct_left_leg?: number | null
          fat_pct_right_arm?: number | null
          fat_pct_right_leg?: number | null
          fat_pct_trunk?: number | null
          id?: string
          measured_at?: string
          metabolic_age?: number | null
          muscle_kg_left_arm?: number | null
          muscle_kg_left_leg?: number | null
          muscle_kg_right_arm?: number | null
          muscle_kg_right_leg?: number | null
          muscle_kg_trunk?: number | null
          muscle_mass_kg?: number | null
          notes?: string | null
          owner_id: string
          patient_id: string
          total_body_water_pct?: number | null
          visceral_fat?: number | null
        }
        Update: {
          bmr_kcal?: number | null
          body_fat_kg?: number | null
          body_fat_pct?: number | null
          bone_mass_kg?: number | null
          consultation_id?: string | null
          created_at?: string
          fat_pct_left_arm?: number | null
          fat_pct_left_leg?: number | null
          fat_pct_right_arm?: number | null
          fat_pct_right_leg?: number | null
          fat_pct_trunk?: number | null
          id?: string
          measured_at?: string
          metabolic_age?: number | null
          muscle_kg_left_arm?: number | null
          muscle_kg_left_leg?: number | null
          muscle_kg_right_arm?: number | null
          muscle_kg_right_leg?: number | null
          muscle_kg_trunk?: number | null
          muscle_mass_kg?: number | null
          notes?: string | null
          owner_id?: string
          patient_id?: string
          total_body_water_pct?: number | null
          visceral_fat?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "bioimpedance_consultation_id_fkey"
            columns: ["consultation_id"]
            isOneToOne: false
            referencedRelation: "consultations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bioimpedance_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      consultations: {
        Row: {
          consultation_type: Database["public"]["Enums"]["consultation_type"]
          consulted_at: string
          created_at: string
          goals: string | null
          id: string
          modality: Database["public"]["Enums"]["consultation_modality"]
          next_appointment_at: string | null
          owner_id: string
          patient_id: string
          reason: string | null
          recommendations: string | null
          soap_assessment: string | null
          soap_objective: string | null
          soap_plan: string | null
          soap_subjective: string | null
          updated_at: string
        }
        Insert: {
          consultation_type?: Database["public"]["Enums"]["consultation_type"]
          consulted_at?: string
          created_at?: string
          goals?: string | null
          id?: string
          modality?: Database["public"]["Enums"]["consultation_modality"]
          next_appointment_at?: string | null
          owner_id: string
          patient_id: string
          reason?: string | null
          recommendations?: string | null
          soap_assessment?: string | null
          soap_objective?: string | null
          soap_plan?: string | null
          soap_subjective?: string | null
          updated_at?: string
        }
        Update: {
          consultation_type?: Database["public"]["Enums"]["consultation_type"]
          consulted_at?: string
          created_at?: string
          goals?: string | null
          id?: string
          modality?: Database["public"]["Enums"]["consultation_modality"]
          next_appointment_at?: string | null
          owner_id?: string
          patient_id?: string
          reason?: string | null
          recommendations?: string | null
          soap_assessment?: string | null
          soap_objective?: string | null
          soap_plan?: string | null
          soap_subjective?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "consultations_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_history: {
        Row: {
          alcohol: string | null
          bowel_habits: string | null
          gyneco_obstetric: string | null
          hereditary: string | null
          hydration: string | null
          non_pathological: string | null
          owner_id: string
          pathological: string | null
          patient_id: string
          physical_activity: string | null
          sleep: string | null
          smoking: string | null
          surgical: string | null
          updated_at: string
        }
        Insert: {
          alcohol?: string | null
          bowel_habits?: string | null
          gyneco_obstetric?: string | null
          hereditary?: string | null
          hydration?: string | null
          non_pathological?: string | null
          owner_id: string
          pathological?: string | null
          patient_id: string
          physical_activity?: string | null
          sleep?: string | null
          smoking?: string | null
          surgical?: string | null
          updated_at?: string
        }
        Update: {
          alcohol?: string | null
          bowel_habits?: string | null
          gyneco_obstetric?: string | null
          hereditary?: string | null
          hydration?: string | null
          non_pathological?: string | null
          owner_id?: string
          pathological?: string | null
          patient_id?: string
          physical_activity?: string | null
          sleep?: string | null
          smoking?: string | null
          surgical?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "medical_history_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: true
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      medications: {
        Row: {
          created_at: string
          dose: string | null
          end_date: string | null
          frequency: string | null
          id: string
          indication: string | null
          is_supplement: boolean
          name: string
          notes: string | null
          owner_id: string
          patient_id: string
          prescriber: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["medication_status"]
        }
        Insert: {
          created_at?: string
          dose?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          indication?: string | null
          is_supplement?: boolean
          name: string
          notes?: string | null
          owner_id: string
          patient_id: string
          prescriber?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["medication_status"]
        }
        Update: {
          created_at?: string
          dose?: string | null
          end_date?: string | null
          frequency?: string | null
          id?: string
          indication?: string | null
          is_supplement?: boolean
          name?: string
          notes?: string | null
          owner_id?: string
          patient_id?: string
          prescriber?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["medication_status"]
        }
        Relationships: [
          {
            foreignKeyName: "medications_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          active: boolean
          address: string | null
          birth_date: string | null
          consent_signed: boolean
          consent_signed_at: string | null
          created_at: string
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          full_name: string
          id: string
          notes: string | null
          occupation: string | null
          owner_id: string
          phone: string | null
          sex: Database["public"]["Enums"]["sex_type"] | null
          updated_at: string
        }
        Insert: {
          active?: boolean
          address?: string | null
          birth_date?: string | null
          consent_signed?: boolean
          consent_signed_at?: string | null
          created_at?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name: string
          id?: string
          notes?: string | null
          occupation?: string | null
          owner_id: string
          phone?: string | null
          sex?: Database["public"]["Enums"]["sex_type"] | null
          updated_at?: string
        }
        Update: {
          active?: boolean
          address?: string | null
          birth_date?: string | null
          consent_signed?: boolean
          consent_signed_at?: string | null
          created_at?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          full_name?: string
          id?: string
          notes?: string | null
          occupation?: string | null
          owner_id?: string
          phone?: string | null
          sex?: Database["public"]["Enums"]["sex_type"] | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          cedula: string
          created_at: string
          email: string | null
          full_name: string
          id: string
          updated_at: string
        }
        Insert: {
          cedula?: string
          created_at?: string
          email?: string | null
          full_name?: string
          id: string
          updated_at?: string
        }
        Update: {
          cedula?: string
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      allergy_severity: "leve" | "moderada" | "severa"
      app_role: "admin" | "user"
      appointment_status:
        | "agendada"
        | "confirmada"
        | "realizada"
        | "cancelada"
        | "no_asistio"
      audit_action: "insert" | "update" | "delete"
      consultation_modality: "presencial" | "online"
      consultation_type: "inicial" | "seguimiento"
      medication_status: "activo" | "suspendido"
      sex_type: "femenino" | "masculino" | "otro"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      allergy_severity: ["leve", "moderada", "severa"],
      app_role: ["admin", "user"],
      appointment_status: [
        "agendada",
        "confirmada",
        "realizada",
        "cancelada",
        "no_asistio",
      ],
      audit_action: ["insert", "update", "delete"],
      consultation_modality: ["presencial", "online"],
      consultation_type: ["inicial", "seguimiento"],
      medication_status: ["activo", "suspendido"],
      sex_type: ["femenino", "masculino", "otro"],
    },
  },
} as const
