import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function LaunchPromo() {
  return (
    <section className="relative overflow-hidden bg-background py-14 sm:py-16">
      <div className="container-prose relative">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-clay/20 bg-clay/10 px-3.5 py-1.5 text-xs text-clay">
            Julio 2026
          </span>

          <h2 className="mt-5 font-display text-2xl sm:text-4xl text-olive leading-tight max-w-2xl">
            Primera consulta sin costo — solo julio
          </h2>

          <p className="mt-3 text-sm sm:text-base text-foreground/70 font-medium">
            Válido para las primeras 10 personas. Solo este mes.
          </p>

          <p className="mt-4 max-w-xl text-sm sm:text-base text-foreground/60 leading-relaxed">
            Es tu oportunidad de conocerme, hablar de tus objetivos y recibir
            orientación nutricional personalizada — sin costo.
          </p>

          <p className="mt-6 text-sm text-muted-foreground">
            Lugares disponibles: 10 de 10
          </p>

          <a
            href={waUrl(WA_MSG.promoGratis)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_promo")}
            className="mt-7 group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
          >
            Apartar mi lugar por WhatsApp →
          </a>

          <p className="mt-3 text-xs text-muted-foreground">
            Consulta presencial en Playa del Carmen o en línea · Sin costo, sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
