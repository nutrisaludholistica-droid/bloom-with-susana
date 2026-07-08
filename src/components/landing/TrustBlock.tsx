import { Award, BadgeCheck, GraduationCap, MapPin, ArrowRight } from "lucide-react";
import { WA_MSG, waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Cédula profesional 156228944",
    desc: "Licenciada en Nutrición avalada por la SEP. Consulta segura y basada en evidencia.",
  },
  {
    icon: Award,
    title: "Primer lugar FECII 2024",
    desc: "Reconocimiento por investigación en nutrición y salud digestiva.",
  },
  {
    icon: GraduationCap,
    title: "Formación en microbiota y salud digestiva",
    desc: "Enfoque especializado en recomposición corporal y bienestar intestinal.",
  },
  {
    icon: MapPin,
    title: "Presencial u online",
    desc: "Consulta en Hea'n Clinic (Playa del Carmen) o en línea desde cualquier lugar.",
  },
];

export function TrustBlock() {
  return (
    <section className="py-20 sm:py-24 bg-sand/40">
      <div className="container-prose">
        <div className="max-w-2xl sm:mx-auto sm:text-center">
          <span className="text-xs uppercase tracking-[0.18em] text-sage font-medium">
            Confianza profesional
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-olive">
            Estás en manos de una profesional
          </h2>
          <p className="mt-4 text-base text-foreground/75 leading-relaxed">
            No son recetas genéricas ni dietas de moda. Es acompañamiento clínico
            personalizado, con formación certificada y experiencia real con pacientes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="flex gap-4 rounded-3xl border border-border/70 bg-card p-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sage/12 text-sage">
                <it.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg text-olive">{it.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/75 leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={waUrl(WA_MSG.trust)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWaClick("whatsapp_click_trust")}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-olive/20 bg-background px-6 py-3 text-sm font-medium text-olive hover:bg-sage/10 transition"
          >
            Agendar consulta por WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
