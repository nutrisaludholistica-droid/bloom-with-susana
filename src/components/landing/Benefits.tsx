const ITEMS = [
  "Mejora de hábitos sin dietas extremas",
  "Acompañamiento personalizado",
  "Recomposición corporal sostenible",
  "Salud digestiva comunicada de forma simple",
  "Seguimiento cercano",
  "Educación nutricional práctica",
  "Herramientas para sostener resultados a largo plazo",
];

export function Benefits() {
  return (
    <section className="bg-sand/60 py-20 sm:py-28">
      <div className="container-prose grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Para ti</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Si sientes que avanzas, pero no terminas de ver{" "}
            <span className="font-script text-clay text-[0.9em] tracking-normal">
              resultados
            </span>
          </h2>
          <p className="mt-7 max-w-md text-[0.95rem] leading-[1.9] text-foreground/70">
            Si haces esfuerzos pero no ves avances, si tu alimentación no se adapta a
            tu vida real o necesitas una guía profesional para mejorar tus hábitos,
            este acompañamiento está diseñado para ti.
          </p>
        </div>

        <ul className="lg:pt-2">
          {ITEMS.map((text, i) => (
            <li
              key={text}
              className="flex items-baseline gap-5 border-b border-olive/12 py-4 first:border-t"
            >
              <span className="font-display text-[0.7rem] tracking-[0.25em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-foreground/80 sm:text-[0.95rem]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
