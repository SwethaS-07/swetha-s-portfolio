import { Code2, Github, Linkedin } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export function Footer() {
  const socials = [
    { href: profile.github, label: "GitHub", Icon: Github },
    { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.leetcode, label: "LeetCode", Icon: Code2 },
  ];

  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.25em]">
            SWETHA<span className="text-cyan"> S</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{profile.role}</p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-cyan"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-border px-5 pt-6 sm:px-8">
        <p className="text-xs text-muted-foreground">© 2026 Swetha S. All rights reserved.</p>
      </div>
    </footer>
  );
}
