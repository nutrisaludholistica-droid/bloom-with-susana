import { Check, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Pkg = {
  name: string;
  tagline: string;
  desc: string;
  includes: string[];
  note?: string;
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    name: "Básico",
    tagline: "3 meses",
    desc: "Acompañamiento inicial para comenzar con estructura, seguimiento y educación nutricional.",
    includes: [
      "1 consulta al mes",
      "Modalidad en línea o presencial",
      "Seguimiento por WhatsApp 2 veces por semana",
      "1 taller al mes",
      "Plan nutricional personalizado",
      "Apoyo mediante app Avena Health",
      "Bioimpedancia de 8 elementos",
    ],
  },
  {
    name: "Transformación",
    tagline: "6 meses",
    desc: "Acompañamiento más completo para integrar hábitos, compras saludables y cocina práctica.",
    includes: [
      "Todo lo del paquete Básico",
      "1 visita al supermercado para revisar opciones de compra",
      "2 clases de cocina saludable a domicilio",
      "Plan personalizado",
      "Seguimiento por WhatsApp",
      "App Avena Health",
      "Bioimpedancia de 8 elementos",
    ],
    note: "No incluye insumos.",
    featured: true,
  },
  {
    name: "Reconexión",
    tagline: "9 meses",
    desc: "Programa integral para profundizar en hábitos, cocina saludable, salud digestiva y autonomía nutricional.",
    includes: [
      "Todo lo del paquete Transformación",
      "Taller de elaboración de fermentos",
      "2 visitas al supermercado",
      "4 clases de cocina saludable a domicilio",
      "Plan personalizado",
      "Seguimiento por WhatsApp",
      "App Avena Health",
      "Bioimpedancia de 8 elementos",
    ],
    note: "No incluye insumos.",
  },
];

export function Packages() {
  return (
    <section id="paquetes" className="py-20 sm:py-24 bg-sand/40">
      <div className="container-prose">
        <div className="flex flex-col items-start sm:items-center sm:text-center max-w-2xl sm:mx-auto">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Paquetes de acompañamiento
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Elige el ritmo de tu acompañamiento
          </h2>
          <p className="mt-4 text-base text-foreground/75 leading-relaxed">
            Tres programas diseñados para acompañarte paso a paso, según el nivel de
            profundidad y tiempo que quieras dedicar a tus hábitos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 items-stretch">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 sm:p-8 ${
                p.featured
                  ? "border-sage bg-card shadow-xl shadow-olive/10 lg:-translate-y-3"
                  : "border-border/70 bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-clay px-3 py-1 text-xs font-medium text-accent-foreground shadow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Más elegido
                </span>
              )}

              <header>
                <p className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
                  {p.tagline}
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-olive">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  {p.desc}
                </p>
              </header>

              <ul className="mt-6 space-y-2.5">
                {p.includes.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {p.note && (
                <p className="mt-5 rounded-xl bg-sand/70 px-3 py-2 text-xs text-muted-foreground">
                  {p.note}
                </p>
              )}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-olive/95 text-cream hover:bg-olive"
                }`}
              >
                Quiero información de este paquete
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Los precios se comparten por WhatsApp o directamente en la clínica.
        </p>
      </div>
    </section>
  );
}
