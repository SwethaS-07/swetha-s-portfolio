import { Section } from "@/components/Section";
import { stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering that holds up in production">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I build backend-heavy applications in Java — Spring Boot services, well-structured REST
            APIs, Hibernate/JPA persistence over MySQL, and secure access with JWT and role-based
            permissions. My most recent system exposed 43+ endpoints over a 10-table schema.
          </p>
          <p>
            Alongside full-stack work, I explore applied AI and machine learning: SVM and neural
            network classifiers, gesture and pattern recognition, and the data preprocessing that
            decides whether a model is usable. My IoT sign language glove reached 75% recognition
            accuracy and was presented at ICASEM 2025.
          </p>
          <p>
            I care about automation — scripting away repetitive work, automating API checks, and
            keeping delivery smooth in Agile teams. Above all, I like problems that need careful
            thinking, which is why I keep 100+ LeetCode solutions behind me.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <p className="font-display text-3xl font-bold text-cyan">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
