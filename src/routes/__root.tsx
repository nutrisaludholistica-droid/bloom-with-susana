import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { initGA4, trackPageView } from "../lib/ga4";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}


function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no pudo cargarse
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo salió mal de nuestro lado. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nutrióloga y chef Susana Wignall · Playa del Carmen y en línea" },
      {
        name: "description",
        content:
          "Susana Wignall, nutrióloga y chef en Playa del Carmen y en línea. Acompañamiento personalizado en recomposición corporal, salud digestiva y hábitos sostenibles. Cédula 156228944.",
      },
      { name: "author", content: "Susana Wignall, Nutrióloga" },
      { property: "og:site_name", content: "Nutrióloga Susana Wignall" },
      { property: "og:title", content: "Nutrióloga y chef Susana Wignall · Playa del Carmen y en línea" },
      {
        property: "og:description",
        content:
          "Reconecta con tu cuerpo desde una nutrición consciente y sostenible. Consultas y paquetes de acompañamiento en Playa del Carmen y en línea.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Susana Wignall, nutrióloga en Playa del Carmen y en línea" },
      { name: "twitter:description", content: "Nutrióloga en Playa del Carmen y en línea. Acompañamiento personalizado en recomposición corporal, salud digestiva y hábitos sostenibles. Cédula profesional 156228944." },
      { name: "google-site-verification", content: "vHBjtVrI93psm_AlDbLID0HsELH4UsR1Imv3X78tRtI" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500&family=Karla:wght@300;400;500&family=Nothing+You+Could+Do&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],

    scripts: [
      {

        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://susanawignall.com/#website",
          name: "Nutrióloga Susana Wignall",
          alternateName: ["Susana Wignall Nutrición", "Susana Wignall"],
          url: "https://susanawignall.com/",
          inLanguage: "es-MX",
          publisher: { "@id": "https://susanawignall.com/#negocio" },
        }),
      },
    ],
  }),


  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

/** Carga gtag.js tras interacción real para no competir con el LCP móvil. */
function GoogleAnalytics() {
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    const start = () => {
      if (cancelled) return;
      initGA4();
    };
    const startOnInteraction = () => start();
    window.addEventListener("pointerdown", startOnInteraction, { once: true, passive: true });
    window.addEventListener("keydown", startOnInteraction, { once: true });
    let last = window.location.pathname + window.location.search;
    const unsubscribe = router.subscribe("onResolved", () => {
      const current = window.location.pathname + window.location.search;
      if (current === last) return;
      last = current;
      initGA4();
      trackPageView(current);
    });
    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", startOnInteraction);
      window.removeEventListener("keydown", startOnInteraction);
      unsubscribe();
    };
  }, [router]);

  return null;
}



function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <GoogleAnalytics />

      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
