import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";

const CERTIFICATE_IMAGE = "/Certificate/HCL%20GUVI%20Certification%20-%20Python.png";
const VERIFY_URL = "https://www.guvi.in/certificate?id=495I7g583wC3KuqOp";

const certifications = [
  {
    title: "Python Programming Zero to Hero: Complete Python Bootcamp",
    issuer: "GUVI Geek Networks / HCL",
    issued: "September 14, 2026",
    credentialId: "495I7g583wC3KuqOp",
    image: CERTIFICATE_IMAGE,
    verifyUrl: VERIFY_URL,
  },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Verified technical certifications and professional credentials."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {certifications.map((c) => (
          <article
            key={c.credentialId}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
          >
            <a
              href={c.image}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden border-b border-border"
            >
              <img
                src={c.image}
                alt={`${c.title} certificate issued by ${c.issuer}`}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover object-top opacity-90 transition duration-300 group-hover:opacity-100"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-background/80 px-3 py-1 font-mono text-[11px] text-cyan backdrop-blur">
                <BadgeCheck className="h-3.5 w-3.5" />
                Certified
              </span>
            </a>

            <div className="p-6">
              <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Issued by {c.issuer}</p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-xs text-cyan">
                <span>Issued {c.issued}</span>
                <span className="text-muted-foreground">ID: {c.credentialId}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={c.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
                >
                  <ExternalLink className="h-4 w-4 text-cyan" />
                  View Certificate
                </a>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                >
                  <ShieldCheck className="h-4 w-4 text-cyan" />
                  Verify Certificate
                </a>
              </div>
            </div>
          </article>
        })}
      </div>
    </Section>
  );
}
