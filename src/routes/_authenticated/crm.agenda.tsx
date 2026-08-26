import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  listAppointments,
  listPatients,
  createAppointment,
  updateAppointmentStatus,
} from "@/lib/crm.functions";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
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
import { format, isPast, isToday, isThisWeek } from "date-fns";
import { es } from "date-fns/locale";
import { Plus, CalendarDays } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/crm/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda de citas del CRM interno" },
      { name: "description", content: "Calendario de citas del consultorio, uso interno." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AgendaPage,
});

function AgendaPage() {
  const fn = useServerFn(listAppointments);
  const { data } = useQuery({ queryKey: ["appointments"], queryFn: () => fn() });

  const upcoming = (data ?? []).filter((a) => !isPast(new Date(a.scheduled_at)));
  const past = (data ?? []).filter((a) => isPast(new Date(a.scheduled_at)));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-3xl">Agenda</h1>
        <NewAppointmentDialog />
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="font-display text-xl mb-4">Próximas</h2>
          {upcoming.length === 0 ? (
            <p className="text-sm text-muted-foreground">Sin citas próximas.</p>
          ) : (
            <ul className="divide-y">{upcoming.map((a) => <ApptRow key={a.id} appt={a} />)}</ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="font-display text-xl mb-4">Historial reciente</h2>
          {past.length === 0 ? (
            <p className="text-sm text-muted-foreground">Sin historial.</p>
          ) : (
            <ul className="divide-y">{past.map((a) => <ApptRow key={a.id} appt={a} />)}</ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ApptRow({ appt }: { appt: any }) {
  const router = useRouter();
  const update = useServerFn(updateAppointmentStatus);
  const d = new Date(appt.scheduled_at);

  async function setStatus(status: any) {
    try {
      await update({ data: { id: appt.id, status } });
      toast.success("Actualizada");
      router.invalidate();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  }

  return (
    <li className="flex flex-wrap items-center gap-3 py-3">
      <div className="w-32">
        <div className="font-medium">{format(d, "EEE d MMM", { locale: es })}</div>
        <div className="text-xs text-muted-foreground">
          {format(d, "HH:mm")}
          {isToday(d) && " · Hoy"}
          {!isToday(d) && isThisWeek(d) && " · Esta semana"}
        </div>
      </div>
      <div className="flex-1 min-w-[150px]">
        <Link
          to="/crm/pacientes/$patientId"
          params={{ patientId: appt.patients?.id ?? "" }}
          className="font-medium hover:underline"
        >
          {appt.patients?.full_name ?? "Paciente"}
        </Link>
        <div className="text-xs text-muted-foreground">
          <Badge variant="outline" className="mr-1">{appt.modality}</Badge>
          {appt.duration_minutes} min
        </div>
      </div>
      <Badge>{appt.status}</Badge>
      <Select value={appt.status} onValueChange={setStatus}>
        <SelectTrigger className="w-36 h-8 text-xs">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="agendada">Agendada</SelectItem>
          <SelectItem value="confirmada">Confirmada</SelectItem>
          <SelectItem value="realizada">Realizada</SelectItem>
          <SelectItem value="cancelada">Cancelada</SelectItem>
          <SelectItem value="no_asistio">No asistió</SelectItem>
        </SelectContent>
      </Select>
    </li>
  );
}

function NewAppointmentDialog() {
  const router = useRouter();
  const create = useServerFn(createAppointment);
  const patientsFn = useServerFn(listPatients);
  const { data: patients } = useQuery({ queryKey: ["patients"], queryFn: () => patientsFn() });
  const [open, setOpen] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [modality, setModality] = useState<"presencial" | "online">("presencial");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!patientId) return toast.error("Selecciona paciente");
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    try {
      await create({
        data: {
          patient_id: patientId,
          scheduled_at: new Date(String(fd.get("scheduled_at"))).toISOString(),
          duration_minutes: Number(fd.get("duration_minutes") || 60),
          modality,
          notes: (fd.get("notes") as string) || null,
        },
      });
      toast.success("Cita creada");
      setOpen(false);
      router.invalidate();
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
          <Plus className="mr-2 h-4 w-4" /> Nueva cita
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display">
            <CalendarDays className="inline h-5 w-5 mr-2" />
            Agendar cita
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Paciente</Label>
            <Select value={patientId} onValueChange={setPatientId}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar paciente" />
              </SelectTrigger>
              <SelectContent>
                {patients?.map((p) => (
                  <SelectItem key={p.id} value={p.id}>{p.full_name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="scheduled_at">Fecha y hora</Label>
              <Input id="scheduled_at" name="scheduled_at" type="datetime-local" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration_minutes">Duración (min)</Label>
              <Input
                id="duration_minutes"
                name="duration_minutes"
                type="number"
                defaultValue={60}
                min={15}
                max={240}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Modalidad</Label>
            <Select value={modality} onValueChange={(v: any) => setModality(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="presencial">Presencial (Hea'n Clinic)</SelectItem>
                <SelectItem value="online">En línea</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notas</Label>
            <Input id="notes" name="notes" />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Guardando…" : "Agendar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
