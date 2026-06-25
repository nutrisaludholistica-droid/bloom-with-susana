import { Award } from "lucide-react";
import aboutImg from "@/assets/about-image.png.asset.json";

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
  "Cursos especializados tomados durante el último año",
  "Socia fundadora de la Sociedad Americana de Microbiota",
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-24">
      <div className="container-prose grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 items-start">
        <div className="relative">
          <div
            className="absolute -inset-6 rounded-[2.5rem] bg-sage-soft/35 rotate-2"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 shadow-xl shadow-olive/5">
          <img
              src={aboutImg.url}
              alt="Susana Wignall en la playa"
              width={577}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Sobre mí
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Susana Wignall
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cédula profesional: 156228944
          </p>

          <div className="mt-6 space-y-4 text-base text-foreground/80 leading-relaxed">
            <p>
              Soy LN Susana Wignall, nutrióloga enfocada en acompañamiento personalizado,
              recomposición corporal, salud digestiva y mejora de hábitos sostenibles. Mi
              objetivo es ayudarte a reconectar con tu cuerpo desde una nutrición
              consciente, práctica y adaptada a tu vida real.
            </p>
            <p>
              Trabajo contigo paso a paso para que puedas entender mejor tus necesidades,
              mejorar tu alimentación, avanzar aunque te sientas estancado/a y construir
              herramientas que te permitan sostener tus resultados a largo plazo.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-border/70 bg-card p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-clay/15 text-clay">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl text-olive">Formación y logros</h3>
            </div>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {FORMATION.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm text-foreground/80 leading-snug"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
