import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { createConsultation } from "@/lib/crm.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/crm/pacientes/$patientId/consulta")({
  head: () => ({
    meta: [
      { title: "Nueva consulta — CRM interno" },
      { name: "description", content: "Registro de consulta y notas SOAP, uso interno." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: NewConsultation,
});

function NewConsultation() {
  const { patientId } = Route.useParams();
  const router = useRouter();
  const create = useServerFn(createConsultation);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<"inicial" | "seguimiento">("seguimiento");
  const [modality, setModality] = useState<"presencial" | "online">("presencial");

  function n(fd: FormData, key: string) {
    const v = fd.get(key) as string;
    return v === "" || v == null ? null : Number(v);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const result = await create({
        data: {
          patient_id: patientId,
          consultation_type: type,
          modality,
          consulted_at: new Date(String(fd.get("consulted_at"))).toISOString(),
          reason: (fd.get("reason") as string) || null,
          soap_subjective: (fd.get("soap_subjective") as string) || null,
          soap_objective: (fd.get("soap_objective") as string) || null,
          soap_assessment: (fd.get("soap_assessment") as string) || null,
          soap_plan: (fd.get("soap_plan") as string) || null,
          goals: (fd.get("goals") as string) || null,
          recommendations: (fd.get("recommendations") as string) || null,
          next_appointment_at: (fd.get("next_appointment_at") as string)
            ? new Date(String(fd.get("next_appointment_at"))).toISOString()
            : null,
          anthro: {
            weight_kg: n(fd, "weight_kg"),
            height_cm: n(fd, "height_cm"),
            waist_cm: n(fd, "waist_cm"),
            hip_cm: n(fd, "hip_cm"),
            arm_cm: n(fd, "arm_cm"),
            thigh_cm: n(fd, "thigh_cm"),
            calf_cm: n(fd, "calf_cm"),
            neck_cm: n(fd, "neck_cm"),
            triceps_fold_mm: n(fd, "triceps_fold_mm"),
            subscapular_fold_mm: n(fd, "subscapular_fold_mm"),
            suprailiac_fold_mm: n(fd, "suprailiac_fold_mm"),
            abdominal_fold_mm: n(fd, "abdominal_fold_mm"),
            thigh_fold_mm: n(fd, "thigh_fold_mm"),
          },
          bio: {
            body_fat_pct: n(fd, "body_fat_pct"),
            body_fat_kg: n(fd, "body_fat_kg"),
            muscle_mass_kg: n(fd, "muscle_mass_kg"),
            bone_mass_kg: n(fd, "bone_mass_kg"),
            total_body_water_pct: n(fd, "total_body_water_pct"),
            visceral_fat: n(fd, "visceral_fat"),
            metabolic_age: n(fd, "metabolic_age"),
            bmr_kcal: n(fd, "bmr_kcal"),
            fat_pct_trunk: n(fd, "fat_pct_trunk"),
            fat_pct_right_arm: n(fd, "fat_pct_right_arm"),
            fat_pct_left_arm: n(fd, "fat_pct_left_arm"),
            fat_pct_right_leg: n(fd, "fat_pct_right_leg"),
            fat_pct_left_leg: n(fd, "fat_pct_left_leg"),
            muscle_kg_trunk: n(fd, "muscle_kg_trunk"),
            muscle_kg_right_arm: n(fd, "muscle_kg_right_arm"),
            muscle_kg_left_arm: n(fd, "muscle_kg_left_arm"),
            muscle_kg_right_leg: n(fd, "muscle_kg_right_leg"),
            muscle_kg_left_leg: n(fd, "muscle_kg_left_leg"),
          },
        },
      });
      toast.success("Consulta guardada");
      router.invalidate();
      router.navigate({ to: "/crm/pacientes/$patientId", params: { patientId } });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  const now = new Date();
  const nowLocal = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-4xl">
      <Link
        to="/crm/pacientes/$patientId"
        params={{ patientId }}
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" /> Volver al expediente
      </Link>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Nueva consulta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-2">
              <Label>Tipo</Label>
              <Select value={type} onValueChange={(v: any) => setType(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="inicial">Inicial</SelectItem>
                  <SelectItem value="seguimiento">Seguimiento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Modalidad</Label>
              <Select value={modality} onValueChange={(v: any) => setModality(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="presencial">Presencial</SelectItem>
                  <SelectItem value="online">En línea</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="consulted_at">Fecha y hora</Label>
              <Input
                id="consulted_at"
                name="consulted_at"
                type="datetime-local"
                defaultValue={nowLocal}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Motivo de consulta</Label>
            <Input id="reason" name="reason" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Notas SOAP</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Soap name="soap_subjective" label="S — Subjetivo (lo que refiere el paciente)" />
          <Soap name="soap_objective" label="O — Objetivo (mediciones, observaciones)" />
          <Soap name="soap_assessment" label="A — Análisis / diagnóstico nutricional" />
          <Soap name="soap_plan" label="P — Plan (intervención, plan alimentario)" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Antropometría</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Num name="weight_kg" label="Peso (kg)" />
          <Num name="height_cm" label="Talla (cm)" />
          <Num name="waist_cm" label="Cintura (cm)" />
          <Num name="hip_cm" label="Cadera (cm)" />
          <Num name="arm_cm" label="Brazo (cm)" />
          <Num name="thigh_cm" label="Muslo (cm)" />
          <Num name="calf_cm" label="Pantorrilla (cm)" />
          <Num name="neck_cm" label="Cuello (cm)" />
          <Num name="triceps_fold_mm" label="Pliegue tríceps (mm)" />
          <Num name="subscapular_fold_mm" label="Subescapular (mm)" />
          <Num name="suprailiac_fold_mm" label="Suprailíaco (mm)" />
          <Num name="abdominal_fold_mm" label="Abdominal (mm)" />
          <Num name="thigh_fold_mm" label="Muslo (mm)" />
          <p className="col-span-full text-xs text-muted-foreground">
            El IMC se calcula automáticamente con peso y talla.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Bioimpedancia Tanita (8 electrodos)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Num name="body_fat_pct" label="% Grasa" />
            <Num name="body_fat_kg" label="Grasa (kg)" />
            <Num name="muscle_mass_kg" label="Músculo (kg)" />
            <Num name="bone_mass_kg" label="Masa ósea (kg)" />
            <Num name="total_body_water_pct" label="Agua corporal %" />
            <Num name="visceral_fat" label="Grasa visceral" />
            <Num name="metabolic_age" label="Edad metabólica" />
            <Num name="bmr_kcal" label="BMR (kcal)" />
          </div>
          <div>
            <div className="text-xs uppercase text-muted-foreground tracking-wide mb-2">
              % Grasa segmentado
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <Num name="fat_pct_trunk" label="Tronco" />
              <Num name="fat_pct_right_arm" label="Brazo der." />
              <Num name="fat_pct_left_arm" label="Brazo izq." />
              <Num name="fat_pct_right_leg" label="Pierna der." />
              <Num name="fat_pct_left_leg" label="Pierna izq." />
            </div>
          </div>
          <div>
            <div className="text-xs uppercase text-muted-foreground tracking-wide mb-2">
              Músculo segmentado (kg)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <Num name="muscle_kg_trunk" label="Tronco" />
              <Num name="muscle_kg_right_arm" label="Brazo der." />
              <Num name="muscle_kg_left_arm" label="Brazo izq." />
              <Num name="muscle_kg_right_leg" label="Pierna der." />
              <Num name="muscle_kg_left_leg" label="Pierna izq." />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Plan y seguimiento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="goals">Objetivos</Label>
            <Textarea id="goals" name="goals" rows={2} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="recommendations">Recomendaciones</Label>
            <Textarea id="recommendations" name="recommendations" rows={4} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="next_appointment_at">Próxima cita</Label>
            <Input
              id="next_appointment_at"
              name="next_appointment_at"
              type="datetime-local"
            />
            <p className="text-xs text-muted-foreground">
              Se crea automáticamente en la agenda.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2 sticky bottom-4">
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Guardando…" : "Guardar consulta"}
        </Button>
      </div>
    </form>
  );
}

function Num({ name, label }: { name: string; label: string }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-xs">{label}</Label>
      <Input id={name} name={name} type="number" step="0.01" />
    </div>
  );
}

function Soap({ name, label }: { name: string; label: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} name={name} rows={3} />
    </div>
  );
}
