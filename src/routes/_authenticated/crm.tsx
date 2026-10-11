import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Users, CalendarDays, LogOut } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/crm")({
  head: () => ({
    meta: [
      { title: "CRM interno de Susana Wignall" },
      {
        name: "description",
        content: "CRM interno de Susana Wignall. Acceso privado para el equipo del consultorio.",
      },
      { property: "og:title", content: "CRM interno de Susana Wignall" },
      {
        property: "og:description",
        content: "CRM interno de Susana Wignall. Acceso privado para el equipo del consultorio.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: CrmLayout,
});

function CrmLayout() {
  const navigate = useNavigate();

  async function signOut() {
    await supabase.auth.signOut();
    toast.success("Sesión cerrada");
    navigate({ to: "/auth" });
  }

  return (
    <div className="min-h-screen bg-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
          <Link to="/crm" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-display">
              SW
            </div>
            <div>
              <div className="font-display text-base leading-tight">CRM Clínico</div>
              <div className="text-xs text-muted-foreground leading-tight">
                Susana Wignall · Céd. 156228944
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavBtn to="/crm" icon={<LayoutDashboard className="h-4 w-4" />}>
              Inicio
            </NavBtn>
            <NavBtn to="/crm/pacientes" icon={<Users className="h-4 w-4" />}>
              Pacientes
            </NavBtn>
            <NavBtn to="/crm/agenda" icon={<CalendarDays className="h-4 w-4" />}>
              Agenda
            </NavBtn>
          </nav>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Salir</span>
          </Button>
        </div>
        <nav className="md:hidden flex border-t">
          <MobileNav to="/crm" icon={<LayoutDashboard className="h-4 w-4" />} label="Inicio" />
          <MobileNav to="/crm/pacientes" icon={<Users className="h-4 w-4" />} label="Pacientes" />
          <MobileNav to="/crm/agenda" icon={<CalendarDays className="h-4 w-4" />} label="Agenda" />
        </nav>
      </header>
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

function NavBtn({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-secondary transition"
      activeProps={{ className: "bg-secondary text-foreground font-medium" }}
      activeOptions={{ exact: to === "/crm" }}
    >
      {icon}
      {children}
    </Link>
  );
}

function MobileNav({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      to={to}
      className="flex-1 flex flex-col items-center gap-1 py-2 text-xs hover:bg-secondary"
      activeProps={{ className: "bg-secondary text-foreground font-medium" }}
      activeOptions={{ exact: to === "/crm" }}
    >
      {icon}
      {label}
    </Link>
  );
}
