import { Link } from "@tanstack/react-router";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function ServiceHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/60">
      <div className="container-prose grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
        >
          <span
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-sage/40 bg-sage/10 font-display text-sage text-base"
            aria-hidden
          >
            SW
          </span>
          <span className="truncate font-display text-base sm:text-lg text-olive">
            Susana Wignall
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden sm:inline-flex rounded-full px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-sage/10 transition-colors"
          >
            Inicio
          </Link>
          <a
            href={waUrl(WA_MSG.hero)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_service_header")}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition"
          >
            Agendar
          </a>
        </nav>
      </div>
    </header>
  );
}
