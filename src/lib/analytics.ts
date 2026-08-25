// Lightweight WhatsApp click tracking. Dispara en dataLayer (GTM) y gtag (GA4)
// si están presentes en `window`. Silencioso en SSR y cuando no hay tracker.

import { initGA4 } from "./ga4";

type TrackContext = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Deriva el nombre de sección a partir del event id (`whatsapp_click_hero` → `hero`). */
function sectionFromEventId(eventId: string): string {
  return eventId.replace(/^whatsapp_click_?/, "") || "generico";
}

export function trackWaClick(eventId: string, context: TrackContext = {}): void {
  if (typeof window === "undefined") return;
  initGA4();
  const params = {
    event_id: eventId,
    section: sectionFromEventId(eventId),
    page_path: window.location.pathname,
    ...context,
  };
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: "whatsapp_click", ...params });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", params);
    }
  } catch {
    // no-op: nunca romper la navegación por analítica
  }
}

export function trackSocialClick(platform: "instagram" | "facebook", account: "personal" | "maiz-sal"): void {
  if (typeof window === "undefined") return;
  initGA4();
  const eventId = `social_click_${platform}_${account}`;
  const params = {
    event_id: eventId,
    platform,
    account,
    page_path: window.location.pathname,
  };
  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: "social_click", ...params });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "social_click", params);
    }
  } catch {
    // no-op
  }
}
