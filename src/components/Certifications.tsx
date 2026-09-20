import {
  Award,
  BadgeCheck,
  CodeXml,
  Download,
  ExternalLink,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { certificationCards, type CertificationCard } from "@/data/portfolio";

const NEW_TAB_HINT = "opens in a new tab";

const ICONS: Record<string, LucideIcon> = {
  BadgeCheck,
  Award,
  CodeXml,
};

function PlaceholderIcon({ name }: { name?: string | undefined }) {
  const Icon = (name && ICONS[name]) || ShieldCheck;
  return <Icon className="h-10 w-10 text-cyan" aria-hidden="true" />;
}

function CertImage({ card }: { card: CertificationCard }) {
  if (card.image) {
    return (
      <a
        href={card.image}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${card.title} certificate image in a new tab`}
        className="relative block overflow-hidden border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <img
          src={card.image}
          alt={`Certificate image: ${card.title}, issued by ${card.issuer}${card.issued ? ` on ${card.issued}` : ""}${card.credentialId ? `, credential ID ${card.credentialId}` : ""}. Select to open the full certificate in a new tab.`}
          loading="lazy"
          className="aspect-[16/9] w-full object-cover object-top opacity-90 transition duration-300 group-hover:opacity-100"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[11px] text-cyan backdrop-blur">
          <BadgeCheck className="h-3.5 w-3.5" />
          Certified
        </span>
      </a>
    );
  }

  return (
    <div className="relative flex aspect-[16/9] flex-col items-center justify-center gap-4 overflow-hidden border-b border-border bg-background/40">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:36px_36px]"
      />
      <span className="relative grid h-20 w-20 place-items-center rounded-full border border-primary/30 bg-primary/10 glow-ring">
        <PlaceholderIcon name={card.icon} />
      </span>
      <span className="relative inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[11px] text-cyan backdrop-blur">
        <BadgeCheck className="h-3.5 w-3.5" />
        Certified
      </span>
      <span className="relative font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {card.issuer} · Official Certificate
      </span>
    </div>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Verified technical certifications and professional credentials."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {certificationCards.map((c) => (
          <article
            key={c.title}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
          >
            <CertImage card={c} />

            <div className="p-6">
              <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Issued by {c.issuer}</p>

              {c.detail ? (
                <ul className="mt-4 space-y-1.5 font-mono text-xs text-cyan">
                  {c.detail.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-cyan">
                  {c.issued && <span>Issued {c.issued}</span>}
                  {c.credentialId && (
                    <span className="text-muted-foreground">ID: {c.credentialId}</span>
                  )}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {c.image && (
                  <>
                    <a
                      href={c.image}
                      download
                      aria-label={`Download the ${c.title} certificate image (PNG)`}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <Download className="h-4 w-4 text-cyan" />
                      Download Certificate
                    </a>
                    <a
                      href={c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the ${c.title} certificate image (opens in a new tab)`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <ExternalLink className="h-4 w-4 text-cyan" />
                      View Certificate
                      <span className="sr-only">({NEW_TAB_HINT})</span>
                    </a>
                  </>
                )}
                {c.verifyUrl && (
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify the ${c.title} certificate on the issuer's website (opens in a new tab)`}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <ShieldCheck className="h-4 w-4 text-cyan" />
                    Verify Certificate
                    <ExternalLink className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
                    <span className="sr-only">({NEW_TAB_HINT})</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
