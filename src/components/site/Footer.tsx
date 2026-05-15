import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import { footerLinks } from "@/lib/content";
import { Wordmark } from "./Wordmark";
import { CurrencySwitcher } from "./CurrencySwitcher";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[color:var(--paper)]">
      <div className="container-1200 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <Wordmark />
            <p className="text-sm text-muted-foreground max-w-xs">
              The AI concierge that <span className="serif-em">makes your website</span> answer back.
            </p>
            <form className="flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--sage)]"
              />
              <button type="submit" className="rounded-full bg-[color:var(--sage)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]">
                Subscribe
              </button>
            </form>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading} className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{heading}</p>
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-foreground hover:text-[color:var(--sage)] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexus². Made with care by the Nexus² team.
          </p>
          <div className="flex items-center gap-4">
            <CurrencySwitcher showLabel={false} />
            <div className="flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
