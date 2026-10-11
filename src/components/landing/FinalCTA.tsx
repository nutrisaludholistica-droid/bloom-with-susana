import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";
import produceImg from "@/assets/produce.webp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={produceImg}
          alt=""
          aria-hidden
          width={900}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-olive/90" />
      </div>

      <div className="container-prose">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-cream/60">
          Octubre · Consulta informativa en línea gratis
        </p>
        <h2 className="mt-7 max-w-3xl font-display text-3xl font-light leading-[1.15] text-cream sm:text-[3rem]">
          Empieza a reconectar con tu cuerpo desde una nutrición{" "}
          <span className="font-script text-[0.85em] tracking-normal text-cream/85">
            consciente
          </span>{" "}
          y sostenible.
        </h2>
        <p className="mt-7 max-w-lg border-t border-cream/20 pt-6 text-[0.95rem] leading-[1.9] text-cream/75">
          Presencial en Playa del Carmen o en línea. Te responderé por WhatsApp para
          confirmar horario y modalidad.
        </p>
        <a
          href={waUrl(WA_MSG.finalCta)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWaClick("whatsapp_click_final_cta")}
          className="mt-9 inline-flex items-center justify-center bg-cream px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-olive transition-colors hover:bg-background"
        >
          Reservar mi consulta
        </a>
      </div>
    </section>
  );
}
