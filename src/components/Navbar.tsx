import { useEffect, useState } from "react";
import { Download, Github, Linkedin, Menu, Code2, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.leetcode, label: "LeetCode", Icon: Code2 },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <a href="#home" className="min-w-0 truncate font-display text-sm font-bold tracking-[0.25em]">
          SWETHA<span className="text-cyan"> S</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-2 hidden items-center gap-1 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-cyan"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>

          <Button asChild size="sm" className="ml-1 hidden shrink-0 sm:inline-flex">
            <a href={profile.resume} target="_blank" rel="noreferrer noopener">
              <Download className="h-4 w-4" /> Resume
            </a>
          </Button>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="mx-5 mt-3 rounded-xl border border-border bg-card/95 p-3 backdrop-blur-xl sm:mx-8 xl:hidden">
          <ul className="grid gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground hover:text-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <Button asChild size="sm" className="ml-auto">
              <a href={profile.resume} target="_blank" rel="noreferrer noopener">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
