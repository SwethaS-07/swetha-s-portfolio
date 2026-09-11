import { Bot, BrainCircuit, Plug, type LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { aiPillars } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = { BrainCircuit, Bot, Plug };

export function AiAutomation() {
  return (
    <Section
      id="ai-automation"
      eyebrow="Focus Area"
      title="AI & Automation"
      subtitle="Exploring practical AI integrations, intelligent automation workflows, and software systems that combine backend engineering with AI capabilities."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {aiPillars.map((pillar) => {
          const Icon = icons[pillar.icon] ?? Bot;
          return (
            <article
              key={pillar.title}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
              <span className="relative grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-base font-semibold">{pillar.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {pillar.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
