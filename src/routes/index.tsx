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
import { FAQS } from "@/components/landing/faq-data";

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
              "@type": ["LocalBusiness", "MedicalBusiness"],
              "@id": "https://susanawignall.com/#localbusiness",
              name: "LN Susana Wignall — Nutrióloga",
              description:
                "Acompañamiento nutricional personalizado en Playa del Carmen y en línea. Especialista en recomposición corporal, salud digestiva y microbiota.",
              url: "https://susanawignall.com",
              telephone: "+529842799652",
              // medicalSpecialty acepta valores del enum MedicalSpecialty de schema.org.
              // Sólo "Nutrition" es válido; los demás enfoques van en `knowsAbout`.
              medicalSpecialty: "Nutrition",
              knowsAbout: [
                "Nutriología clínica",
                "Recomposición corporal",
                "Salud digestiva",
                "Microbiota",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Av. Paseo Central, Humana Works Center, Fracc. La Gran Plaza, Riviera 2",
                addressLocality: "Playa del Carmen",
                addressRegion: "Quintana Roo",
                postalCode: "77723",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 20.6296,
                longitude: -87.0739,
              },
              areaServed: [
                { "@type": "City", name: "Playa del Carmen" },
                { "@type": "AdministrativeArea", name: "Quintana Roo" },
                { "@type": "Country", name: "México" },
                "Online",
              ],
              // TODO: ajustar al horario real de atención
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              image:
                "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3838481e-5531-4020-9b26-1079b5ca9e7a/id-preview-bbdf0914--cfd46fa8-db71-400f-b280-bec75a7f8a03.lovable.app-1781407374175.png",
              priceRange: "$$",
            },
            {
              "@type": "Person",
              name: "Susana Wignall",
              jobTitle: "Nutrióloga",
              identifier: {
                "@type": "PropertyValue",
                propertyID: "Cédula Profesional",
                value: "156228944",
              },
              description: "Licenciada en Nutrición · Cédula profesional 156228944",
              url: "https://susanawignall.com/#sobre-mi",
              worksFor: {
                "@id": "https://susanawignall.com/#localbusiness",
              },
              award: "Primer lugar FECII 2024",
            },

            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
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
