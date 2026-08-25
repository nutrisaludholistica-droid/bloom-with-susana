import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#talleres", label: "Talleres" },
  { href: "#acompanamiento", label: "Acompañamiento" },
  { href: "#faqs", label: "FAQs" },
  { href: "#ubicacion", label: "Ubicación" },
];

function Wordmark() {
  return (
    <span className="flex min-w-0 items-baseline gap-1.5">
      <span className="font-script text-lg leading-none text-clay">nutrición</span>
      <span className="whitespace-nowrap font-display text-[0.75rem] uppercase tracking-[0.18em] text-olive sm:text-[0.85rem] sm:tracking-[0.22em] md:text-[0.9rem] md:tracking-[0.25em] lg:text-base lg:tracking-[0.3em]">
        Susana Wignall
      </span>
    </span>
  );
}

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
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:py-5">
        <a href="#inicio" className="min-w-0" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-[0.18em] text-foreground/70 hover:text-olive transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_header")}
            className="border border-olive px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-olive hover:bg-olive hover:text-cream transition-colors"
          >
            Agendar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center border border-border text-foreground"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/97 backdrop-blur-md">
          <nav className="container-prose flex flex-col py-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/70 py-3.5 text-xs uppercase tracking-[0.2em] text-foreground/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWaClick("whatsapp_click_header_mobile");
              setOpen(false);
            }}
            className="mt-6 inline-flex items-center justify-center bg-olive px-5 py-4 text-xs uppercase tracking-[0.2em] text-cream"
          >
            Agendar por WhatsApp
          </a>
          </nav>
        </div>
      )}
    </header>
  );
}
