import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#talleres", label: "Talleres" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#faqs", label: "FAQs" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sage/40 bg-sage/10 font-display text-sage text-base"
            aria-hidden
          >
            SW
          </span>
          <span className="truncate font-display text-base sm:text-lg text-olive">
            &nbsp;Susana Wignall
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-sage/10 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 text-foreground"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="container-prose flex flex-col py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-foreground/90 hover:bg-sage/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
