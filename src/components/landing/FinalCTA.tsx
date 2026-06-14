import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import produceImg from "@/assets/produce.jpg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={produceImg}
          alt=""
          aria-hidden
          width={1280}
          height={960}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-olive/85" />
      </div>

      <div className="container-prose text-center text-cream">
        <h2 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Empieza a reconectar con tu cuerpo desde una nutrición personalizada,
          consciente y sostenible.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-cream/85 leading-relaxed">
          Solicita información sobre consultas y paquetes de acompañamiento nutricional
          en Playa del Carmen o en línea.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-cream px-7 py-4 text-base font-medium text-olive hover:bg-background transition"
        >
          Reserva y conoce nuestros paquetes
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
