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

const pageUrl = "https://susanawignall.com/analisis-corporal-tanita";
const title = "Análisis de composición corporal en Playa del Carmen";
const description =
  "Bioimpedancia con Tanita de 8 electrodos en Playa del Carmen: grasa, músculo, agua corporal y metabolismo basal por segmento, interpretados por nutrióloga titulada.";

const blocks: SeoBlock[] = [
  {
    heading: "Qué mide el análisis",
    paragraphs: [
      "La báscula no distingue entre grasa y músculo. La bioimpedancia con Tanita de 8 electrodos sí: mide por segmentos (brazos, piernas y tronco) para saber exactamente qué está cambiando en tu cuerpo.",
    ],
    bullets: [
      "Porcentaje y kilos de grasa corporal",
      "Masa muscular por segmento: brazos, piernas y tronco",
      "Agua corporal total y nivel de hidratación",
      "Grasa visceral",
      "Metabolismo basal y edad metabólica",
      "Masa ósea estimada",
    ],
  },
  {
    heading: "Por qué importa para tu plan",
    paragraphs: [
      "Con estos datos el plan deja de ser adivinanza. Sé cuántas calorías realmente necesitas, si estás perdiendo grasa o músculo, y si la retención de líquidos explica cambios de peso que no corresponden a tu progreso real.",
      "En cada seguimiento repetimos la medición para comparar y ajustar. Ver la grasa bajar mientras el músculo se mantiene o sube es la mejor motivación que existe.",
    ],
  },
  {
    heading: "Cómo prepararte",
    bullets: [
      "Acude con al menos 2 horas sin comer abundantemente",
      "Hidrátate normalmente, sin exceso de líquidos justo antes",
      "Evita ejercicio intenso las 12 horas previas",
      "No consumas alcohol las 24 horas previas",
      "Lleva ropa ligera y ve sin calcetines ni medias",
    ],
  },
  {
    heading: "Dónde se realiza",
    paragraphs: [
      "El análisis es presencial en mi consultorio en Playa del Carmen, Quintana Roo, y viene incluido en la consulta nutricional presencial y en sus seguimientos.",
      "Interpretación a cargo de nutrióloga titulada, cédula profesional 156228944. Si tu consulta es en línea, podemos trabajar con un estudio de composición corporal realizado en tu ciudad.",
    ],
  },
];

const faqs: SeoFaq[] = [
  {
    question: "¿Qué es la bioimpedancia?",
    answer:
      "Es una medición que envía una corriente eléctrica imperceptible a través del cuerpo. Como la grasa, el músculo y el agua conducen la electricidad de forma distinta, permite estimar la cantidad de cada tejido.",
  },
  {
    question: "¿Duele o es riesgoso?",
    answer:
      "No duele y no se siente nada. No se recomienda en personas con marcapasos u otros dispositivos electrónicos implantados, ni durante el embarazo.",
  },
  {
    question: "¿Qué diferencia hay con una báscula normal?",
    answer:
      "Una báscula normal solo da tu peso total. La Tanita de 8 electrodos separa grasa, músculo y agua, y además lo hace por segmento del cuerpo, algo que las básculas de 4 electrodos no logran.",
  },
  {
    question: "¿Tiene costo adicional?",
    answer:
      "No. El análisis está incluido en la consulta nutricional presencial y en cada consulta de seguimiento en el consultorio.",
  },
  {
    question: "¿Cada cuánto conviene repetirlo?",
    answer:
      "Cada 2 a 4 semanas, coincidiendo con tus consultas de seguimiento. Ese intervalo permite ver cambios reales sin confundirlos con variaciones normales del día a día.",
  },
];

export const Route = createFileRoute("/analisis-corporal-tanita")({
  head: () => ({
    meta: [
      { title: "Análisis de composición corporal · Playa del Carmen" },
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
            name: "Análisis de composición corporal con bioimpedancia",
            description,
            pageUrl,
            serviceType: "Análisis de composición corporal",
          }),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema("Análisis de composición corporal", pageUrl),
        ),
      },
    ],
  }),
  component: AnalisisCorporalPage,
});

function AnalisisCorporalPage() {
  return (
    <SeoServicePage
      eyebrow="Composición corporal"
      h1="Análisis de composición corporal en Playa del Carmen"
      intro="Bioimpedancia con Tanita de 8 electrodos: grasa, músculo, agua y metabolismo basal medidos por segmento e interpretados dentro de tu plan nutricional."
      badge="Incluido en la consulta presencial"
      ctaLabel="Quiero mi análisis corporal"
      ctaMessage={WA_MSG.tanita}
      eventId="whatsapp_click_tanita"
      blocks={blocks}
      faqs={faqs}
      related={[
        { to: "/consulta-nutricional", label: "Consulta nutricional" },
        { to: "/nutriologa-en-linea", label: "Nutrióloga en línea" },
        { to: "/nutriologa-playa-del-carmen", label: "Nutrióloga en Playa del Carmen" },
      ]}
    />
  );
}
