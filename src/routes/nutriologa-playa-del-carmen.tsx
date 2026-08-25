import { createFileRoute } from "@tanstack/react-router";
import { ServiceHeader } from "@/components/landing/ServiceHeader";
import { Footer } from "@/components/landing/Footer";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const pageUrl = "https://susanawignall.com/nutriologa-playa-del-carmen";
const businessName = "LN Susana Wignall";
const businessImage =
  "https://susanawignall.com/__l5e/assets-v1/0f8ba910-0670-4533-92d6-c9bf93294a53/about-susana.webp";
const address = {
  street: "Av. Paseo Central, Humana Works Center, Fracc. La Gran Plaza, Riviera 2",
  locality: "Playa del Carmen",
  region: "Quintana Roo",
  postalCode: "77723",
  country: "MX",
};

const localFaqs = [
  {
    question: "¿Dónde queda la consulta presencial en Playa del Carmen?",
    answer:
      "Atiendo en Playa del Carmen, Quintana Roo. También ofrezco consultas en línea para todo México. Escríbeme por WhatsApp y te confirmo la dirección exacta y disponibilidad.",
  },
  {
    question: "¿Puedo agendar una consulta nutricional en línea desde otro estado?",
    answer:
      "Sí. Trabajo con pacientes de todo México mediante videollamada. La valoración, el plan y el seguimiento son los mismos que en consulta presencial.",
  },
  {
    question: "¿Qué incluye la primera consulta?",
    answer:
      "Historia clínica, evaluación antropométrica, análisis de hábitos alimentarios, objetivos nutricionales y un plan personalizado de alimentación.",
  },
  {
    question: "¿Con qué frecuencia debo tener seguimiento?",
    answer:
      "Depende de tu objetivo. Lo habitual es cada 2 a 4 semanas para ajustar el plan, resolver dudas y mantener la motivación.",
  },
];

export const Route = createFileRoute("/nutriologa-playa-del-carmen")({
  head: () => ({
    meta: [
      { title: "Nutrióloga en Playa del Carmen · Susana Wignall" },
      {
        name: "description",
        content:
          "Nutrióloga en Playa del Carmen. Acompañamiento personalizado para bajar de peso, salud digestiva y hábitos sostenibles. Presencial y en línea. Cédula 156228944.",
      },
      {
        property: "og:title",
        content: "Nutrióloga en Playa del Carmen · Susana Wignall",
      },
      {
        property: "og:description",
        content:
          "Acompañamiento nutricional personalizado en Playa del Carmen y en línea. Primera consulta sin costo en agosto.",
      },
      { property: "og:url", content: pageUrl },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://susanawignall.com/#negocio",
          name: businessName,
          description:
            "Nutrióloga en Playa del Carmen. Acompañamiento personalizado para bajar de peso, salud digestiva y hábitos sostenibles.",
          url: "https://susanawignall.com/",
          image: businessImage,
          medicalSpecialty: "DietNutrition",

          address: {
            "@type": "PostalAddress",
            streetAddress: address.street,
            addressLocality: address.locality,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country,
          },
          areaServed: {
            "@type": "City",
            name: "Playa del Carmen",
            containedInPlace: {
              "@type": "State",
              name: "Quintana Roo",
            },
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 20.6296,
            longitude: -87.0739,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          telephone: "+52-984-279-9652",
          priceRange: "$$",
          currenciesAccepted: "MXN",
          availableLanguage: ["es", "en"],
          founder: { "@id": "https://susanawignall.com/#susana" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://susanawignall.com/#susana",
          name: "Susana Wignall",
          jobTitle: "Licenciada en Nutrición",
          url: "https://susanawignall.com/",
          telephone: "+52-984-279-9652",
          worksFor: { "@id": "https://susanawignall.com/#negocio" },

          description:
            "Nutrióloga en Playa del Carmen con enfoque en acompañamiento personalizado, recomposición corporal y salud digestiva.",
          identifier: {
            "@type": "PropertyValue",
            name: "Cédula Profesional",
            value: "156228944",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Cédula Profesional",
            recognizedBy: {
              "@type": "Organization",
              name: "SEP México",
            },
            identifier: "156228944",
          },
          knowsAbout: [
            "Nutrición clínica",
            "Recomposición corporal",
            "Salud digestiva",
            "Microbiota intestinal",
            "Hábitos alimenticios sostenibles",
          ],
          sameAs: ["https://www.facebook.com/susana.wignall"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: localFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: "https://susanawignall.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Nutrióloga en Playa del Carmen",
              item: pageUrl,
            },
          ],
        }),
      },
    ],
  }),
  component: LocalNutritionPage,
});

