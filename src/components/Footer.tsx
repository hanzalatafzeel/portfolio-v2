import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { footerNote, profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 sm:flex-row">
        <p className="text-sm text-mute">
          © {year} <span className="text-fog">{profile.name}</span>. All rights reserved.
        </p>
        <p className="font-mono text-xs text-mute">{footerNote}</p>
        <div className="flex items-center gap-2">
          {[
            { href: profile.github, label: "GitHub", Icon: GithubIcon },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="glass flex h-9 w-9 items-center justify-center rounded-lg text-mist transition-colors hover:text-neon-cyan"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}