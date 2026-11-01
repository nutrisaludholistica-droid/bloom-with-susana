// Inicialización de Google Analytics 4 (gtag.js). Solo se ejecuta en el
// navegador y una sola vez por sesión de página.

export const GA_MEASUREMENT_ID =
  (import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
    | string
    | undefined) || "G-J5PM6WYZ9F";

let initialized = false;

export function initGA4(): void {
  if (typeof window === "undefined") return;
  if (initialized || !GA_MEASUREMENT_ID) return;
  initialized = true;
  // El snippet oficial del <head> ya cargó y configuró gtag.
  if ((window as unknown as { __gaHead?: boolean }).__gaHead) return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args as unknown as Record<string, unknown>);
    };
  }

  if (!document.querySelector<HTMLScriptElement>(`script[data-ga4="${GA_MEASUREMENT_ID}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.dataset.ga4 = GA_MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: true });
}

export function trackPageView(path: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
