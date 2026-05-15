import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BrowserFrame } from "@/components/site/Decor";
import { Typewriter } from "@/components/site/Typewriter";
import type { Vertical } from "@/lib/content";

export function VerticalPage({ v }: { v: Vertical }) {
  return (
    <>
      <section className="container-1200 py-20 md:py-24 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="pill pill-sage">Nexus for {v.name}</span>
          <h1 className="text-4xl md:text-5xl tracking-tight leading-[1.05]">
            {v.blurb.split(" ").slice(0, -2).join(" ")} <span className="serif-em">{v.blurb.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            From day-one questions to deep workflows, Nexi guides every visitor to the right answer in one prompt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="btn-ghost">Live walkthrough</Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="card-soft p-3" style={{ background: `linear-gradient(135deg, ${v.tint.from}, ${v.tint.to})` }}>
            <BrowserFrame url={`${v.slug}.example.com`}>
              <div className="p-5 bg-[color:var(--card)] space-y-3">
                <div className="h-8 rounded bg-secondary w-1/2" />
                <div className="grid grid-cols-3 gap-2">
                  {[0,1,2].map(i => <div key={i} className="aspect-video rounded bg-secondary" />)}
                </div>
                <div className="card-soft p-3">
                  <p className="text-xs text-muted-foreground">Nexi</p>
                  <p className="text-sm mt-1"><Typewriter text={v.prompts[0]} /></p>
                </div>
              </div>
            </BrowserFrame>
          </div>
        </div>
      </section>

      <section className="container-1200 py-16">
        <Reveal>
          <h2 className="text-2xl md:text-3xl tracking-tight max-w-xl">
            Built for <span className="serif-em">the {v.name.toLowerCase()} stack.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {v.audiences.map((a) => (
            <Reveal key={a.name}>
              <div className="card-soft p-6 h-full" style={{ background: `linear-gradient(135deg, ${v.tint.from}, transparent)` }}>
                <p className="text-sm font-medium">{a.name}</p>
                <ul className="mt-4 space-y-2">
                  {a.lines.map((l) => (
                    <li key={l} className="text-sm text-foreground/80">"{l}"</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-1200 py-16">
        <p className="pill pill-sage mb-4">Integrates with</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {v.integrations.map((it) => (
            <div key={it} className="card-soft p-4 text-center text-sm font-serif italic">{it}</div>
          ))}
        </div>
      </section>

      <section className="container-1200 py-16 grid gap-4 md:grid-cols-3">
        {v.metrics.map((m) => (
          <Reveal key={m.label}>
            <div className="card-soft p-7">
              <p className="font-serif italic text-5xl">{m.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-1200 py-16">
        <div className="card-soft p-8 grid gap-6 md:grid-cols-12 items-center">
          <div className="md:col-span-3 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-[color:var(--sage)]/30 flex items-center justify-center font-medium text-xl">{v.name[0]}</div>
          </div>
          <div className="md:col-span-9">
            <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">Case study</p>
            <blockquote className="mt-2 font-serif italic text-2xl leading-snug">
              "We launched Nexi on a Friday. By Monday, our team stopped getting the same five questions every week."
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">A {v.name.toLowerCase()} pilot, 2025.</p>
          </div>
        </div>
      </section>

      <section className="container-1200 py-16">
        <div className="flex flex-wrap gap-2">
          {v.compliance.map((c) => (
            <span key={c} className="pill pill-sage"><Check className="h-3 w-3" /> {c}</span>
          ))}
        </div>
      </section>

      <section className="container-1200 py-24 text-center">
        <h2 className="text-3xl md:text-4xl tracking-tight">
          Bring Nexi to <span className="serif-em">your {v.name.toLowerCase()} team.</span>
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </section>
    </>
  );
}
