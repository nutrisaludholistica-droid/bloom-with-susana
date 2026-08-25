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
    <section id="talleres" className="py-20 sm:py-24 bg-sand/40">
      <div className="container-prose">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 shadow-md">
              <img
                src={workshopsImg}
                alt="Cocina saludable en casa con vegetales frescos y fermentos"
                width={900}
                height={900}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
              Oferta complementaria
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
              Cursos y talleres complementarios
            </h2>
            <p className="mt-4 text-base text-foreground/75 leading-relaxed">
              Además de las consultas y paquetes personalizados, también se ofrecen
              talleres enfocados en educación nutricional, cocina saludable, salud
              digestiva y compras más conscientes.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {WORKSHOPS.map((w) => (
                <article
                  key={w.title}
                  className="rounded-2xl border border-border/70 bg-background p-5"
                >
                  <h3 className="font-display text-lg text-olive">{w.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-snug">
                    {w.desc}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWaClick("whatsapp_click_workshops", { workshop: w.title })}
                    className="mt-3 inline-flex text-sm font-medium text-sage hover:text-olive"
                  >
                    Solicitar información →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
