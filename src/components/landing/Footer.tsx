import { PHONE_CLINIC, PHONE_WHATSAPP, WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-sand/50">
      <div className="container-prose py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-sage/40 bg-sage/10 font-display text-sage">
                SW
              </span>
              <span className="font-display text-lg text-olive">LN Susana Wignall</span>
            </div>
            <p className="mt-4 text-sm text-foreground/70 leading-relaxed max-w-sm">
              Acompañamiento nutricional personalizado en Playa del Carmen y en línea.
              Recomposición corporal, salud digestiva y hábitos sostenibles.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              Cédula profesional: 156228944
            </p>
          </div>

          <div>
            <h3 className="font-display text-base text-olive">Contacto</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={waUrl(WA_MSG.footer)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWaClick("whatsapp_click_footer")}
                  className="text-foreground/80 hover:text-sage"
                >
                  WhatsApp · {PHONE_WHATSAPP}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+52${PHONE_CLINIC.replace(/\s/g, "")}`}
                  className="text-foreground/80 hover:text-sage"
                >
                  Clínica · {PHONE_CLINIC}
                </a>
              </li>
              <li className="text-foreground/70">Playa del Carmen, Quintana Roo</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base text-olive">Navegación</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              <li><a href="#paquetes" className="text-foreground/80 hover:text-sage">Paquetes</a></li>
              <li><a href="#sobre-mi" className="text-foreground/80 hover:text-sage">Sobre mí</a></li>
              <li><a href="#talleres" className="text-foreground/80 hover:text-sage">Talleres</a></li>
              <li><a href="#testimonios" className="text-foreground/80 hover:text-sage">Testimonios</a></li>
              <li><a href="#faqs" className="text-foreground/80 hover:text-sage">FAQs</a></li>
              <li><a href="#ubicacion" className="text-foreground/80 hover:text-sage">Ubicación</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} LN Susana Wignall. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <p>Hecho con cariño en Playa del Carmen.</p>
            <a href="/auth" className="hover:text-sage opacity-60 hover:opacity-100 transition">
              Acceso CRM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
