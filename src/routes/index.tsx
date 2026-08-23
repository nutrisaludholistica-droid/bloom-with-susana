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
      { property: "og:url", content: "https://susanawignall.com/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://susanawignall.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "LN Susana Wignall — Nutrióloga",
          url: "https://susanawignall.com",
          telephone: "+52-984-279-9652",
          image:
            "https://susanawignall.com/__l5e/assets-v1/0905c724-9991-4344-a7b8-ae5620a0b7d8/about-susana-new.png",
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
          openingHours: "Mo-Fr 09:00-18:00",
          priceRange: "$$",
          description:
            "Acompañamiento nutricional personalizado en recomposición corporal, salud digestiva y hábitos sostenibles. Consultas presenciales en Playa del Carmen y en línea.",
          medicalSpecialty: "Nutrition",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Susana Wignall",
          jobTitle: "Nutrióloga",
          url: "https://susanawignall.com",
          telephone: "+52-984-279-9652",
          worksFor: {
            "@type": "MedicalBusiness",
            name: "LN Susana Wignall — Nutrióloga",
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
