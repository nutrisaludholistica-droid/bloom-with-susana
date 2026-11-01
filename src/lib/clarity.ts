// Microsoft Clarity. Solo navegador, una vez, y nunca en rutas privadas (CRM/auth).
const CLARITY_ID = "z71ntgfspf";
let loaded = false;

export function isPrivatePath(path: string): boolean {
  return path.startsWith("/crm") || path.startsWith("/auth");
}

export function initClarity(): void {
  if (typeof window === "undefined" || loaded) return;
  if (isPrivatePath(window.location.pathname)) return;
  loaded = true;
  const w = window as unknown as Record<string, any>;
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      (w.clarity.q = w.clarity.q || []).push(args);
    };
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(s);
}
