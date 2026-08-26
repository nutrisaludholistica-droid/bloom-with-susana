const STEPS = [
  {
    title: "Primera consulta",
    desc: "Historia clínica completa: antecedentes, digestión, energía, sueño, actividad física y relación con la comida. Medición antropométrica y bioimpedancia de 8 electrodos.",
  },
  {
    title: "Tu plan",
    desc: "Un plan nutricional construido con tus horarios, presupuesto y gustos reales, no una dieta genérica. Con alternativas para que puedas sostenerlo.",
  },
  {
    title: "Seguimiento",
    desc: "Revisiones periódicas para ajustar el plan según tus avances y mediciones, con acompañamiento cercano por WhatsApp entre consultas.",
  },
];

export function Testimonials() {
  return (
    <section id="acompanamiento" className="py-20 sm:py-28">
      <div className="container-prose">
        <div className="border-b border-border pb-10">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Así es el acompañamiento, paso a paso
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.9] text-foreground/70">
            La consulta acaba de abrir en Playa del Carmen, así que prefiero
            contarte con transparencia cómo trabajo en lugar de mostrarte
            testimonios. Los publicaré cuando mis pacientes quieran compartirlos.
          </p>
        </div>

        <div className="grid md:grid-cols-3">
          {STEPS.map((s, i) => (
            <article
              key={s.title}
              className="flex flex-col border-b border-border py-10 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="font-display text-xs tracking-[0.3em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-light leading-snug text-olive">
                {s.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-[1.9] text-foreground/75">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
