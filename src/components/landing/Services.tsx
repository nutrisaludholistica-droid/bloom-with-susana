import { Salad, Dumbbell, Sprout, Compass } from "lucide-react";

const SERVICES = [
  {
    icon: Salad,
    title: "Consulta nutricional personalizada",
    desc: "Evaluación, objetivos, hábitos, estilo de vida y un plan adaptado a cada persona.",
  },
  {
    icon: Dumbbell,
    title: "Recomposición corporal",
    desc: "Acompañamiento para mejorar composición corporal, reducir grasa, ganar estructura y avanzar de forma sostenible.",
  },
  {
    icon: Sprout,
    title: "Salud digestiva",
    desc: "Estrategias nutricionales para mejorar bienestar digestivo, energía y calidad de vida.",
  },
  {
    icon: Compass,
    title: "Acompañamiento de hábitos",
    desc: "Educación nutricional y seguimiento para crear cambios reales y sostenibles.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <div className="container-prose">
        <div className="flex flex-col items-start sm:items-center sm:text-center max-w-2xl sm:mx-auto">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Servicios
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Un acompañamiento pensado para tu vida real
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-3xl border border-border/70 bg-card p-6 transition hover:border-sage/40 hover:shadow-md hover:shadow-olive/5"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage/12 text-sage transition group-hover:bg-sage group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl text-olive leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
