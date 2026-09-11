import { useState } from "react";
import { Code2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please enter a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  const profiles = [
    { label: "GitHub", href: profile.github, Icon: Github, handle: "SwethaS-07" },
    { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, handle: "swetha-s" },
    { label: "LeetCode", href: profile.leetcode, Icon: Code2, handle: "swethas_07" },
  ];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    const { name, email, subject, message } = result.data;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    toast.success("Thanks! Your email draft is ready to send.");
    form.reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Find Me Online"
      subtitle="Open to software developer roles and collaboration. The fastest way to reach me is email."
    >
      <div className="grid gap-5 sm:grid-cols-3">
        {profiles.map(({ label, href, Icon, handle }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-cyan">
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{label}</span>
              <span className="block truncate font-mono text-xs text-muted-foreground">
                {handle}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <Mail className="h-5 w-5 shrink-0 text-cyan" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold">Email</span>
              <span className="block truncate text-sm text-muted-foreground">{profile.email}</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <MapPin className="h-5 w-5 shrink-0 text-cyan" />
            <span className="min-w-0">
              <span className="block text-sm font-semibold">Location</span>
              <span className="block text-sm text-muted-foreground">{profile.location}</span>
            </span>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" maxLength={100} placeholder="Your name" />
              {errors.name ? <p className="text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} placeholder="you@example.com" />
              {errors.email ? <p className="text-xs text-destructive">{errors.email}</p> : null}
            </div>
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" maxLength={150} placeholder="What's this about?" />
            {errors.subject ? <p className="text-xs text-destructive">{errors.subject}</p> : null}
          </div>
          <div className="mt-5 grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="Tell me a bit more..." />
            {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : null}
          </div>
          <Button type="submit" className="mt-6 w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
}
