import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { listPatients, createPatient } from "@/lib/crm.functions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Plus, Search, User } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const Route = createFileRoute("/_authenticated/crm/pacientes")({
  head: () => ({
    meta: [
      { title: "Pacientes en el CRM interno" },
      { name: "description", content: "Listado de pacientes del expediente clínico, uso interno." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PatientsPage,
});

function PatientsPage() {
  const fn = useServerFn(listPatients);
  const { data, isLoading } = useQuery({ queryKey: ["patients"], queryFn: () => fn() });
  const [q, setQ] = useState("");
  const filtered = (data ?? []).filter((p) =>
    p.full_name.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-3xl">Pacientes</h1>
        <NewPatientDialog />
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-9"
        />
      </div>

      <Card>
        <CardContent className="pt-6">
          {isLoading ? (
            <p className="text-muted-foreground">Cargando…</p>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <User className="h-12 w-12 mx-auto mb-3 opacity-30" />
              {data?.length ? "Sin resultados." : "Aún no hay pacientes. Crea el primero."}
            </div>
          ) : (
            <ul className="divide-y">
              {filtered.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/crm/pacientes/$patientId"
                    params={{ patientId: p.id }}
                    className="flex items-center gap-3 py-3 hover:bg-secondary/40 -mx-2 px-2 rounded transition"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                      {p.full_name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{p.full_name}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.birth_date
                          ? `Nac. ${format(new Date(p.birth_date), "d MMM yyyy", { locale: es })}`
                          : "Sin fecha de nacimiento"}
                        {p.phone ? ` · ${p.phone}` : ""}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function NewPatientDialog() {
  const router = useRouter();
  const create = useServerFn(createPatient);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const result = await create({
        data: {
          full_name: String(fd.get("full_name") ?? ""),
          birth_date: (fd.get("birth_date") as string) || null,
          sex: ((fd.get("sex") as string) || null) as
            | "femenino"
            | "masculino"
            | "otro"
            | null,
          phone: (fd.get("phone") as string) || null,
          email: (fd.get("email") as string) || null,
          occupation: (fd.get("occupation") as string) || null,
          address: (fd.get("address") as string) || null,
          emergency_contact_name: (fd.get("emergency_contact_name") as string) || null,
          emergency_contact_phone: (fd.get("emergency_contact_phone") as string) || null,
          consent_signed: fd.get("consent_signed") === "on",
          notes: (fd.get("notes") as string) || null,
        },
      });
      toast.success("Paciente creado");
      setOpen(false);
      router.invalidate();
      router.navigate({ to: "/crm/pacientes/$patientId", params: { patientId: result.id } });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nuevo paciente
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">Nuevo paciente</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Nombre completo *" name="full_name" required />
            <Field label="Fecha de nacimiento" name="birth_date" type="date" />
            <div className="space-y-2">
              <Label>Sexo</Label>
              <Select name="sex">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="femenino">Femenino</SelectItem>
                  <SelectItem value="masculino">Masculino</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Field label="Teléfono" name="phone" type="tel" />
            <Field label="Correo" name="email" type="email" />
            <Field label="Ocupación" name="occupation" />
            <div className="sm:col-span-2">
              <Field label="Dirección" name="address" />
            </div>
            <Field label="Contacto de emergencia" name="emergency_contact_name" />
            <Field label="Tel. de emergencia" name="emergency_contact_phone" type="tel" />
          </div>
          <div className="space-y-2">
            <Label>Notas</Label>
            <Textarea name="notes" rows={2} />
          </div>
          <label className="flex items-start gap-2 text-sm">
            <Checkbox name="consent_signed" />
            <span>
              Consentimiento informado firmado (NOM-004). Se registra la fecha automáticamente.
            </span>
          </label>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Guardando…" : "Crear paciente"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
