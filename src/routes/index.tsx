import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { LaunchPromo } from "@/components/landing/LaunchPromo";
import { Benefits } from "@/components/landing/Benefits";
import { Services } from "@/components/landing/Services";
import { Packages } from "@/components/landing/Packages";
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
