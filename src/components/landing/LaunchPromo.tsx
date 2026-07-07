import { ArrowRight, Gift, Users } from "lucide-react";

const PROMO_WHATSAPP_URL =
  "https://wa.me/529842799652?text=Hola%2C%20quiero%20reservar%20mi%20consulta%20gratuita%20de%20lanzamiento%20%F0%9F%8E%89";

export function LaunchPromo() {
  return (
    <section className="relative overflow-hidden bg-promo-bg py-14 sm:py-16">
      {/* subtle organic accent */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl"
      />

      <div className="container-prose relative">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-clay px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream shadow-sm">
            <Gift className="h-3.5 w-3.5" />
            PROMO JULIO
          </span>

          {/* Title */}
          <h2 className="mt-5 font-display text-2xl sm:text-4xl text-cream leading-tight max-w-2xl">
            Julio: Primera consulta{" "}
            <span className="text-sage-soft">GRATIS</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-cream/80 font-medium">
            Válido para las primeras 10 personas. Solo este mes.
          </p>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm sm:text-base text-cream/70 leading-relaxed">
            Es tu oportunidad de conocerme, hablar de tus objetivos y recibir
            orientación nutricional personalizada — sin costo.
          </p>

          {/* Counter */}
          <div className="mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-cream/15 bg-white/8 px-5 py-2.5 backdrop-blur-sm">
            <Users className="h-4 w-4 text-sage-soft" />
            <span className="text-sm text-cream/90">
              Lugares disponibles:{" "}
              <span className="font-semibold text-cream">10 de 10</span>
            </span>
          </div>

          {/* CTA */}
          <a
            href={PROMO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-3.5 text-base font-medium text-promo-bg shadow-lg shadow-black/20 hover:bg-white transition"
          >
            Quiero mi consulta gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Fine print */}
          <p className="mt-3 text-xs text-cream/50">
            Consulta presencial en Playa del Carmen o en línea · Sin costo, sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
