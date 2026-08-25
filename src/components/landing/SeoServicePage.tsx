import { Link } from "@tanstack/react-router";
import { ServiceHeader } from "@/components/landing/ServiceHeader";
import { Footer } from "@/components/landing/Footer";
import { waUrl } from "@/lib/whatsapp";
import { trackWaClick } from "@/lib/analytics";

export interface SeoBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoServicePageProps {
  eyebrow: string;
  h1: string;
  intro: string;
  badge?: string;
  ctaLabel: string;
  ctaMessage: string;
  eventId: string;
  blocks: SeoBlock[];
  faqs: SeoFaq[];
  related: Array<{ to: string; label: string }>;
}

export function SeoServicePage({
  eyebrow,
  h1,
  intro,
  badge,
  ctaLabel,
  ctaMessage,
  eventId,
  blocks,
  faqs,
  related,
}: SeoServicePageProps) {
  const cta = (suffix: string) => (
    <a
      href={waUrl(ctaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWaClick(`${eventId}_${suffix}`)}
      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
    >
      {ctaLabel}
    </a>
  );

  return (
    <>
      <ServiceHeader />
      <main className="pt-20">
        <section className="bg-sand/30">
          <div className="container-prose py-14 sm:py-20">
            <div className="max-w-3xl">
              <span className="eyebrow text-clay">{eyebrow}</span>
              <h1 className="mt-5 font-display text-4xl text-olive sm:text-5xl">
                {h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                {intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {cta("hero")}
                {badge && (
                  <span className="text-sm text-muted-foreground">{badge}</span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="container-prose py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {blocks.map((block) => (
              <article key={block.heading}>
                <h2 className="font-display text-2xl text-olive sm:text-3xl">
                  {block.heading}
                </h2>
                {block.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="mt-3 text-base leading-relaxed text-foreground/75"
                  >
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-0.5 text-sage">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border/60 bg-sand/30">
          <div className="container-prose py-14 sm:py-20">
            <h2 className="font-display text-2xl text-olive sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <dl className="mt-8 divide-y divide-border/60">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-5">
                  <dt className="font-medium text-olive">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container-prose py-14 sm:py-20">
          <div className="rounded-3xl border border-sage/25 bg-card p-8 shadow-sm sm:p-12">
            <h2 className="font-display text-2xl text-olive sm:text-3xl">
              ¿Empezamos?
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/75">
              Escríbeme por WhatsApp y te respondo personalmente con horarios
              disponibles y todo lo que necesitas saber antes de tu primera cita.
            </p>
            <div className="mt-7">{cta("final")}</div>
          </div>

          {related.length > 0 && (
            <nav className="mt-12" aria-label="Páginas relacionadas">
              <h2 className="eyebrow text-clay">También te puede interesar</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {related.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-foreground/80 transition hover:border-sage/50 hover:text-sage"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export function serviceSchema({
  name,
  description,
  pageUrl,
  serviceType,
}: {
  name: string;
  description: string;
  pageUrl: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: pageUrl,
    provider: { "@id": "https://susanawignall.com/#negocio" },
    areaServed: [
      { "@type": "City", name: "Playa del Carmen" },
      { "@type": "Country", name: "México" },
    ],
  };
}

export function faqSchema(faqs: SeoFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(name: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://susanawignall.com/",
      },
      { "@type": "ListItem", position: 2, name, item: pageUrl },
    ],
  };
}
