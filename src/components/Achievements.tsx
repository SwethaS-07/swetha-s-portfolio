import { Award, Code2, ScrollText, Trophy, type LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { achievements } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = { Code2, Award, Trophy, ScrollText };

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements"
      subtitle="Competitive programming practice, assessments and research recognition."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a) => {
          const Icon = icons[a.icon] ?? Award;
          return (
            <article
              key={a.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
