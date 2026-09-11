import {
  Binary,
  BrainCircuit,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  Code2,
  Server,
  Layout,
  BrainCircuit,
  Database,
  Wrench,
  Binary,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical Skills"
      subtitle="The tools and concepts I work with day to day, grouped by where they sit in a system."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <article
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="truncate text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {item}
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
