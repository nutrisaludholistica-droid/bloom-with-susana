import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LN Susana Wignall — Nutrióloga en Playa del Carmen y en línea" },
      {
        name: "description",
        content:
          "Acompañamiento nutricional personalizado: recomposición corporal, salud digestiva y hábitos sostenibles en Playa del Carmen y en línea.",
      },
      {
        property: "og:title",
        content: "LN Susana Wignall — Nutrióloga",
      },
      {
        property: "og:description",
        content:
          "Reconecta con tu cuerpo desde una nutrición consciente y sostenible. Consultas y paquetes en Playa del Carmen y en línea.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              name: "LN Susana Wignall — Nutrióloga",
              description:
                "Acompañamiento nutricional personalizado en Playa del Carmen y en línea. Especialista en recomposición corporal, salud digestiva y microbiota.",
              url: "https://susanawignall.com",
              telephone: "+529842799652",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Av. Paseo Central, Humana Works Center, Fracc. La Gran Plaza, Riviera 2",
                addressLocality: "Playa del Carmen",
                addressRegion: "Quintana Roo",
                postalCode: "77723",
                addressCountry: "MX",
              },
              image:
                "https://susanawignall.com/__l5e/assets-v1/586f0359-d9d1-49df-b643-d3b17f9ca16a/hero-image.png",
              priceRange: "$$",
              "@id": "https://susanawignall.com/#localbusiness",
            },
            {
              "@type": "Person",
              name: "Susana Wignall",
              jobTitle: "Licenciada en Nutrición",
              identifier: "156228944",
              worksFor: {
                "@id": "https://susanawignall.com/#localbusiness",
              },
              url: "https://susanawignall.com/#sobre-mi",
              award: "Primer lugar FECII 2024",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿La consulta puede ser presencial o en línea?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. La consulta puede realizarse en línea o presencial en Hea'n Clinic, en Playa del Carmen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Los paquetes incluyen seguimiento por WhatsApp?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos los paquetes incluyen seguimiento por WhatsApp 2 veces por semana.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El plan nutricional es personalizado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Cada plan se adapta a los objetivos, estilo de vida y hábitos específicos de cada persona.",
                  },
                },
              ],
            },
          ],
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
        <LaunchPromo />
        <Benefits />
        <Services />
        <Packages />
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
