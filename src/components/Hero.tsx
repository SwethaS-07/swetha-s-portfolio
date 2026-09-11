import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NodeField } from "@/components/NodeField";
import { profile } from "@/data/portfolio";
import profileImg from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Open to Software Developer Opportunities
          </span>

          <p className="mt-8 font-mono text-sm text-muted-foreground">Hi, I&apos;m Swetha S</p>
          <h1 className="mt-3 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
            Building Reliable Software with{" "}
            <span className="text-gradient">Java, AI &amp; Automation.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science Engineering graduate specializing in Java Full-Stack Development,
            backend systems, REST APIs, AI/ML, and automation.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={profile.resume} target="_blank" rel="noreferrer noopener">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-cyan hover:text-cyan">
              <a href="#contact">
                Let&apos;s Connect <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {profile.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <NodeField className="absolute -inset-10 h-[calc(100%+5rem)] w-[calc(100%+5rem)] opacity-70" />
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] rounded-full border border-primary/30 bg-card/60 p-3 backdrop-blur-sm glow-ring">
            <img
              src={profileImg}
              alt="Swetha S — Software Developer"
              width={1080}
              height={1440}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
          <div className="mt-4 flex justify-center gap-2 font-mono text-[11px] text-muted-foreground">
            <span className="rounded-full border border-border bg-surface px-2.5 py-1">Java</span>
            <span className="rounded-full border border-border bg-surface px-2.5 py-1">Spring Boot</span>
            <span className="rounded-full border border-border bg-surface px-2.5 py-1">AI/ML</span>
          </div>
        </div>
      </div>
    </section>
  );
}
