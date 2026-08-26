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
    <section id="sobre-mi" className="bg-secondary/60 py-20 sm:py-28">
      <div className="container-prose">
        {/* Encabezado */}
        <div className="max-w-2xl">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Soy Susana Wignall, nutrióloga y chef
          </h2>
        </div>

        {/* Foto + historia */}
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <figure>
            <img
              src={aboutImg.url}
              alt="Susana Wignall, nutrióloga, sonriendo en su consultorio"
              width={1086}
              height={1448}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              Susana Wignall · Nutrióloga · Céd. profesional 156228944
            </figcaption>
          </figure>

          <div>
            <blockquote className="border-l-2 border-eggplant/50 pl-6 font-script text-[1.85rem] leading-snug text-eggplant sm:text-[2.1rem]">
              Ahora entiendo mi cuerpo.
            </blockquote>

            <div className="mt-8 grid gap-5 text-[0.95rem] leading-[1.9] text-foreground/75 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
              <p>
                Desde hace muchos años la cocina ha sido una parte muy importante
                de mi vida. Me gusta cocinar, experimentar, aprender y, sobre
                todo, descubrir todo lo que podemos hacer con los alimentos.
              </p>
              <p>
                Con el tiempo entendí que la cocina y la nutrición no tienen por
                qué ir por caminos separados. Al contrario: cuando aprendemos a
                cocinar y a entender lo que comemos, también aprendemos a cuidar
                de nosotros mismos.
              </p>
              <p>
                No creo que para estar saludables tengamos que vivir a dieta,
                dejar de disfrutar la comida o seguir reglas imposibles de
                mantener. Creo que necesitamos aprender: a escuchar nuestro
                cuerpo, a elegir nuestros alimentos, a cocinar de una manera
                práctica y rica, y a encontrar una forma de alimentarnos que
                podamos mantener toda la vida.
              </p>
              <p>
                Para mí la nutrición no se trata solamente de bajar de peso. Se
                trata de sentirte bien, entender tu cuerpo y aprender a
                cuidarlo. Mi propósito es acompañarte a construir una relación
                con la comida que te permita vivir mejor, disfrutar más y
                depender cada vez menos de las dietas.
              </p>
              <p className="font-medium text-olive sm:col-span-2">
                Porque no se trata de comer perfecto. Se trata de aprender a
                alimentarte para toda la vida.
              </p>
            </div>
          </div>
        </div>

        {/* Formación y logros: franja propia centrada */}
        <div className="mt-16 border-t border-border pt-10 sm:mt-20">
          <p className="eyebrow text-center">Formación y logros</p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-x-12 gap-y-3 sm:grid-cols-2">
            {FORMATION.map((f) => (
              <li
                key={f}
                className="border-b border-border/60 pb-3 text-center text-sm leading-snug text-foreground/75 sm:text-left"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Recuadro CTA grande */}
        <div className="mt-16 border-2 border-eggplant/45 bg-cream px-6 py-10 text-center sm:mt-20 sm:px-14 sm:py-14">
          <p className="eyebrow">Tu primer paso</p>
          <h3 className="mx-auto mt-4 max-w-xl font-display text-2xl font-light leading-tight text-olive sm:text-[2rem]">
            Agendemos{" "}
            <span className="font-script text-eggplant text-[1em] tracking-normal">
              tu consulta
            </span>
          </h3>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-foreground/70">
            Presencial en Playa del Carmen o en línea. Platícame qué buscas y
            vemos juntos por dónde empezar.
          </p>
          <a
            href={waUrl(WA_MSG.trust)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_about")}
            className="mt-8 inline-flex w-full items-center justify-center bg-eggplant px-10 py-5 text-[0.78rem] uppercase tracking-[0.24em] text-cream transition-colors hover:bg-eggplant-deep sm:w-auto sm:px-14"
          >
            Agendar mi consulta
          </a>
        </div>
      </div>
    </section>
  );
}
