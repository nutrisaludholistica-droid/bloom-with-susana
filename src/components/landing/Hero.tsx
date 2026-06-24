import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-image.png.asset.json";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      {/* organic background accents */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-sage-soft/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-clay/15 blur-3xl"
      />

      <div className="container-prose grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 items-center relative">
        <div className="fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-3.5 py-1.5 text-xs sm:text-sm text-olive/80">
            <MapPin className="h-3.5 w-3.5" />
            Playa del Carmen · Consulta en línea
          </div>

          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] text-olive whitespace-pre-line">
            Transforma tus hábitos y reconecta con tu cuerpo {"\n"}
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed">
            Acompañamiento nutricional en Playa del Carmen y en línea para mejorar tu
            composición corporal, tu salud digestiva y tu calidad de vida sin dietas
            extremas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
            >
              Reserva y conoce nuestros paquetes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-6 py-3.5 text-base text-foreground hover:bg-sage/10 transition"
            >
              Ver paquetes
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            LN Susana Wignall · Céd. profesional 156228944
          </p>
        </div>

        <div className="relative fade-in-up">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-sage-soft/40 -rotate-2" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 shadow-xl shadow-olive/5">
            <img
              src={heroImg.url}
              alt="LN Susana Wignall, nutrióloga en Playa del Carmen"
              width={896}
              height={1152}
              className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-background border border-border/70 px-4 py-3 shadow-lg shadow-olive/5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-clay/15 text-clay">
              ★
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Reconocimiento</p>
              <p className="text-sm font-medium text-olive">Primer lugar FECII 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