function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <span className="text-clay block text-sm font-semibold uppercase tracking-wide">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-display text-3xl text-olive sm:text-4xl">
        {title}
      </h2>
      {children && (
        <p className="mt-3 text-base leading-relaxed text-foreground/70">
          {children}
        </p>
      )}
    </div>
  );
}

function LocalNutritionPage() {
  return (
    <>
      <ServiceHeader />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-sand/30">
          <div className="container-prose py-14 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-sm font-medium text-sage">
                Atención presencial y en línea
              </span>
              <h1 className="mt-6 font-display text-4xl text-olive sm:text-5xl lg:text-6xl">
                Nutrióloga en Playa del Carmen
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Acompañamiento nutricional personalizado para bajar de peso,
                mejorar tu digestión y crear hábitos que realmente duren.
                Cédula profesional 156228944.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={waUrl(WA_MSG.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWaClick("whatsapp_click_local_hero")}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
                >
                  Agendar mi consulta
                </a>
                <span className="text-sm text-muted-foreground">
                  🎁 Agosto: primera consulta sin costo · Solo 10 lugares
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section className="container-prose py-14 sm:py-20">
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Un plan hecho para ti, no para todos"
          >
            Cada paciente es distinto. Por eso mi enfoque combina valoración
            clínica, antropometría segmentada y un plan de alimentación
            realista con tu rutina, gustos y presupuesto.
          </SectionHeading>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Consulta presencial",
                body: "Evaluación completa en Playa del Carmen con medidas, análisis de composición corporal y plan nutricional impreso.",
              },
              {
                title: "Consulta en línea",
                body: "Misma metodología por videollamada para quienes viven fuera o prefieren la flexibilidad digital.",
              },
              {
                title: "Seguimiento continuo",
                body: "Ajustes del plan, resolución de dudas y mediciones de progreso para mantener resultados sostenibles.",
              },
              {
                title: "Especialidades",
                body: "Sobrepeso, obesidad, síndrome metabólico, salud digestiva, alimentación vegetariana y hábitos familiares.",
              },
              {
                title: "Tecnología de medición",
                body: "Bioimpedancia con Tanita de 8 electrodos para conocer grasa, músculo, agua y metabolismo basal.",
              },
              {
                title: "Registro seguro",
                body: "Expediente clínico digital con respaldo encriptado, cumpliendo con la normativa de expediente clínico vigente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-display text-lg text-olive">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="border-y border-border/60 bg-sand/30">
          <div className="container-prose py-14 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Ubicación"
                  title="Consulta en Playa del Carmen"
                >
                  {address.street}, {address.locality}, {address.region}. C.P.{" "}
                  {address.postalCode}.
                </SectionHeading>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-sage">✓</span>
                    <span>Estacionamiento cercano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-sage">✓</span>
                    <span>Horario de lunes a viernes, previa cita</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-sage">✓</span>
                    <span>Consulta en línea disponible para todo México</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href={waUrl(WA_MSG.hero)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWaClick("whatsapp_click_local_location")}
                    className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
                  >
                    Pedir dirección exacta
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Ubicación de consulta en Playa del Carmen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-87.0739!3d20.6296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e4339d19b1557%3A0x8f0f1c0b5c0b5c0b!2sPlaya%20del%20Carmen%2C%20Quintana%20Roo!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-prose py-14 sm:py-20">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas comunes sobre la consulta" />
          <div className="grid gap-4">
            {localFaqs.map((f) => (
              <details
                key={f.question}
                className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display text-olive text-base">
                  {f.question}
                  <span className="ml-4 text-sage transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground">
          <div className="container-prose py-14 text-center sm:py-20">
            <h2 className="font-display text-3xl sm:text-4xl">
              Empieza tu acompañamiento nutricional
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base/relaxed opacity-90">
              Reserva tu primera consulta en Playa del Carmen o en línea.
              En agosto es sin costo para las primeras 10 personas.
            </p>
            <div className="mt-8">
              <a
                href={waUrl(WA_MSG.hero)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWaClick("whatsapp_click_local_final")}
                className="inline-flex items-center rounded-full bg-primary-foreground px-6 py-3.5 text-base font-medium text-primary shadow-sm hover:bg-primary-foreground/90 transition"
              >
                Agendar mi consulta
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
