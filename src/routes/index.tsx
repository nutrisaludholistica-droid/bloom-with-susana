import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-susana.webp.asset.json";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LaunchPromo } from "@/components/landing/LaunchPromo";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Packages } from "@/components/landing/Packages";
import { TrustBlock } from "@/components/landing/TrustBlock";
import { About } from "@/components/landing/About";
import { Workshops } from "@/components/landing/Workshops";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { Location } from "@/components/landing/Location";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFloat } from "@/components/landing/WhatsappFloat";
import { FAQS } from "@/components/landing/faq-data";

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
    ],
    links: [
      { rel: "canonical", href: "https://susanawignall.com/" },
      // Precarga del elemento LCP (retrato del hero).
      {
        rel: "preload",
        as: "image",
        href: heroImg.url,
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://susanawignall.com/#negocio",
          name: "LN Susana Wignall — Nutrióloga",
          url: "https://susanawignall.com/",
          telephone: "+52-984-279-9652",
          image:
            "https://susanawignall.com/__l5e/assets-v1/0f8ba910-0670-4533-92d6-c9bf93294a53/about-susana.webp",
          logo: "https://susanawignall.com/favicon.ico",
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
            latitude: "20.6296",
            longitude: "-87.0739",
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
          medicalSpecialty: "Nutrition",
          founder: { "@id": "https://susanawignall.com/#susana" },
          employee: { "@id": "https://susanawignall.com/#susana" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de nutrición",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Consulta nutricional inicial",
                  description:
                    "Evaluación completa con historia clínica, antropometría y bioimpedancia, presencial en Playa del Carmen o en línea.",
                  serviceType: "Consulta de nutrición",
                },
              },
              {
                "@type": "Offer",
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
          sameAs: [
            "https://www.susanawignall.com",
            "https://www.facebook.com/susana.wignall",
          ],
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
          sameAs: [
            "https://www.susanawignall.com",
            "https://www.facebook.com/susana.wignall",
          ],
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
              text: f.a,
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
        <HowItWorks />
        <Packages />
        <TrustBlock />
        <About />
        <Workshops />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
