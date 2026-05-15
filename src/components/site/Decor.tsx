import type { ReactNode } from "react";

export function GradientBlobs({ variant = "sunset" }: { variant?: "sunset" | "sage" }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="blob"
        style={{
          width: 520, height: 520, top: -160, right: -120,
          background: variant === "sunset"
            ? "radial-gradient(circle at 30% 30%, oklch(from var(--peach) l c h / 0.7), transparent 70%)"
            : "radial-gradient(circle at 30% 30%, oklch(from var(--sage) l c h / 0.55), transparent 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 460, height: 460, top: 80, left: -120,
          background: "radial-gradient(circle at 60% 40%, oklch(from var(--lilac) l c h / 0.55), transparent 70%)",
        }}
      />
      <div
        className="blob"
        style={{
          width: 400, height: 400, bottom: -120, right: 60,
          background: "radial-gradient(circle at 50% 50%, oklch(from var(--coral) l c h / 0.45), transparent 70%)",
        }}
      />
    </div>
  );
}

export function BrowserFrame({ children, url = "shop.example.com" }: { children: ReactNode; url?: string }) {
  return (
    <div className="card-soft overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2 bg-secondary/60">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--coral)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--amber-warm)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--sage)]/70" />
        </div>
        <div className="mx-auto text-[11px] text-muted-foreground font-mono">{url}</div>
      </div>
      {children}
    </div>
  );
}
