import workshopsImg from "@/assets/workshops.webp";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const WORKSHOPS = [
  { title: "Taller de fermentos", desc: "Aprende a preparar fermentos vivos para apoyar tu salud digestiva." },
  { title: "Kéfir desde cero", desc: "Inicia tu propio kéfir en casa con guía paso a paso." },
  { title: "Hagamos el súper saludable", desc: "Cómo elegir mejores productos en el supermercado." },
  { title: "Aprende a leer las etiquetas", desc: "Decodifica etiquetas nutricionales y compra con criterio." },
];

export function Workshops() {
  return (
    <section id="talleres" className="py-20 sm:py-28">
      <div className="container-prose grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <img
            src={workshopsImg}
            alt="Cocina saludable en casa con vegetales frescos y fermentos"
            width={900}
            height={900}
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Oferta complementaria</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Cursos y talleres
          </h2>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.9] text-foreground/70">
            Además de las consultas y paquetes personalizados, ofrezco talleres
            enfocados en educación nutricional, cocina saludable, salud digestiva y
            compras más conscientes.
          </p>

          <div className="mt-10">
            {WORKSHOPS.map((w) => (
              <article
                key={w.title}
                className="grid gap-2 border-b border-olive/15 py-6 first:border-t sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-light text-olive">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {w.desc}
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWaClick("whatsapp_click_workshops", { workshop: w.title })}
                  className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-clay hover:text-olive"
                >
                  Información
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
