import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    denied: s.denied ? 1 : undefined,
  }),
  head: () => ({ meta: [{ title: "Acceso CRM — LN Susana Wignall" }] }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { denied } = Route.useSearch();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (denied) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/crm" });
    });
  }, [navigate, denied]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin + "/crm" },
        });
        if (error) throw error;
        toast.success("Cuenta creada. Iniciando sesión…");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/crm" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-accent/20 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-xl">
            SW
          </div>
          <CardTitle className="font-display text-2xl">CRM Clínico</CardTitle>
          <CardDescription>
            Acceso privado para LN Susana Wignall
          </CardDescription>
        </CardHeader>
        <CardContent>
          {denied && (
            <div className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              Esta cuenta no tiene autorización para acceder al CRM.
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={8}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mode === "signin" ? "Entrar" : "Crear cuenta"}
            </Button>
            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-sm text-muted-foreground hover:text-foreground w-full text-center"
            >
              {mode === "signin"
                ? "¿Primera vez? Crear cuenta"
                : "Ya tengo cuenta, iniciar sesión"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/" className="text-xs text-muted-foreground hover:underline">
              ← Volver al sitio público
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
