import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";
import { FAQS } from "./faq-data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-sand/60 py-20 sm:py-28">
      <div className="container-prose grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="mt-5 font-display text-3xl font-light leading-tight text-olive sm:text-[2.6rem]">
            Resolvamos tus dudas
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-foreground/70">
            ¿Tienes otra pregunta? Escríbeme y te respondo personalmente.
          </p>
          <a
            href={waUrl(WA_MSG.faq)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_faq")}
            className="mt-6 inline-flex items-center justify-center border border-olive px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-olive transition-colors hover:bg-olive hover:text-cream"
          >
            Escríbeme por WhatsApp
          </a>
        </div>

        <div>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-olive/15 first:border-t">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 font-display text-base font-light text-olive sm:text-lg">
                    {f.q}
                  </span>
                  <span className="shrink-0 text-clay">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-8 text-sm leading-[1.9] text-foreground/70">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
