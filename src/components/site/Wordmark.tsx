import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-baseline font-medium tracking-tight text-foreground ${className}`}>
      <span className="text-lg">Nexus</span>
      <span className="ml-0.5 text-sm font-serif italic text-[color:var(--sage)]" style={{ position: "relative", top: "-0.45em" }}>
        2
      </span>
    </Link>
  );
}
