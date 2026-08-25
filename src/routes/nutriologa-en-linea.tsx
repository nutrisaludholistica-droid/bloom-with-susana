import { createFileRoute } from "@tanstack/react-router";
import {
  SeoServicePage,
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  type SeoBlock,
  type SeoFaq,
} from "@/components/landing/SeoServicePage";
import { WA_MSG } from "@/lib/whatsapp";

const pageUrl = "https://susanawignall.com/nutriologa-en-linea";
const title = "Nutrióloga en línea para todo México";
const description =
  "Consulta de nutrición en línea por videollamada con la nutrióloga Susana Wignall. Plan personalizado, seguimiento cercano y expediente digital. Cédula profesional 156228944.";

const blocks: SeoBlock[] = [
  {
    heading: "Cómo funciona la consulta en línea",
    paragraphs: [
      "Agendamos por WhatsApp, te envío un formulario previo con tu historia clínica y hábitos, y nos vemos por videollamada. Después de la sesión recibes tu plan de alimentación en formato digital, listo para imprimir o consultar desde el celular.",
    ],
    bullets: [
      "Agenda por WhatsApp, sin llamadas ni filas",
      "Videollamada de 50 a 60 minutos",
      "Plan de alimentación digital con equivalencias",
      "Seguimiento por videollamada cada 2 a 4 semanas",
      "Dudas puntuales entre consultas por WhatsApp",
    ],
  },
  {
    heading: "¿Funciona igual que la consulta presencial?",
    paragraphs: [
      "Sí, con una diferencia: las mediciones corporales las tomas tú con indicaciones precisas que te doy paso a paso, o las traes de un estudio local. El resto —historia clínica, análisis de hábitos, diseño del plan y ajustes— es idéntico.",
      "Si estás en Playa del Carmen y prefieres el análisis de composición corporal con equipo profesional, la consulta presencial es la mejor opción.",
    ],
  },
  {
    heading: "Para quién es la modalidad en línea",
    bullets: [
      "Vives fuera de Playa del Carmen o de Quintana Roo",
      "Viajas con frecuencia por trabajo",
      "Tienes horarios que no encajan con una cita presencial",
      "Mexicanos en el extranjero que buscan atención en español",
      "Prefieres la comodidad de consultar desde casa",
    ],
  },
  {
    heading: "Tu información, protegida",
    paragraphs: [
      "Tu expediente clínico se guarda en un sistema digital con acceso restringido y respaldo encriptado, conforme a la normativa mexicana de expediente clínico (NOM-004-SSA3-2012). Nada de tu información se comparte con terceros.",
    ],
  },
];

const faqs: SeoFaq[] = [
  {
    question: "¿Desde qué ciudades puedo tomar la consulta en línea?",
    answer:
      "Desde cualquier lugar de México y también desde el extranjero. Solo necesitas conexión estable a internet y un espacio tranquilo para la videollamada.",
  },
  {
    question: "¿Cómo tomo mis medidas si la consulta es en línea?",
    answer:
      "Te doy instrucciones específicas para peso, cintura y cadera, y te indico qué necesitas. Si tienes acceso a un estudio de composición corporal local, podemos usar esos resultados.",
  },
  {
    question: "¿Cómo agendo y pago?",
    answer:
      "Todo se coordina por WhatsApp. Te comparto horarios disponibles, precios vigentes y las formas de pago que acepto, incluida transferencia.",
  },
  {
    question: "¿Recibo un plan por escrito?",
    answer:
      "Sí. Después de la consulta recibes tu plan de alimentación en formato digital, con porciones, equivalencias y recomendaciones específicas para tu caso.",
  },
  {
    question: "¿Cada cuánto es el seguimiento?",
    answer:
      "Lo habitual es cada 2 a 4 semanas, según tu objetivo. En cada seguimiento revisamos avances y ajustamos el plan.",
  },
];

export const Route = createFileRoute("/nutriologa-en-linea")({
  head: () => ({
    meta: [
      { title: `${title} · Susana Wignall` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: "Consulta de nutrición en línea",
            description,
            pageUrl,
            serviceType: "Consulta de nutrición por videollamada",
          }),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Nutrióloga en línea", pageUrl),
        ),
      },
    ],
  }),
  component: NutriologaEnLineaPage,
});

function NutriologaEnLineaPage() {
  return (
    <SeoServicePage
      eyebrow="Consulta en línea"
      h1="Nutrióloga en línea para todo México"
      intro="Atención nutricional por videollamada con la misma profundidad que en consultorio: valoración completa, plan personalizado y seguimiento cercano, desde donde estés."
      badge="🎁 Agosto: primera consulta sin costo · Solo 10 lugares"
      ctaLabel="Agendar consulta en línea"
      ctaMessage={WA_MSG.enLinea}
      eventId="whatsapp_click_online"
      blocks={blocks}
      faqs={faqs}
      related={[
        { to: "/consulta-nutricional", label: "Consulta nutricional" },
        { to: "/analisis-corporal-tanita", label: "Análisis de composición corporal" },
        { to: "/nutriologa-playa-del-carmen", label: "Nutrióloga en Playa del Carmen" },
      ]}
    />
  );
}
