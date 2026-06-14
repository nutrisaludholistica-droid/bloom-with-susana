import { Leaf, HeartHandshake, Sparkles, Activity, MessageCircle, BookOpen, Repeat } from "lucide-react";

const ITEMS = [
  { icon: Leaf, text: "Mejora de hábitos sin dietas extremas" },
  { icon: HeartHandshake, text: "Acompañamiento personalizado" },
  { icon: Activity, text: "Recomposición corporal sostenible" },
  { icon: Sparkles, text: "Salud digestiva comunicada de forma simple" },
  { icon: MessageCircle, text: "Seguimiento cercano" },
  { icon: BookOpen, text: "Educación nutricional práctica" },
  { icon: Repeat, text: "Herramientas para sostener resultados a largo plazo" },
];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24 bg-sand/40">
      <div className="container-prose">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Para ti
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Si sientes que avanzas, pero no terminas de ver resultados…
          </h2>
          <p className="mt-5 text-base sm:text-lg text-foreground/75 leading-relaxed">
            Si haces esfuerzos pero no ves avances, si tu alimentación no se adapta a tu
            vida real o necesitas una guía profesional para mejorar tus hábitos, este
            acompañamiento está diseñado para ti.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background p-4 sm:p-5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage/12 text-sage">
                <Icon className="h-5 w-5" />
              </span>
              <p className="min-w-0 text-sm sm:text-base text-foreground/85 leading-snug">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
