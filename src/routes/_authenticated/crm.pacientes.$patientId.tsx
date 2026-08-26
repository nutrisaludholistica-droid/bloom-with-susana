import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  getPatient,
  addAllergy,
  deleteAllergy,
  addMedication,
  updateMedicationStatus,
  upsertHistory,
} from "@/lib/crm.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertTriangle,
  Plus,
  Trash2,
  Phone,
  Mail,
  Calendar,
  FileCheck2,
  Pill,
  Activity,
  ChevronLeft,
} from "lucide-react";
import { format, differenceInYears } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/crm/pacientes/$patientId")({
  head: () => ({
    meta: [
      { title: "Expediente del paciente en el CRM interno" },
      { name: "description", content: "Expediente clínico completo del paciente, uso interno." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PatientDetail,
});

function PatientDetail() {
  const { patientId } = Route.useParams();
  const fn = useServerFn(getPatient);
  const { data, isLoading } = useQuery({
    queryKey: ["patient", patientId],
    queryFn: () => fn({ data: { id: patientId } }),
  });

  if (isLoading) return <p className="text-muted-foreground">Cargando…</p>;
  if (!data) return <p>No encontrado.</p>;

  const p = data.patient;
  const age = p.birth_date ? differenceInYears(new Date(), new Date(p.birth_date)) : null;
  const lastAnthro = data.anthropometry[0];
  const lastBio = data.bioimpedance[0];
  const activeAllergies = data.allergies;
  const activeMeds = data.medications.filter((m) => m.status === "activo");

  return (
    <div className="space-y-4">
      <Link
        to="/crm/pacientes"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" /> Pacientes
      </Link>

      {/* Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-display text-xl">
                {p.full_name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="font-display text-2xl">{p.full_name}</h1>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
                  {age !== null && <span>{age} años</span>}
                  {p.sex && <span className="capitalize">{p.sex}</span>}
                  {p.phone && (
                    <a href={`tel:${p.phone}`} className="inline-flex items-center gap-1 hover:text-foreground">
                      <Phone className="h-3 w-3" />
                      {p.phone}
                    </a>
                  )}
                  {p.email && (
                    <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1 hover:text-foreground">
                      <Mail className="h-3 w-3" />
                      {p.email}
                    </a>
                  )}
                </div>
                {p.consent_signed ? (
                  <Badge variant="secondary" className="mt-2">
                    <FileCheck2 className="h-3 w-3 mr-1" /> Consentimiento firmado
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-2 border-orange-400 text-orange-700">
                    Sin consentimiento informado
                  </Badge>
                )}
              </div>
            </div>
            <Link
              to="/crm/pacientes/$patientId/consulta"
              params={{ patientId }}
            >
              <Button>
                <Plus className="h-4 w-4 mr-2" /> Nueva consulta
              </Button>
            </Link>
          </div>

          {/* Alergias banner */}
          {activeAllergies.length > 0 && (
            <div className="mt-4 rounded-md border border-destructive/40 bg-destructive/5 p-3">
              <div className="flex items-center gap-2 text-destructive font-medium text-sm">
                <AlertTriangle className="h-4 w-4" />
                Alergias / intolerancias
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {activeAllergies.map((a) => (
                  <Badge
                    key={a.id}
                    variant={a.severity === "severa" ? "destructive" : "outline"}
                  >
                    {a.allergen} · {a.severity}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-4 gap-3">
        <MiniStat label="Última consulta">
          {data.consultations[0]
            ? format(new Date(data.consultations[0].consulted_at), "d MMM yyyy", { locale: es })
            : "n/d"}
        </MiniStat>
        <MiniStat label="Peso actual">
          {lastAnthro?.weight_kg ? `${lastAnthro.weight_kg} kg` : "n/d"}
        </MiniStat>
        <MiniStat label="IMC">
          {lastAnthro?.bmi ?? "n/d"}
        </MiniStat>
        <MiniStat label="% grasa (Tanita)">
          {lastBio?.body_fat_pct ? `${lastBio.body_fat_pct}%` : "n/d"}
        </MiniStat>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="consultas" className="w-full">
        <TabsList className="w-full justify-start flex-wrap h-auto">
          <TabsTrigger value="consultas">Consultas</TabsTrigger>
          <TabsTrigger value="antropo">Antropometría · Tanita</TabsTrigger>
          <TabsTrigger value="alergias">Alergias · Medicamentos</TabsTrigger>
          <TabsTrigger value="antecedentes">Antecedentes</TabsTrigger>
          <TabsTrigger value="datos">Datos</TabsTrigger>
        </TabsList>

        <TabsContent value="consultas" className="mt-4">
          <ConsultationsTab consultations={data.consultations} anthro={data.anthropometry} bio={data.bioimpedance} />
        </TabsContent>
        <TabsContent value="antropo" className="mt-4">
          <AnthroTab anthro={data.anthropometry} bio={data.bioimpedance} />
        </TabsContent>
        <TabsContent value="alergias" className="mt-4 space-y-4">
          <AllergiesCard patientId={patientId} allergies={data.allergies} />
          <MedicationsCard patientId={patientId} meds={data.medications} />
        </TabsContent>
        <TabsContent value="antecedentes" className="mt-4">
          <HistoryTab patientId={patientId} history={data.history} />
        </TabsContent>
        <TabsContent value="datos" className="mt-4">
          <DataTab patient={p} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MiniStat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="pt-5 pb-5">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className="text-lg font-medium mt-1">{children}</div>
      </CardContent>
    </Card>
  );
}

function ConsultationsTab({
  consultations,
  anthro,
  bio,
}: {
  consultations: any[];
  anthro: any[];
  bio: any[];
}) {
  if (consultations.length === 0)
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          Sin consultas registradas.
        </CardContent>
      </Card>
    );
  return (
    <div className="space-y-3">
      {consultations.map((c) => {
        const a = anthro.find((x) => x.consultation_id === c.id);
        const b = bio.find((x) => x.consultation_id === c.id);
        return (
          <Card key={c.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="font-display text-lg">
                  {c.consultation_type === "inicial" ? "Consulta inicial" : "Seguimiento"}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {format(new Date(c.consulted_at), "EEEE d MMM yyyy, HH:mm", { locale: es })}
                  <Badge variant="outline" className="ml-2">{c.modality}</Badge>
                </div>
              </div>
              {c.reason && <p className="text-sm text-muted-foreground">{c.reason}</p>}
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {c.soap_subjective && <SoapBlock label="S: Subjetivo" text={c.soap_subjective} />}
              {c.soap_objective && <SoapBlock label="O: Objetivo" text={c.soap_objective} />}
              {c.soap_assessment && <SoapBlock label="A: Análisis" text={c.soap_assessment} />}
              {c.soap_plan && <SoapBlock label="P: Plan" text={c.soap_plan} />}
              {(a || b) && (
                <div className="rounded-md bg-secondary/40 p-3 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {a?.weight_kg && <Metric label="Peso" v={`${a.weight_kg} kg`} />}
                  {a?.bmi && <Metric label="IMC" v={a.bmi} />}
                  {a?.waist_cm && <Metric label="Cintura" v={`${a.waist_cm} cm`} />}
                  {b?.body_fat_pct && <Metric label="% Grasa" v={`${b.body_fat_pct}%`} />}
                  {b?.muscle_mass_kg && <Metric label="Músculo" v={`${b.muscle_mass_kg} kg`} />}
                  {b?.visceral_fat && <Metric label="Visceral" v={b.visceral_fat} />}
                </div>
              )}
              {c.recommendations && (
                <div>
                  <div className="text-xs font-medium uppercase text-muted-foreground">
                    Recomendaciones
                  </div>
                  <p className="whitespace-pre-wrap">{c.recommendations}</p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function SoapBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-xs font-medium uppercase text-muted-foreground tracking-wide">
        {label}
      </div>
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  );
}

function Metric({ label, v }: { label: string; v: any }) {
  return (
    <div>
      <div className="text-muted-foreground">{label}</div>
      <div className="font-medium">{v}</div>
    </div>
  );
}

function AnthroTab({ anthro, bio }: { anthro: any[]; bio: any[] }) {
  if (anthro.length === 0 && bio.length === 0)
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          Sin mediciones registradas. Captura desde una consulta.
        </CardContent>
      </Card>
    );
  return (
    <div className="space-y-4">
      {anthro.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <Activity className="h-5 w-5" /> Antropometría
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="text-left py-2 pr-3">Fecha</th>
                  <th className="text-right pr-3">Peso (kg)</th>
                  <th className="text-right pr-3">Talla (cm)</th>
                  <th className="text-right pr-3">IMC</th>
                  <th className="text-right pr-3">Cintura</th>
                  <th className="text-right pr-3">Cadera</th>
                  <th className="text-right pr-3">Brazo</th>
                </tr>
              </thead>
              <tbody>
                {anthro.map((a) => (
                  <tr key={a.id} className="border-t">
                    <td className="py-2 pr-3">
                      {format(new Date(a.measured_at), "d MMM yyyy", { locale: es })}
                    </td>
                    <td className="text-right pr-3">{a.weight_kg ?? "n/d"}</td>
                    <td className="text-right pr-3">{a.height_cm ?? "n/d"}</td>
                    <td className="text-right pr-3">{a.bmi ?? "n/d"}</td>
                    <td className="text-right pr-3">{a.waist_cm ?? "n/d"}</td>
                    <td className="text-right pr-3">{a.hip_cm ?? "n/d"}</td>
                    <td className="text-right pr-3">{a.arm_cm ?? "n/d"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {bio.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-display">Bioimpedancia Tanita (8 electrodos)</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="text-left py-2 pr-3">Fecha</th>
                  <th className="text-right pr-3">% Grasa</th>
                  <th className="text-right pr-3">Músculo (kg)</th>
                  <th className="text-right pr-3">Agua %</th>
                  <th className="text-right pr-3">Grasa visc.</th>
                  <th className="text-right pr-3">BMR</th>
                  <th className="text-right pr-3">Edad meta.</th>
                </tr>
              </thead>
              <tbody>
                {bio.map((b) => (
                  <tr key={b.id} className="border-t">
                    <td className="py-2 pr-3">
                      {format(new Date(b.measured_at), "d MMM yyyy", { locale: es })}
                    </td>
                    <td className="text-right pr-3">{b.body_fat_pct ?? "n/d"}</td>
                    <td className="text-right pr-3">{b.muscle_mass_kg ?? "n/d"}</td>
                    <td className="text-right pr-3">{b.total_body_water_pct ?? "n/d"}</td>
                    <td className="text-right pr-3">{b.visceral_fat ?? "n/d"}</td>
                    <td className="text-right pr-3">{b.bmr_kcal ?? "n/d"}</td>
                    <td className="text-right pr-3">{b.metabolic_age ?? "n/d"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted-foreground mt-3">
              Detalles segmentados (brazos, piernas, tronco) se guardan en cada registro.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function AllergiesCard({ patientId, allergies }: { patientId: string; allergies: any[] }) {
  const router = useRouter();
  const add = useServerFn(addAllergy);
  const del = useServerFn(deleteAllergy);
  const [open, setOpen] = useState(false);

  async function onAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await add({
        data: {
          patient_id: patientId,
          allergen: String(fd.get("allergen")),
          severity: fd.get("severity") as any,
          reaction: (fd.get("reaction") as string) || null,
          notes: (fd.get("notes") as string) || null,
          detected_at: (fd.get("detected_at") as string) || null,
        },
      });
      toast.success("Alergia agregada");
      setOpen(false);
      router.invalidate();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  }

  async function onDelete(id: string) {
    if (!confirm("¿Eliminar alergia?")) return;
    await del({ data: { id } });
    router.invalidate();
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="font-display flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" /> Alergias / intolerancias
        </CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" /> Agregar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva alergia / intolerancia</DialogTitle>
            </DialogHeader>
            <form onSubmit={onAdd} className="space-y-3">
              <div className="space-y-2">
                <Label>Alérgeno *</Label>
                <Input name="allergen" required />
              </div>
              <div className="space-y-2">
                <Label>Severidad</Label>
                <Select name="severity" defaultValue="leve">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leve">Leve</SelectItem>
                    <SelectItem value="moderada">Moderada</SelectItem>
                    <SelectItem value="severa">Severa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Reacción</Label>
                <Input name="reaction" />
              </div>
              <div className="space-y-2">
                <Label>Detectada el</Label>
                <Input name="detected_at" type="date" />
              </div>
              <div className="space-y-2">
                <Label>Notas</Label>
                <Textarea name="notes" rows={2} />
              </div>
              <DialogFooter>
                <Button type="submit">Guardar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {allergies.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin alergias registradas.</p>
        ) : (
          <ul className="divide-y">
            {allergies.map((a) => (
              <li key={a.id} className="flex items-center gap-3 py-2">
                <div className="flex-1">
                  <div className="font-medium">{a.allergen}</div>
                  <div className="text-xs text-muted-foreground">
                    {a.severity}
                    {a.reaction && ` · ${a.reaction}`}
                    {a.notes && ` · ${a.notes}`}
                  </div>
                </div>
                <Button size="sm" variant="ghost" onClick={() => onDelete(a.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function MedicationsCard({ patientId, meds }: { patientId: string; meds: any[] }) {
  const router = useRouter();
  const add = useServerFn(addMedication);
  const updateStatus = useServerFn(updateMedicationStatus);
  const [open, setOpen] = useState(false);

  async function onAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await add({
        data: {
          patient_id: patientId,
          name: String(fd.get("name")),
          is_supplement: fd.get("is_supplement") === "on",
          dose: (fd.get("dose") as string) || null,
          frequency: (fd.get("frequency") as string) || null,
          indication: (fd.get("indication") as string) || null,
          prescriber: (fd.get("prescriber") as string) || null,
          start_date: (fd.get("start_date") as string) || null,
        },
      });
      toast.success("Agregado");
      setOpen(false);
      router.invalidate();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="font-display flex items-center gap-2">
          <Pill className="h-5 w-5" /> Medicamentos y suplementos
        </CardTitle>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              <Plus className="h-4 w-4 mr-1" /> Agregar
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo medicamento / suplemento</DialogTitle>
            </DialogHeader>
            <form onSubmit={onAdd} className="space-y-3">
              <div className="space-y-2">
                <Label>Nombre *</Label>
                <Input name="name" required />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <Checkbox name="is_supplement" />
                Es suplemento (no medicamento)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Dosis</Label>
                  <Input name="dose" placeholder="500 mg" />
                </div>
                <div className="space-y-2">
                  <Label>Frecuencia</Label>
                  <Input name="frequency" placeholder="cada 8 hrs" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Indicación</Label>
                <Input name="indication" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label>Prescrito por</Label>
                  <Input name="prescriber" />
                </div>
                <div className="space-y-2">
                  <Label>Inicio</Label>
                  <Input name="start_date" type="date" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {meds.length === 0 ? (
          <p className="text-sm text-muted-foreground">Sin medicamentos registrados.</p>
        ) : (
          <ul className="divide-y">
            {meds.map((m) => (
              <li key={m.id} className="flex items-center gap-3 py-2">
                <div className="flex-1">
                  <div className="font-medium flex items-center gap-2">
                    {m.name}
                    {m.is_supplement && (
                      <Badge variant="outline" className="text-xs">Suplemento</Badge>
                    )}
                    {m.status === "suspendido" && (
                      <Badge variant="secondary" className="text-xs">Suspendido</Badge>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {[m.dose, m.frequency, m.indication].filter(Boolean).join(" · ")}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={async () => {
                    await updateStatus({
                      data: {
                        id: m.id,
                        status: m.status === "activo" ? "suspendido" : "activo",
                      },
                    });
                    router.invalidate();
                  }}
                >
                  {m.status === "activo" ? "Suspender" : "Reactivar"}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}

function HistoryTab({ patientId, history }: { patientId: string; history: any }) {
  const router = useRouter();
  const upsert = useServerFn(upsertHistory);
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSaving(true);
    try {
      const data: any = { patient_id: patientId };
      for (const k of [
        "hereditary",
        "pathological",
        "non_pathological",
        "gyneco_obstetric",
        "surgical",
        "smoking",
        "alcohol",
        "physical_activity",
        "sleep",
        "bowel_habits",
        "hydration",
      ]) {
        const v = fd.get(k) as string;
        data[k] = v || null;
      }
      await upsert({ data });
      toast.success("Antecedentes guardados");
      router.invalidate();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={onSubmit} className="space-y-4">
          {[
            ["hereditary", "Heredofamiliares"],
            ["pathological", "Patológicos personales"],
            ["non_pathological", "No patológicos"],
            ["gyneco_obstetric", "Gineco-obstétricos"],
            ["surgical", "Quirúrgicos / hospitalizaciones"],
          ].map(([k, label]) => (
            <div key={k} className="space-y-2">
              <Label htmlFor={k}>{label}</Label>
              <Textarea id={k} name={k} rows={2} defaultValue={history?.[k] ?? ""} />
            </div>
          ))}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["smoking", "Tabaquismo"],
              ["alcohol", "Alcohol"],
              ["physical_activity", "Actividad física"],
              ["sleep", "Sueño"],
              ["bowel_habits", "Hábito intestinal"],
              ["hydration", "Hidratación"],
            ].map(([k, label]) => (
              <div key={k} className="space-y-2">
                <Label htmlFor={k}>{label}</Label>
                <Input id={k} name={k} defaultValue={history?.[k] ?? ""} />
              </div>
            ))}
          </div>
          <Button type="submit" disabled={saving}>
            {saving ? "Guardando…" : "Guardar antecedentes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function DataTab({ patient }: { patient: any }) {
  return (
    <Card>
      <CardContent className="pt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <Info label="Nombre" v={patient.full_name} />
        <Info
          label="Fecha de nacimiento"
          v={
            patient.birth_date
              ? format(new Date(patient.birth_date), "d MMM yyyy", { locale: es })
              : "n/d"
          }
        />
        <Info label="Sexo" v={patient.sex ?? "n/d"} />
        <Info label="Teléfono" v={patient.phone ?? "n/d"} />
        <Info label="Correo" v={patient.email ?? "n/d"} />
        <Info label="Ocupación" v={patient.occupation ?? "n/d"} />
        <Info label="Dirección" v={patient.address ?? "n/d"} />
        <Info label="Contacto de emergencia" v={patient.emergency_contact_name ?? "n/d"} />
        <Info label="Tel. emergencia" v={patient.emergency_contact_phone ?? "n/d"} />
        <Info
          label="Alta"
          v={format(new Date(patient.created_at), "d MMM yyyy", { locale: es })}
        />
        <Info
          label="Consentimiento informado"
          v={
            patient.consent_signed && patient.consent_signed_at
              ? `Firmado el ${format(new Date(patient.consent_signed_at), "d MMM yyyy", { locale: es })}`
              : "Pendiente"
          }
        />
        {patient.notes && (
          <div className="sm:col-span-2">
            <Info label="Notas" v={patient.notes} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Info({ label, v }: { label: string; v: string }) {
  return (
    <div>
      <div className="text-xs uppercase text-muted-foreground tracking-wide">{label}</div>
      <div className="mt-0.5 whitespace-pre-wrap">{v}</div>
    </div>
  );
}
