import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border/60 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p> : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
