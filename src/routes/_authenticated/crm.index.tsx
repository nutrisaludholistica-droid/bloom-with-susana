import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getDashboard, updateAppointmentStatus } from "@/lib/crm.functions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CalendarDays, Clock, CheckCircle2, Phone, Plus } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/crm/")({
  head: () => ({
    meta: [
      { title: "Panel del CRM interno" },
      { name: "description", content: "Resumen de citas y pacientes del consultorio." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const fn = useServerFn(getDashboard);
  const updateStatus = useServerFn(updateAppointmentStatus);
  const router = useRouter();
  const { data, isLoading } = useQuery({ queryKey: ["dashboard"], queryFn: () => fn() });

  async function markDone(id: string) {
    try {
      await updateStatus({ data: { id, status: "realizada" } });
      toast.success("Marcada como realizada");
      router.invalidate();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Error");
    }
  }

  if (isLoading) return <p className="text-muted-foreground">Cargando…</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl">Bienvenida, Susana</h1>
          <p className="text-muted-foreground">Resumen de tu día</p>
        </div>
        <Link to="/crm/pacientes">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nuevo paciente
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat icon={<Users />} label="Pacientes activos" value={data?.patientCount ?? 0} />
        <Stat
          icon={<CalendarDays />}
          label="Citas esta semana"
          value={data?.weekCount ?? 0}
        />
        <Stat icon={<Clock />} label="Citas hoy" value={data?.today.length ?? 0} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Agenda de hoy</CardTitle>
        </CardHeader>
        <CardContent>
          {data?.today.length ? (
            <ul className="divide-y">
              {data.today.map((a) => (
                <li key={a.id} className="flex flex-wrap items-center gap-3 py-3">
                  <div className="font-mono text-sm w-20">
                    {format(new Date(a.scheduled_at), "HH:mm")}
                  </div>
                  <div className="flex-1 min-w-[160px]">
                    <Link
                      to="/crm/pacientes/$patientId"
                      params={{ patientId: a.patients?.id ?? "" }}
                      className="font-medium hover:underline"
                    >
                      {a.patients?.full_name ?? "Paciente"}
                    </Link>
                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                      <Badge variant="outline">{a.modality}</Badge>
                      {a.patients?.phone && (
                        <a
                          href={`tel:${a.patients.phone}`}
                          className="inline-flex items-center gap-1"
                        >
                          <Phone className="h-3 w-3" />
                          {a.patients.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  <Badge>{a.status}</Badge>
                  {a.status !== "realizada" && (
                    <Button size="sm" variant="ghost" onClick={() => markDone(a.id)}>
                      <CheckCircle2 className="h-4 w-4" />
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">Sin citas hoy.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Pacientes recientes</CardTitle>
        </CardHeader>
        <CardContent>
          {data?.recent.length ? (
            <ul className="grid sm:grid-cols-2 gap-2">
              {data.recent.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/crm/pacientes/$patientId"
                    params={{ patientId: p.id }}
                    className="block rounded-md border p-3 hover:bg-secondary transition"
                  >
                    <div className="font-medium">{p.full_name}</div>
                    <div className="text-xs text-muted-foreground">
                      Actualizado{" "}
                      {format(new Date(p.updated_at), "d MMM yyyy", { locale: es })}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">Aún no hay pacientes.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-display">{value}</div>
          <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
