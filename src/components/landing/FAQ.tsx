import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const FAQS = [
  {
    q: "¿La consulta puede ser presencial o en línea?",
    a: "Sí. La consulta puede realizarse en línea o presencial en Hea’n Clinic, en Playa del Carmen.",
  },
  {
    q: "¿Dónde se realiza la consulta presencial?",
    a: "En Hea’n Clinic, ubicada en Av. Paseo Central, Humana Works Center, Col. Fracc. La Gran Plaza, Riviera 2, interior edificio, entre Av. Chemuyil y calle Xpu-Ha, C.P. 77723, Playa del Carmen, Quintana Roo, México.",
  },
  {
    q: "¿Los paquetes incluyen seguimiento por WhatsApp?",
    a: "Sí. Los paquetes incluyen seguimiento vía WhatsApp 2 veces por semana.",
  },
  {
    q: "¿Necesito experiencia previa con dietas o ejercicio?",
    a: "No. El acompañamiento se adapta al punto de partida de cada persona.",
  },
  {
    q: "¿El plan nutricional es personalizado?",
    a: "Sí. Incluye plan personalizado y apoyo mediante la app Avena Health.",
  },
  {
    q: "¿La consulta incluye mediciones corporales?",
    a: "Sí. Incluye bioimpedancia de 8 elementos.",
  },
  {
    q: "¿Los paquetes incluyen visita al supermercado?",
    a: "Sí, dependiendo del paquete. Se incluyen visitas al supermercado para revisar opciones de compra y selección de productos.",
  },
  {
    q: "¿Los paquetes incluyen clases de cocina?",
    a: "Sí. Algunos paquetes incluyen clases de cocina saludable a domicilio.",
  },
  {
    q: "¿Los insumos están incluidos en las clases de cocina?",
    a: "No. Los insumos no están incluidos.",
  },
  {
    q: "¿Se muestran precios en la landing?",
    a: "No. Los precios se solicitan por WhatsApp o directamente en la clínica.",
  },
  {
    q: "¿Cómo puedo reservar?",
    a: "Puedes reservar por WhatsApp o comunicarte al teléfono de la clínica.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-sand/40">
      <div className="container-prose">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Resolvamos tus dudas
          </h2>
        </div>

        <div className="mt-10 mx-auto max-w-3xl divide-y divide-border/70 rounded-3xl border border-border/70 bg-card">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 font-display text-base sm:text-lg text-olive">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage/12 text-sage">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-7 text-sm sm:text-base text-foreground/75 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-foreground/75">¿Tienes otra pregunta?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
