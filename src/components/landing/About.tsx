import aboutImg from "@/assets/about-susana.webp.asset.json";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";


const FORMATION = [
  "Primer lugar en la FECII 2024",
  "Formación en modulación de la microbiota",
  "Salud intestinal, bióticos y psicobióticos",
  "Eje intestino-cerebro",
  "Nutrición hormonal",
  "Inflammaging, inflamación crónica, obesidad y DMT2",
  "Inmunonutrición",
  "Recomposición corporal",
  "Suplementación",
  "Socia fundadora de la Sociedad Americana de Microbiota",
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="container-prose grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <img
            src={aboutImg.url}
            alt="Susana Wignall, nutrióloga, sonriendo en su consultorio"
            width={1086}
            height={1448}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <p className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
            Susana Wignall · Nutrióloga · Céd. profesional 156228944
          </p>
        </div>

        <div>
          <p className="eyebrow">Sobre mí</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Susana Wignall, nutrióloga clínica en Playa del Carmen
          </h2>

          <blockquote className="mt-8 border-l border-clay/50 pl-6 font-script text-2xl leading-snug text-clay sm:text-[1.75rem]">
            Reconectar con tu cuerpo desde una nutrición consciente y posible.
          </blockquote>

          <div className="mt-8 space-y-5 text-[0.95rem] leading-[1.9] text-foreground/75">
            <p>
              Soy nutrióloga enfocada en acompañamiento personalizado, recomposición
              corporal, salud digestiva y mejora de hábitos sostenibles. Mi objetivo
              es que la nutrición se adapte a tu vida, no al contrario.
            </p>
            <p>
              Trabajo contigo paso a paso para entender mejor tus necesidades,
              mejorar tu alimentación, avanzar aunque te sientas estancado/a y
              construir herramientas que te permitan sostener tus resultados a
              largo plazo.
            </p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="eyebrow">Formación y logros</p>
            <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {FORMATION.map((f) => (
                <li
                  key={f}
                  className="border-b border-border/60 pb-3 text-sm leading-snug text-foreground/75"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
