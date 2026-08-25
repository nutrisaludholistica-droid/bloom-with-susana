import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const STEPS = [
  {
    title: "Escribes por WhatsApp",
    desc: "Me cuentas brevemente tu objetivo (bajar grasa, mejorar digestión, más energía…) y si prefieres consulta en línea o presencial en Playa del Carmen.",
  },
  {
    title: "Agendamos tu consulta",
    desc: "Te propongo horarios disponibles esta semana y confirmamos día, hora y modalidad. Recibes las indicaciones para llegar preparada/o.",
  },
  {
    title: "Vives tu primera consulta",
    desc: "Analizamos tu historia, hábitos y composición corporal. Sales con un plan claro, prioridades concretas y siguientes pasos personalizados.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-sage-soft/40 py-20 sm:py-28">
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">Cómo empezar</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            ¿Qué pasa cuando escribes por{" "}
            <span className="font-script text-clay text-[0.9em] tracking-normal">
              WhatsApp
            </span>
            ?
          </h2>
          <p className="mt-6 text-[0.95rem] leading-[1.9] text-foreground/70">
            Sin llamadas incómodas ni formularios largos. En tres pasos sabes si
            somos buen match y agendas tu consulta.
          </p>
        </div>

        <ol className="mt-14 grid md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className="border-t border-olive/15 py-8 md:border-r md:pr-8 md:last:border-r-0 md:not-first:pl-8"
            >
              <span className="font-display text-[0.7rem] tracking-[0.3em] text-clay">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-light text-olive">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.9] text-foreground/70">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            href={waUrl(WA_MSG.howitworks)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_howitworks")}
            className="inline-flex items-center justify-center bg-olive px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-primary"
          >
            Agendar mi consulta gratis
          </a>
        </div>
      </div>
    </section>
  );
}
