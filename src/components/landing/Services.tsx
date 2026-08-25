const SERVICES = [
  {
    title: "Consulta nutricional personalizada",
    desc: "Evaluación, objetivos, hábitos, estilo de vida y un plan adaptado a cada persona.",
  },
  {
    title: "Recomposición corporal",
    desc: "Acompañamiento para mejorar composición corporal, reducir grasa, ganar estructura y avanzar de forma sostenible.",
  },
  {
    title: "Salud digestiva",
    desc: "Estrategias nutricionales para mejorar bienestar digestivo, energía y calidad de vida.",
  },
  {
    title: "Acompañamiento de hábitos",
    desc: "Educación nutricional y seguimiento para crear cambios reales y sostenibles.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="container-prose">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Servicios</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
              Un acompañamiento pensado para tu{" "}
              <span className="font-script text-clay text-[0.9em] tracking-normal">
                vida real
              </span>
            </h2>
          </div>
          <p className="text-sm leading-[1.9] text-foreground/70 lg:pl-10">
            Cada proceso empieza con una lectura completa de tu historia: hábitos,
            digestión, energía y composición corporal. Desde ahí construimos algo
            que puedas sostener.
          </p>
        </div>

        <div className="grid sm:grid-cols-2">
          {SERVICES.map(({ title, desc }, i) => (
            <article
              key={title}
              className="border-b border-border py-9 sm:py-11 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
            >
              <span className="font-display text-xs tracking-[0.3em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-light leading-snug text-olive sm:text-2xl">
                {title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-[1.9] text-foreground/70">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
