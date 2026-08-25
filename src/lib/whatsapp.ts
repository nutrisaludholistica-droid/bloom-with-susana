// Central WhatsApp helpers. All CTAs deben usar `waUrl(WA_MSG.xxx)` para
// mantener consistencia y trazabilidad de mensajes precargados por sección.

export const WHATSAPP_NUMBER = "529842799652";
export const PHONE_CLINIC = "984 367 7627";
export const PHONE_WHATSAPP = "+52 984 279 9652";

export const WA_MSG = {
  promoGratis:
    "Hola Susana, vi la promo de agosto y quiero agendar mi consulta gratis 🎉. ¿Cuáles son los horarios disponibles?",
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
    "Hola Susana, quiero reservar mi consulta gratis de agosto. ¿Qué necesito para agendar?",
  float:
    "Hola Susana, me gustaría más información para agendar una consulta.",
  footer:
    "Hola Susana, vengo del sitio web y quiero información para agendar una consulta.",
  consultaNutricional:
    "Hola Susana, quiero agendar una consulta nutricional. ¿Me compartes horarios y precio?",
  enLinea:
    "Hola Susana, quiero agendar una consulta de nutrición en línea. ¿Cómo funciona y qué horarios tienes?",
  tanita:
    "Hola Susana, me interesa el análisis de composición corporal con Tanita. ¿Cómo lo agendo?",
  faqRecomposicion:
    "Hola Susana, quiero trabajar recomposición corporal (bajar grasa y ganar músculo). ¿Cómo empezamos?",
  faqDigestiva:
    "Hola Susana, tengo molestias digestivas (inflamación/colitis) y quiero mejorar mi salud digestiva. ¿Me ayudas?",
  faqPrecio:
    "Hola Susana, vi los precios en tu sitio y quiero agendar mi consulta. ¿Qué horarios tienes disponibles?",
  faqPrimeraConsulta:
    "Hola Susana, quiero agendar mi primera consulta de nutrición. ¿Qué necesito llevar y qué horarios tienes?",
  faqAgenda:
    "Hola Susana, quiero agendar mi consulta. ¿Me compartes los horarios disponibles?",
  generico:
    "Hola Susana, quiero más información para reservar.",
} as const;

export type WaMessageKey = keyof typeof WA_MSG;

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Backwards-compat: mantiene el import existente en componentes aún no migrados.
export const WHATSAPP_URL = waUrl(WA_MSG.generico);
