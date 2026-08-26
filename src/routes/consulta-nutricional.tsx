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

const pageUrl = "https://susanawignall.com/consulta-nutricional";
const title = "Consulta nutricional en Playa del Carmen y en línea";
const description =
  "Consulta nutricional con Susana Wignall, nutrióloga y chef: historia de salud, análisis de composición corporal y plan personalizado. Presencial en Playa del Carmen o en línea.";

const blocks: SeoBlock[] = [
  {
    heading: "Qué incluye tu consulta nutricional",
    paragraphs: [
      "La primera consulta dura entre 50 y 60 minutos. No se trata de entregarte una dieta genérica, sino de entender tu historia, tus horarios, tus gustos y tu contexto para construir un plan que puedas sostener.",
    ],
    bullets: [
      "Historia de salud y nutricional completa",
      "Evaluación antropométrica y análisis de composición corporal",
      "Revisión de estudios de laboratorio si los tienes",
      "Registro de alergias e intolerancias alimentarias",
      "Plan de alimentación personalizado con equivalencias y porciones",
      "Recomendaciones de suplementación cuando son necesarias",
    ],
  },
  {
    heading: "Cómo es el seguimiento",
    paragraphs: [
      "El cambio real ocurre entre consultas. Por eso el seguimiento habitual es cada 2 a 4 semanas: revisamos mediciones, ajustamos el plan según lo que funcionó y resolvemos los obstáculos concretos de tu semana.",
      "Todo tu historial queda registrado en un expediente clínico digital, conforme a la normativa mexicana de expediente clínico (NOM-004-SSA3-2012).",
    ],
  },
  {
    heading: "Para quién es",
    bullets: [
      "Personas que quieren bajar de peso sin dietas restrictivas",
      "Recomposición corporal: perder grasa y ganar músculo",
      "Molestias digestivas, inflamación y salud intestinal",
      "Sobrepeso, obesidad y síndrome metabólico",
      "Alimentación vegetariana o con restricciones",
      "Quienes ya intentaron varias dietas y no lograron mantenerlas",
    ],
  },
  {
    heading: "Modalidades y ubicación",
    paragraphs: [
      "Atiendo de forma presencial en Playa del Carmen, Quintana Roo, y en línea por videollamada para pacientes de todo México y del extranjero. La metodología, el plan y el seguimiento son idénticos en ambas modalidades.",
      "Nutrióloga titulada, cédula profesional 156228944.",
    ],
  },
];

const faqs: SeoFaq[] = [
  {
    question: "¿Cuánto dura la primera consulta nutricional?",
    answer:
      "Entre 50 y 60 minutos. Incluye historia de salud, mediciones, análisis de composición corporal y la explicación de tu plan de alimentación.",
  },
  {
    question: "¿Qué debo llevar a mi primera consulta?",
    answer:
      "Estudios de laboratorio recientes si los tienes, la lista de medicamentos y suplementos que tomas, y ropa ligera para las mediciones. Si no tienes estudios, no es impedimento para empezar.",
  },
  {
    question: "¿Me van a dar una dieta estricta?",
    answer:
      "No. El plan se construye con los alimentos que ya consumes y se ajusta a tus horarios y presupuesto. El objetivo es que puedas mantenerlo, no que lo abandones en dos semanas.",
  },
  {
    question: "¿Cuánto cuesta la consulta nutricional?",
    answer:
      "Escríbeme por WhatsApp y te comparto los precios vigentes de consulta inicial, seguimiento y paquetes de acompañamiento, además de las formas de pago disponibles.",
  },
  {
    question: "¿Atiendes en línea?",
    answer:
      "Sí. La consulta en línea se realiza por videollamada y recibes tu plan en formato digital. Es la opción de la mayoría de mis pacientes fuera de Playa del Carmen.",
  },
];

export const Route = createFileRoute("/consulta-nutricional")({
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
            name: "Consulta nutricional personalizada",
            description,
            pageUrl,
            serviceType: "Consulta de nutrición personalizada",
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(faqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Consulta nutricional", pageUrl),
        ),
      },
    ],
  }),
  component: ConsultaNutricionalPage,
});

function ConsultaNutricionalPage() {
  return (
    <SeoServicePage
      eyebrow="Consulta nutricional"
      h1="Consulta nutricional en Playa del Carmen y en línea"
      intro="Una valoración completa y un plan de alimentación hecho a tu medida, con seguimiento real. Presencial en Playa del Carmen o por videollamada desde cualquier parte de México."
      badge="🎁 Agosto: primera consulta sin costo · Solo 10 lugares"
      ctaLabel="Agendar mi consulta"
      ctaMessage={WA_MSG.consultaNutricional}
      eventId="whatsapp_click_consulta"
      blocks={blocks}
      faqs={faqs}
      related={[
        { to: "/nutriologa-en-linea", label: "Nutrióloga en línea" },
        { to: "/analisis-corporal-tanita", label: "Análisis de composición corporal" },
        { to: "/nutriologa-playa-del-carmen", label: "Nutrióloga en Playa del Carmen" },
      ]}
    />
  );
}
