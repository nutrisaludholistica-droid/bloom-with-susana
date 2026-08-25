import { MapPin, Gift } from "lucide-react";
import heroImg from "@/assets/hero-susana.webp.asset.json";
import heroMobileImg from "@/assets/hero-susana-mobile.webp.asset.json";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28"
    >
      <div
        aria-hidden
        className="absolute -top-32 -left-24 hidden h-[22rem] w-[22rem] rounded-full bg-sage-soft/30 blur-2xl sm:block"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-[-6rem] hidden h-[18rem] w-[18rem] rounded-full bg-clay/10 blur-2xl sm:block"
      />

      <div className="container-prose grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-clay/40 bg-clay/10 px-3.5 py-1.5 text-xs sm:text-sm text-clay">
            <Gift className="h-3.5 w-3.5" />
            Agosto · Primera consulta GRATIS · 10 lugares
          </div>

          <h1 className="mt-5 font-display text-[2.1rem] leading-[1.1] sm:text-5xl lg:text-[3.4rem] text-olive">
            Nutrióloga en Playa del Carmen y en línea · Susana Wignall
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed">
            Acompañamiento nutricional personalizado para mejorar tu composición
            corporal, salud digestiva y calidad de vida sin dietas extremas. Consultas
            presenciales en Playa del Carmen y en línea.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={waUrl(WA_MSG.promoGratis)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaClick("whatsapp_click_hero")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
            >
              Agendar mi consulta →
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/60 px-6 py-3.5 text-base text-foreground hover:bg-sage/10 transition"
            >
              Ver paquetes
            </a>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            🎁 Agosto: primera consulta sin costo · Solo 10 lugares
          </p>

          <p className="mt-4 max-w-xl text-sm text-foreground/60 flex items-start gap-1.5">
            <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-sage" />
            Te responderé por WhatsApp para confirmar horario y modalidad (presencial u online).
          </p>

          <p className="mt-4 text-xs text-muted-foreground">
            LN Susana Wignall · Céd. profesional 156228944
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 hidden rounded-[2rem] bg-sage-soft/35 -rotate-2 sm:block lg:-inset-6 lg:rounded-[2.5rem]" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/70 shadow-md shadow-olive/5 sm:rounded-[2rem] lg:shadow-lg">
            <picture>
              <source media="(max-width: 639px)" srcSet={heroMobileImg.url} />
              <img
                src={heroImg.url}
                alt="LN Susana Wignall, nutrióloga en Playa del Carmen"
                width={577}
                height={1024}
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 639px) 88vw, 45vw"
                className="aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full object-cover"
              />
            </picture>
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
