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
      "Buscaba recomposición corporal y mejora de hábitos. Con seguimiento personalizado y cambios progresivos logró mayor adherencia, mejor digestión y avances sostenibles.",
    label: "Caso de transformación",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 sm:py-28">
      <div className="container-prose">
        <div className="border-b border-border pb-10">
          <p className="eyebrow">Casos reales</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Casos y experiencias de acompañamiento
          </h2>
          <p className="mt-4 text-xs text-muted-foreground">
            Testimonios reales en proceso de actualización.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col border-b border-border py-10 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0"
            >
              <span className="font-script text-3xl leading-none text-clay/70" aria-hidden>
                “
              </span>
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-[1.9] text-foreground/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {t.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
