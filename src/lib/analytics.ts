// Lightweight WhatsApp click tracking. Dispara en dataLayer (GTM) y gtag (GA4)
// si están presentes en `window`. Silencioso en SSR y cuando no hay tracker.

type TrackContext = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWaClick(eventId: string, context: TrackContext = {}): void {
  if (typeof window === "undefined") return;
  const payload = {
    event: "whatsapp_click",
    event_id: eventId,
    ...context,
  };
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(payload);
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        event_id: eventId,
        ...context,
      });
    }
  } catch {
    // no-op: nunca romper la navegación por analítica
  }
}
