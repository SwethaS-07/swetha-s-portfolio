import { Briefcase } from "lucide-react";
import { Section } from "@/components/Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built things"
      subtitle="Internship work on production-facing Java backends, delivered in Agile teams."
    >
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[2.55rem] grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background text-cyan sm:-left-[3.05rem]">
              <Briefcase className="h-4 w-4" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-cyan">{job.company}</p>
                </div>
                <span className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
