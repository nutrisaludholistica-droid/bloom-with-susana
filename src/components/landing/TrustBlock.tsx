import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const ITEMS = [
  {
    title: "Cédula profesional 156228944",
    desc: "Licenciada en Nutrición avalada por la SEP. Consulta segura y basada en evidencia.",
  },
  {
    title: "Primer lugar FECII 2024",
    desc: "Reconocimiento por investigación en nutrición y salud digestiva.",
  },
  {
    title: "Microbiota y salud digestiva",
    desc: "Enfoque especializado en recomposición corporal y bienestar intestinal.",
  },
  {
    title: "Presencial u online",
    desc: "Consulta en Hea'n Clinic (Playa del Carmen) o en línea desde cualquier lugar.",
  },
];

export function TrustBlock() {
  return (
    <section className="bg-sage-soft/40 py-20 sm:py-28">
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">Confianza profesional</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Estás en manos de una profesional
          </h2>
          <p className="mt-6 text-[0.95rem] leading-[1.9] text-foreground/70">
            No son recetas genéricas ni dietas de moda. Es acompañamiento clínico
            personalizado, con formación certificada y experiencia real con pacientes.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2">
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              className="border-t border-olive/15 py-8 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
            >
              <span className="font-display text-[0.7rem] tracking-[0.3em] text-clay">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-light text-olive">
                {it.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-[1.9] text-foreground/70">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={waUrl(WA_MSG.trust)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_trust")}
            className="inline-flex items-center justify-center bg-olive px-8 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-primary"
          >
            Agendar mi consulta
          </a>
        </div>
      </div>
    </section>
  );
}
