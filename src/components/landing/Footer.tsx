import { Instagram } from "lucide-react";
import { PHONE_CLINIC, PHONE_WHATSAPP, WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";
import { trackSocialClick } from "@/lib/analytics";
import { SOCIAL } from "@/lib/social";

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
              <span className="font-display text-lg text-olive">Susana Wignall · Nutrióloga</span>
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
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Síguenos</p>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href={SOCIAL.maizSal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("instagram", "maiz-sal")}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground/70 hover:border-sage hover:text-sage transition"
                  aria-label={`Instagram de ${SOCIAL.maizSal.label}`}
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={SOCIAL.nutrilogas.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("facebook", "personal")}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground/70 hover:border-sage hover:text-sage transition"
                  aria-label={`Facebook de ${SOCIAL.nutrilogas.label}`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL.maizSal.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick("facebook", "maiz-sal")}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground/70 hover:border-sage hover:text-sage transition"
                  aria-label={`Facebook de ${SOCIAL.maizSal.label}`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base text-olive">Navegación</h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              <li><a href="/nutriologa-playa-del-carmen" className="text-foreground/80 hover:text-sage">Nutrióloga Playa del Carmen</a></li>
              <li><a href="/consulta-nutricional" className="text-foreground/80 hover:text-sage">Consulta nutricional</a></li>
              <li><a href="/nutriologa-en-linea" className="text-foreground/80 hover:text-sage">Nutrióloga en línea</a></li>
              <li><a href="/analisis-corporal-tanita" className="text-foreground/80 hover:text-sage">Composición corporal</a></li>
              <li><a href="#paquetes" className="text-foreground/80 hover:text-sage">Paquetes</a></li>
              <li><a href="#sobre-mi" className="text-foreground/80 hover:text-sage">Sobre mí</a></li>
              <li><a href="#talleres" className="text-foreground/80 hover:text-sage">Talleres</a></li>
              <li><a href="#acompanamiento" className="text-foreground/80 hover:text-sage">Acompañamiento</a></li>
              <li><a href="#faqs" className="text-foreground/80 hover:text-sage">FAQs</a></li>
              <li><a href="#ubicacion" className="text-foreground/80 hover:text-sage">Ubicación</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-border/60 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Susana Wignall, Nutrióloga. Todos los derechos reservados.</p>
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
