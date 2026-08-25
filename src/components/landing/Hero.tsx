import heroImg from "@/assets/hero-susana.webp.asset.json";
import heroMobileImg from "@/assets/hero-susana-mobile.webp.asset.json";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="container-prose grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="eyebrow">Nutrición clínica · Playa del Carmen y en línea</p>

          <h1 className="mt-7 font-display text-[2.4rem] font-light leading-[1.08] tracking-tight text-olive sm:text-[3.2rem] lg:text-[3.8rem]">
            Nutrióloga en Playa del Carmen
            <br className="hidden sm:block" />{" "}
            <span className="font-script text-clay text-[0.72em] tracking-normal">
              y en línea
            </span>{" "}
            — Susana Wignall
          </h1>

          <div className="mt-8 max-w-md border-t border-border pt-7">
            <p className="text-[0.98rem] leading-[1.85] text-foreground/75">
              Acompañamiento personalizado para mejorar tu composición corporal,
              salud digestiva y calidad de vida — sin dietas extremas.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waUrl(WA_MSG.promoGratis)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaClick("whatsapp_click_hero")}
              className="inline-flex items-center justify-center bg-olive px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-primary"
            >
              Agendar mi consulta
            </a>
            <a
              href="#paquetes"
              className="inline-flex items-center justify-center border border-olive/25 px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-olive transition-colors hover:border-olive"
            >
              Ver paquetes
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:grid-cols-3">
            <p>
              <span className="block text-olive">Agosto</span>
              Primera consulta sin costo · 10 lugares
            </p>
            <p>
              <span className="block text-olive">Céd. 156228944</span>
              Licenciada en Nutrición
            </p>
            <p>
              <span className="block text-olive">FECII 2024</span>
              Primer lugar nacional
            </p>
          </div>
        </div>

        <div className="relative">
          <picture>
            <source media="(max-width: 639px)" srcSet={heroMobileImg.url} />
            <img
              src={heroImg.url}
              alt="LN Susana Wignall, nutrióloga en Playa del Carmen"
              width={577}
              height={1024}
              fetchPriority="high"
              decoding="async"
              sizes="(max-width: 639px) 92vw, 42vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </picture>
          <p className="mt-4 flex items-baseline gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" aria-hidden />
            Consulta privada · Modalidad presencial u online
          </p>
        </div>
      </div>
    </section>
  );
}
