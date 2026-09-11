import { BadgeCheck, GraduationCap } from "lucide-react";
import { Section } from "@/components/Section";
import { certifications, education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education & Certifications">
      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((e) => (
          <article key={e.title} className="rounded-xl border border-border bg-card p-6">
            <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{e.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
            <p className="mt-3 font-mono text-xs text-cyan">{e.meta}</p>
          </article>
        ))}

        <article className="rounded-xl border border-border bg-card p-6">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
            <BadgeCheck className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-base font-semibold">Certifications</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {certifications.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
