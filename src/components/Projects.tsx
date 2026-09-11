import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/portfolio";

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Projects"
      subtitle="Systems I designed and built end to end — open a project for the problem, architecture and measurable results."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
            <p className="mt-4 inline-flex w-fit rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-cyan">
              {p.highlight}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
              <Button size="sm" onClick={() => setActive(p)}>
                View Details <ArrowUpRight className="h-4 w-4" />
              </Button>
              {p.github ? (
                <Button asChild size="sm" variant="secondary">
                  <a href={p.github} target="_blank" rel="noreferrer noopener">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              ) : null}
              {p.demo ? (
                <Button asChild size="sm" variant="ghost">
                  <a href={p.demo} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{active.title}</DialogTitle>
                <DialogDescription>{active.tagline}</DialogDescription>
              </DialogHeader>

              <ul className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-2 space-y-6">
                <DetailBlock title="Problem" items={[active.problem]} />
                <DetailBlock title="Solution" items={[active.solution]} />

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
                    Architecture Flow
                  </h4>
                  <ol className="mt-3 space-y-2">
                    {active.architecture.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-muted-foreground"
                      >
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-primary/40 bg-primary/10 font-mono text-xs text-cyan">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <DetailBlock title="Technical Implementation" items={active.implementation} />
                <DetailBlock title="Key Features" items={active.features} />
                <DetailBlock title="Measurable Results" items={active.results} />
              </div>

              {active.github ? (
                <div className="pt-2">
                  <Button asChild size="sm" variant="secondary">
                    <a href={active.github} target="_blank" rel="noreferrer noopener">
                      <Github className="h-4 w-4" /> View on GitHub
                    </a>
                  </Button>
                </div>
              ) : null}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
