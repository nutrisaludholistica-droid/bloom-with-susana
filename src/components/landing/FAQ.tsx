import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";
import { FAQS } from "./faq-data";


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
            href={waUrl(WA_MSG.faq)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_faq")}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
