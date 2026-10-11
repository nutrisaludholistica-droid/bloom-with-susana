import { WA_MSG, type WaMessageKey } from "@/lib/whatsapp";

export interface FaqItem {
  q: string;
  /** Respuesta en texto plano (se usa también en el marcado FAQPage). */
  a: string;
  /** CTA opcional a WhatsApp con mensaje precargado según el tema. */
  cta?: { label: string; msg: WaMessageKey };
}

export const FAQS: FaqItem[] = [
  {
    q: "¿Trabajas como nutrióloga para recomposición corporal?",
    a: "Sí. Es uno de mis enfoques principales: perder grasa y ganar masa muscular al mismo tiempo, con un plan calculado a partir de tu bioimpedancia de 8 electrodos y ajustado cada seguimiento. Sin dietas extremas ni pérdida de músculo.",
    cta: { label: "Quiero un plan de recomposición corporal", msg: "faqRecomposicion" },
  },
  {
    q: "¿Puedes ayudarme con nutrición para salud digestiva?",
    a: "Sí. Trabajo inflamación, distensión abdominal, estreñimiento, colitis y síndrome de intestino irritable con estrategias progresivas de alimentación y cuidado de la microbiota, adaptadas a lo que tu cuerpo tolera hoy.",
    cta: { label: "Quiero mejorar mi digestión", msg: "faqDigestiva" },
  },
  {
    q: "¿Atiendes en línea si no vivo en Playa del Carmen?",
    a: "Sí. La consulta en línea es por videollamada y funciona igual que la presencial: historia de salud completa, plan personalizado en la app Avena Health y seguimiento por WhatsApp. Para las mediciones te guío paso a paso.",
    cta: { label: "Agendar consulta en línea", msg: "enLinea" },
  },
  {
    q: "¿Cuánto cuesta la consulta con nutrióloga en Playa del Carmen?",
    a: "La consulta inicial es de $1,200 MXN e incluye historia de salud, antropometría, bioimpedancia y plan personalizado. El seguimiento es de $1,000 MXN. Los paquetes de acompañamiento van de $4,000 (3 meses) a $10,000 MXN (9 meses).",
    cta: { label: "Ver disponibilidad y agendar", msg: "faqPrecio" },
  },
  {
    q: "¿Qué incluye la primera consulta de nutrición?",
    a: "Historia de salud completa, revisión de hábitos y antecedentes, mediciones antropométricas, análisis de composición corporal con bioimpedancia de 8 electrodos y tu plan de alimentación personalizado en la app Avena Health. Dura alrededor de 60 minutos.",
    cta: { label: "Agendar mi primera consulta", msg: "faqPrimeraConsulta" },
  },
  {
    q: "¿Qué es la bioimpedancia de 8 electrodos y para qué sirve?",
    a: "Es un análisis de composición corporal segmentado que mide masa muscular, porcentaje de grasa, grasa visceral y agua corporal por brazos, piernas y tronco. Sirve para saber si estás perdiendo grasa o músculo, algo que la báscula sola no puede decirte.",
    cta: { label: "Quiero mi análisis corporal", msg: "tanita" },
  },
  {
    q: "¿La consulta puede ser presencial o en línea?",
    a: "Las dos. Presencial en Hea’n Clinic, Humana Work Center, Av. Paseo Central esq. Av. Chemuyil, Col. El Pedregal, C.P. 77712, Playa del Carmen, Quintana Roo; o en línea por videollamada desde donde estés.",
  },
  {
    q: "¿Necesito experiencia previa con dietas o ejercicio?",
    a: "No. El acompañamiento parte de donde estás hoy: si nunca has llevado un plan o si vienes de años de dietas restrictivas, el punto de partida se adapta a ti.",
  },
  {
    q: "¿Cómo funciona el seguimiento por WhatsApp?",
    a: "En los paquetes de acompañamiento tenemos contacto por WhatsApp dos veces por semana para resolver dudas, ajustar el plan y sostener los hábitos entre consultas. Algunos paquetes incluyen visita al supermercado y clases de cocina saludable a domicilio (los insumos no están incluidos).",
  },
  {
    q: "¿Cómo agendo mi consulta?",
    a: "Escríbeme por WhatsApp al +52 984 279 9652 y te comparto horarios disponibles para consulta presencial en Playa del Carmen o en línea. También puedes llamar al consultorio al 984 367 7627.",
    cta: { label: "Agendar por WhatsApp", msg: "faqAgenda" },
  },
];

/** Texto plano para el marcado FAQPage (incluye la invitación del CTA). */
export function faqAnswerText(item: FaqItem): string {
  return item.cta ? `${item.a} ${WA_MSG[item.cta.msg]}` : item.a;
}
