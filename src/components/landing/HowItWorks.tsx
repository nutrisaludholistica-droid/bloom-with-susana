import { ArrowRight, MessageCircle, CalendarCheck, Sparkles } from "lucide-react";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const STEPS = [
  {
    icon: MessageCircle,
    title: "1. Escribes por WhatsApp",
    desc: "Me cuentas brevemente tu objetivo (bajar grasa, mejorar digestión, más energía…) y si prefieres consulta en línea o presencial en Playa del Carmen.",
  },
  {
    icon: CalendarCheck,
    title: "2. Agendamos tu consulta",
    desc: "Te propongo horarios disponibles esta semana y confirmamos día, hora y modalidad. Recibes las indicaciones para llegar preparada/o.",
  },
  {
    icon: Sparkles,
    title: "3. Vives tu primera consulta",
    desc: "Analizamos tu historia, hábitos y composición corporal. Sales con un plan claro, prioridades concretas y siguientes pasos personalizados.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24">
      <div className="container-prose">
        <div className="max-w-2xl sm:mx-auto sm:text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Cómo empezar
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            ¿Qué pasa cuando escribes por WhatsApp?
          </h2>
          <p className="mt-4 text-base text-foreground/75 leading-relaxed">
            Sin llamadas incómodas ni formularios largos. En 3 pasos sabes si somos
            buen match y agendas tu consulta.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.title}
              className="flex flex-col rounded-3xl border border-border/70 bg-card p-7"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage/12 text-sage">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg text-olive">{s.title}</h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center">
          <a
            href={waUrl(WA_MSG.howitworks)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_howitworks")}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
          >
            Agendar mi consulta gratis por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
