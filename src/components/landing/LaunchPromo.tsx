import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function LaunchPromo() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-prose">
        <div className="grid gap-8 border-y border-olive/20 py-12 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-amber" aria-hidden="true" />
              Agosto 2026 · 10 lugares
            </p>
            <h2 className="mt-5 font-display text-2xl font-light leading-tight text-olive sm:text-[2.4rem]">
              Primera consulta{" "}
              <span className="font-script text-eggplant text-[0.95em] tracking-normal">
                sin costo
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-[1.9] text-foreground/70">
              Es tu oportunidad de conocerme, hablar de tus objetivos y recibir
              orientación nutricional personalizada — sin compromiso.
            </p>
          </div>

          <div className="lg:border-l lg:border-olive/15 lg:pl-14">
            <p className="font-display text-5xl font-extralight text-olive">10/10</p>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              Lugares disponibles
            </p>
            <a
              href={waUrl(WA_MSG.promoGratis)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWaClick("whatsapp_click_promo")}
              className="mt-7 inline-flex items-center justify-center bg-olive px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-primary"
            >
              Apartar mi lugar
            </a>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Presencial en Playa del Carmen o en línea · Sin costo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
