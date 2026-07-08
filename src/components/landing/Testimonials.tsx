import { Quote } from "lucide-react";

const ITEMS = [
  {
    quote:
      "Me sentí acompañada en todo el proceso. Aprendí a comer mejor sin sentir que estaba a dieta.",
    label: "Paciente · Acompañamiento de hábitos",
  },
  {
    quote:
      "Llegué sintiéndome estancada y con poca energía. Con el acompañamiento pude organizar mejor mis comidas, mejorar mis hábitos y sentirme más constante.",
    label: "Paciente · Recomposición corporal",
  },
  {
    quote:
      "Paciente que buscaba recomposición corporal y mejora de hábitos. A través de seguimiento personalizado, educación nutricional y cambios progresivos, logró mayor adherencia, mejor digestión y avances sostenibles.",
    label: "Caso de transformación",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-24">
      <div className="container-prose">
        <div className="flex flex-col items-start sm:items-center sm:text-center max-w-2xl sm:mx-auto">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Casos reales
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Casos y experiencias de acompañamiento
          </h2>
          <p className="mt-3 text-xs text-muted-foreground italic">
            Testimonios reales en proceso de actualización.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 items-stretch">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-3xl border border-border/70 bg-card p-7"
            >
              <Quote className="h-6 w-6 text-sage/70" />
              <blockquote className="mt-4 text-base text-foreground/85 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
