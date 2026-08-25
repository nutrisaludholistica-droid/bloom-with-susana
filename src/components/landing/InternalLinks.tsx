import { Link } from "@tanstack/react-router";

const links = [
  {
    to: "/consulta-nutricional",
    title: "Consulta nutricional",
    body: "Qué incluye la valoración, el plan personalizado y cómo es el seguimiento.",
  },
  {
    to: "/nutriologa-en-linea",
    title: "Nutrióloga en línea",
    body: "Atención por videollamada para pacientes de todo México y el extranjero.",
  },
  {
    to: "/analisis-corporal-tanita",
    title: "Composición corporal",
    body: "Bioimpedancia con Tanita de 8 electrodos: grasa, músculo y agua por segmento.",
  },
  {
    to: "/nutriologa-playa-del-carmen",
    title: "Nutrióloga en Playa del Carmen",
    body: "Consulta presencial, ubicación, especialidades y preguntas frecuentes.",
  },
];

export function InternalLinks() {
  return (
    <section className="border-t border-border/60 bg-sand/30">
      <div className="container-prose py-14 sm:py-20">
        <span className="eyebrow text-clay">Explora</span>
        <h2 className="mt-3 max-w-xl font-display text-2xl text-olive sm:text-3xl">
          Conoce cada servicio a detalle
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block h-full rounded-2xl border border-border bg-card p-6 transition hover:border-sage/50 hover:shadow-sm"
              >
                <h3 className="font-display text-lg text-olive">{link.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {link.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
