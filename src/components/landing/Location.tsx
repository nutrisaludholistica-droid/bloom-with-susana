import { MapPin, Phone, ExternalLink } from "lucide-react";
import { PHONE_CLINIC } from "@/lib/whatsapp";

const ADDRESS_QUERY = encodeURIComponent(
  "Humana Works Center, Av. Paseo Central, Playa del Carmen, Quintana Roo 77723",
);
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`;
const EMBED_URL = `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`;

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
                    Av. Paseo Central, Humana Works Center, Col. Fracc. La Gran Plaza,
                    Riviera 2, interior edificio, entre Av. Chemuyil y calle Xpu-Ha,
                    C.P. 77723, Playa del Carmen, Quintana Roo, México.
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
