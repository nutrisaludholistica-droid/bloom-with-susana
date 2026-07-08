// Central WhatsApp helpers. All CTAs deben usar `waUrl(WA_MSG.xxx)` para
// mantener consistencia y trazabilidad de mensajes precargados por sección.

export const WHATSAPP_NUMBER = "529842799652";
export const PHONE_CLINIC = "984 367 7627";
export const PHONE_WHATSAPP = "+52 984 279 9652";

export const WA_MSG = {
  promoGratis:
    "Hola Susana, vi la promo de julio y quiero agendar mi consulta gratis 🎉. ¿Cuáles son los horarios disponibles?",
  hero:
    "Hola Susana, vengo de tu sitio web y quiero agendar mi consulta de nutrición. ¿Me cuentas cómo funciona?",
  howitworks:
    "Hola Susana, quiero saber más sobre cómo es la primera consulta y agendar día y modalidad.",
  basico:
    "Hola Susana, me interesa el paquete Básico (3 meses). ¿Me compartes precio, próximos inicios y forma de pago?",
  transformacion:
    "Hola Susana, me interesa el paquete Transformación (6 meses). ¿Me compartes precio, próximos inicios y forma de pago?",
  reconexion:
    "Hola Susana, me interesa el paquete Reconexión (9 meses). ¿Me compartes precio, próximos inicios y forma de pago?",
  trust:
    "Hola Susana, quiero agendar una consulta contigo. ¿Tienes disponibilidad esta semana?",
  faq:
    "Hola Susana, tengo una duda que no encontré en las preguntas frecuentes:",
  finalCta:
    "Hola Susana, quiero reservar mi consulta gratis de julio. ¿Qué necesito para agendar?",
  float:
    "Hola Susana, me gustaría más información para agendar una consulta.",
  footer:
    "Hola Susana, vengo del sitio web y quiero información para agendar una consulta.",
  generico:
    "Hola Susana, quiero más información para reservar.",
} as const;

export type WaMessageKey = keyof typeof WA_MSG;

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Backwards-compat: mantiene el import existente en componentes aún no migrados.
export const WHATSAPP_URL = waUrl(WA_MSG.generico);
