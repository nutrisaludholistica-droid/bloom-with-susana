import { MapPin, Phone, ExternalLink } from "lucide-react";
import { PHONE_CLINIC } from "@/lib/whatsapp";

const MAPS_URL = "https://maps.app.goo.gl/zGHMo1Fk4cwcMbUJ6";
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d-87.0813174!3d20.6461296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e430033b9dfa5%3A0x1fe54cbff17fb929!2sNutri%C3%B2loga%20Susana%20Wignall!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx";

export function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-24">
      <div className="container-prose">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
              Ubicación
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
              Consultorio de nutrición en Playa del Carmen
            </h2>

            <div className="mt-7 space-y-5">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage/12 text-sage">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg text-olive">Hea’n Clinic</p>
                  <p className="mt-1 text-sm text-foreground/75 leading-relaxed">
                    Humana Work Center, Av. Paseo Central esq. Av. Chemuyil,
                    Col. El Pedregal, C.P. 77712, Playa del Carmen, Quintana Roo, México.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sage/12 text-sage">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Teléfono del consultorio</p>
                  <a
                    href={`tel:+52${PHONE_CLINIC.replace(/\s/g, "")}`}
                    className="font-display text-lg text-olive hover:text-sage"
                  >
                    {PHONE_CLINIC}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Ver ubicación en Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border/70 shadow-md">
            <iframe
              title="Mapa de Hea’n Clinic en Playa del Carmen"
              src={EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] sm:h-[440px] w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}