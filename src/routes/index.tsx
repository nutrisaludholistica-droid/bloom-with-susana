import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-susana.webp.asset.json";
import heroMobileImg from "@/assets/hero-susana-mobile.webp.asset.json";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LaunchPromo } from "@/components/landing/LaunchPromo";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { Packages } from "@/components/landing/Packages";
import { TrustBlock } from "@/components/landing/TrustBlock";
import { About } from "@/components/landing/About";
import { Workshops } from "@/components/landing/Workshops";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Location } from "@/components/landing/Location";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { InternalLinks } from "@/components/landing/InternalLinks";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFloat } from "@/components/landing/WhatsappFloat";
import { FAQS, faqAnswerText } from "@/components/landing/faq-data";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { SOCIAL, businessSameAs } from "@/lib/social";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nutrióloga en Playa del Carmen y en línea — Susana Wignall" },
      {
        name: "description",
        content:
          "Agenda tu consulta con Susana Wignall: planes de recomposición corporal, salud digestiva y hábitos sostenibles, presencial en Playa del Carmen o en línea.",
      },
      {
        property: "og:title",
        content: "Nutrióloga en Playa del Carmen y en línea — Susana Wignall",
      },
      {
        property: "og:description",
        content:
          "Reconecta con tu cuerpo desde una nutrición consciente y sostenible. Consultas y paquetes en Playa del Carmen y en línea.",
      },
      { property: "og:url", content: "https://susanawignall.com/" },
      {
        property: "og:image",
        content:
          "https://susanawignall.com/__l5e/assets-v1/0f8ba910-0670-4533-92d6-c9bf93294a53/about-susana.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://susanawignall.com/__l5e/assets-v1/0f8ba910-0670-4533-92d6-c9bf93294a53/about-susana.webp",
      },
    ],
    links: [
      { rel: "canonical", href: "https://susanawignall.com/" },
      {
        rel: "preload",
        as: "image",
        href: heroMobileImg.url,
        media: "(max-width: 639px)",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: heroImg.url,
        media: "(min-width: 640px)",
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["MedicalBusiness", "LocalBusiness"],
          "@id": "https://susanawignall.com/#negocio",
          name: "Nutrióloga Susana Wignall",
          alternateName: ["Susana Wignall Nutrición", "LN Susana Wignall"],
          url: "https://susanawignall.com/",
          telephone: "+52-984-279-9652",
          image:
            "https://susanawignall.com/__l5e/assets-v1/0f8ba910-0670-4533-92d6-c9bf93294a53/about-susana.webp",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Av. Paseo Central, Humana Works Center, Fracc. La Gran Plaza, Riviera 2",
            addressLocality: "Playa del Carmen",
            addressRegion: "Quintana Roo",
            postalCode: "77723",
            addressCountry: "MX",
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
          priceRange: "$$",
          currenciesAccepted: "MXN",
          availableLanguage: ["es", "en"],
          description:
            "Acompañamiento nutricional personalizado en recomposición corporal, salud digestiva y hábitos sostenibles. Consultas presenciales en Playa del Carmen y en línea.",
          medicalSpecialty: "DietNutrition",
          founder: { "@id": "https://susanawignall.com/#susana" },
          employee: { "@id": "https://susanawignall.com/#susana" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de nutrición",
            itemListElement: [
              {
                "@type": "Offer",
                priceCurrency: "MXN",
                price: "1200",
                availability: "https://schema.org/InStock",
                itemOffered: {
                  "@type": "Service",
                  name: "Consulta nutricional inicial",
                  description:
                    "Evaluación completa con historia clínica, antropometría y bioimpedancia, presencial en Playa del Carmen o en línea.",
                  serviceType: "Consulta de nutrición",
                  provider: { "@id": "https://susanawignall.com/#negocio" },
                  areaServed: [
                    { "@type": "City", name: "Playa del Carmen" },
                    { "@type": "Country", name: "México" },
                  ],
                  availableChannel: [
                    {
                      "@type": "ServiceChannel",
                      name: "Consulta presencial",
                      servicePhone: "+52-984-279-9652",
                      serviceUrl: waUrl(WA_MSG.faqPrimeraConsulta),
                    },
                    {
                      "@type": "ServiceChannel",
                      name: "Consulta en línea",
                      serviceUrl: waUrl(WA_MSG.enLinea),
                      availableLanguage: ["es", "en"],
                    },
                  ],
                },
              },
              {
                "@type": "Offer",
                priceCurrency: "MXN",
                price: "1000",
                availability: "https://schema.org/InStock",
                itemOffered: {
                  "@type": "Service",
                  name: "Consulta de seguimiento",
                  description:
                    "Revisión de avances, ajuste del plan de alimentación y acompañamiento de hábitos.",
                  serviceType: "Seguimiento nutricional",
                },
              },
              {
                "@type": "Offer",
                priceCurrency: "MXN",
                priceSpecification: [
                  { "@type": "UnitPriceSpecification", name: "Básico · 3 meses", price: "4000", priceCurrency: "MXN" },
                  { "@type": "UnitPriceSpecification", name: "Transformación · 6 meses", price: "7500", priceCurrency: "MXN" },
                  { "@type": "UnitPriceSpecification", name: "Reconexión · 9 meses", price: "10000", priceCurrency: "MXN" },
                ],
                availability: "https://schema.org/InStock",
                itemOffered: {
                  "@type": "Service",
                  name: "Paquete de acompañamiento nutricional",
                  description:
                    "Programa de varias sesiones enfocado en recomposición corporal y salud digestiva.",
                  serviceType: "Programa de nutrición",
                },
              },
              {
                "@type": "Offer",
                priceCurrency: "MXN",
                availability: "https://schema.org/InStock",
                itemOffered: {
                  "@type": "Service",
                  name: "Talleres de nutrición",
                  description:
                    "Talleres grupales y para empresas sobre alimentación consciente y hábitos sostenibles.",
                  serviceType: "Taller de educación nutricional",
                },
              },
            ],
          },
          sameAs: businessSameAs(),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://susanawignall.com/#maiz-y-sal",
          name: "Maíz y Sal · Best Bio PDC",
          alternateName: ["Best Bio PDC", "Maíz y Sal"],
          url: SOCIAL.maizSal.instagram,
          sameAs: [SOCIAL.maizSal.instagram, SOCIAL.maizSal.facebook],
          department: { "@id": "https://susanawignall.com/#negocio" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://susanawignall.com/#susana",
          name: "Susana Wignall",
          jobTitle: "Nutrióloga",
          description:
            "Nutrióloga clínica en Playa del Carmen y en línea, especializada en recomposición corporal y salud digestiva.",
          url: "https://susanawignall.com/",
          telephone: "+52-984-279-9652",
          worksFor: { "@id": "https://susanawignall.com/#negocio" },
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
          sameAs: [SOCIAL.nutrilogas.facebook],
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faqAnswerText(f),
            },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});


function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <LaunchPromo />
        <div className="h-1 bg-eggplant" aria-hidden="true" />
        <Packages />
        <TrustBlock />
        <About />
        <Workshops />
        <Testimonials />
        <FAQ />
        <Location />
        <InternalLinks />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
