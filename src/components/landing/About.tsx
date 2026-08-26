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
            Soy Susana Wignall, nutrióloga y chef
          </h2>

          <blockquote className="mt-8 border-l border-clay/50 pl-6 font-script text-2xl leading-snug text-clay sm:text-[1.75rem]">
            Ahora entiendo mi cuerpo.
          </blockquote>

          <div className="mt-8 space-y-5 text-[0.95rem] leading-[1.9] text-foreground/75">
            <p>
              Desde hace muchos años la cocina ha sido una parte muy importante de mi
              vida. Me gusta cocinar, experimentar, aprender y, sobre todo, descubrir
              todo lo que podemos hacer con los alimentos.
            </p>
            <p>
              Con el tiempo entendí que la cocina y la nutrición no tienen por qué ir
              por caminos separados. Al contrario: cuando aprendemos a cocinar y a
              entender lo que comemos, también aprendemos a cuidar de nosotros mismos.
            </p>
            <p>
              No creo que para estar saludables tengamos que vivir a dieta, dejar de
              disfrutar la comida o seguir reglas imposibles de mantener. Creo que
              necesitamos aprender: a escuchar nuestro cuerpo, a elegir nuestros
              alimentos, a cocinar de una manera práctica y rica, y a encontrar una
              forma de alimentarnos que podamos mantener toda la vida.
            </p>
            <p>
              Para mí la nutrición no se trata solamente de bajar de peso. Se trata de
              sentirte bien, entender tu cuerpo y aprender a cuidarlo. Mi propósito es
              acompañarte a construir una relación con la comida que te permita vivir
              mejor, disfrutar más y depender cada vez menos de las dietas.
            </p>
            <p className="font-medium text-olive">
              Porque no se trata de comer perfecto. Se trata de aprender a alimentarte
              para toda la vida.
            </p>
          </div>

          <a
            href={waUrl(WA_MSG.trust)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_about")}
            className="mt-9 inline-flex items-center justify-center bg-olive px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-primary"
          >
            Agendar mi consulta
          </a>

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
