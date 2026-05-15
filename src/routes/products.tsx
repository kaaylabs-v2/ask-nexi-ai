import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Copy, Link2, Sliders, LineChart } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { BrowserFrame, GradientBlobs } from "@/components/site/Decor";
import { Typewriter } from "@/components/site/Typewriter";
import { brand, verticals } from "@/lib/content";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Nexus²" },
      { name: "description", content: "One platform. Four specialized agents. Pick the Nexus² built for the way your visitors actually behave." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <Hero />
      <Verticals />
      <Features />
      <Demo />
      <Steps />
      <Security />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="container-1200 py-20 md:py-28 text-center">
      <Reveal>
        <p className="pill pill-sage mb-4 mx-auto">Products</p>
        <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
          One platform. <span className="serif-em">Four specialized agents.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Nexus² adapts to your industry. Pick the agent built for the way your visitors actually behave.
        </p>
      </Reveal>
    </section>
  );
}

function Verticals() {
  const list = Object.values(verticals);
  return (
    <section className="container-1200 pb-12">
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((v) => (
          <Reveal key={v.slug}>
            <div
              className={`card-soft p-7 h-full relative overflow-hidden group transition-transform hover:-translate-y-1 ${!v.available ? "opacity-95" : ""}`}
              style={{ background: `linear-gradient(135deg, ${v.tint.from}, ${v.tint.to})` }}
            >
              <div className="flex items-center justify-between">
                {v.available ? (
                  <span className="pill pill-sage"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--sage)] animate-pulse" /> Live</span>
                ) : (
                  <span className="pill">Coming soon</span>
                )}
                <p className="text-xs text-muted-foreground">Nexus for</p>
              </div>
              <h3 className="mt-6 font-serif italic text-3xl md:text-4xl">{v.name}</h3>
              <p className="mt-3 text-sm text-foreground/80 max-w-sm">{v.blurb}</p>
              <div className="mt-6 card-soft p-3 bg-[color:var(--card)]">
                <p className="text-xs text-muted-foreground">Sample prompt</p>
                <p className="mt-1 text-sm">"{v.prompts[0]}"</p>
              </div>
              <div className="mt-6">
                {v.available ? (
                  <Link to={`/products/${v.slug}` as "/products/education"} className="btn-primary text-sm">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <Link to={`/products/${v.slug}` as "/products/education"} className="btn-ghost text-sm">
                    Join waitlist <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const blocks = [
    {
      kicker: "Conversational",
      title: "A real conversation, not a search box.",
      body: "Suggested chips appear as visitors type. Memory of the session keeps the answer relevant.",
      visual: (
        <div className="card-soft p-4 space-y-2">
          <div className="rounded-2xl bg-[color:var(--ink)] text-[color:var(--paper)] text-xs px-3 py-2 max-w-[80%] ml-auto">Where do I track my order?</div>
          <div className="rounded-2xl bg-secondary text-xs px-3 py-2 max-w-[85%]">Order #4821 ships tomorrow. Want me to send tracking by email?</div>
          <div className="flex gap-2 pt-1"><span className="pill text-[10px]">Yes please</span><span className="pill text-[10px]">Change address</span></div>
        </div>
      ),
    },
    {
      kicker: "One-line embed",
      title: "Auto-navigation from the moment it loads.",
      body: "Visitors ask in plain language. Nexi opens the right page, scrolls to the right section, applies the right filter.",
      visual: (
        <div className="card-soft p-4 bg-[color:var(--paper)]">
          <code className="text-xs font-mono">{brand.embedSnippet}</code>
        </div>
      ),
    },
    {
      kicker: "Insights",
      title: "Custom branding + conversation insights.",
      body: "Match your colors and voice in minutes. Ship dashboards your team actually opens.",
      visual: (
        <div className="card-soft p-4 grid grid-cols-3 gap-3">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Resolved</p>
            <p className="font-serif italic text-3xl">82%</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">CSAT</p>
            <p className="font-serif italic text-3xl">4.8</p>
          </div>
          <div className="col-span-3 h-12 rounded-md gradient-sunset" />
        </div>
      ),
    },
  ];
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Inside the product</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Everything you need for <span className="serif-em">a perfect experience.</span>
        </h2>
      </Reveal>
      <div className="mt-12 space-y-12">
        {blocks.map((b, i) => (
          <Reveal key={b.title}>
            <div className={`grid gap-8 md:grid-cols-2 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">{b.kicker}</p>
                <h3 className="mt-2 text-2xl md:text-3xl tracking-tight">{b.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">{b.body}</p>
              </div>
              <div>{b.visual}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-2">
        {["Privacy-first", "No cookies", "No tracking", "GDPR-ready"].map((c) => (
          <span key={c} className="pill pill-sage"><Check className="h-3 w-3" /> {c}</span>
        ))}
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section className="relative overflow-hidden">
      <GradientBlobs variant="sage" />
      <div className="container-1200 py-24 relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
            Watch citizens find the right form. <span className="serif-em">Instantly.</span>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-4xl mx-auto">
          <BrowserFrame url="city.gov">
            <div className="p-6 bg-[color:var(--card)] grid gap-3">
              <div className="h-10 rounded-md bg-secondary w-1/3" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-24 rounded-md bg-secondary" />
                <div className="h-24 rounded-md bg-secondary ring-2 ring-[color:var(--sage)]" />
                <div className="h-24 rounded-md bg-secondary" />
              </div>
              <div className="card-soft p-3 max-w-sm">
                <p className="text-xs text-muted-foreground">Nexi</p>
                <p className="text-sm mt-1"><Typewriter text="I need to renew my business license" /></p>
                <span className="pill pill-sage text-[10px] mt-2">Step 1 of 3</span>
              </div>
            </div>
          </BrowserFrame>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-muted-foreground">
          <p>Natural language search</p>
          <p>Instant form discovery</p>
          <p>Guided navigation</p>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "01", icon: Link2, title: "Connect Sources", body: "Link JIRA, MySQL, S3, and more." },
    { n: "02", icon: Sliders, title: "Configure Workspace", body: "Choose models, set permissions." },
    { n: "03", icon: LineChart, title: "Deploy & Monitor", body: "Embed, share, and track ROI." },
  ];
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Go live</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Three steps. <span className="serif-em">Then ship.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3 relative">
        <div aria-hidden className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-border" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative card-soft p-6 text-center">
              <p className="font-serif italic text-5xl text-[color:var(--sage)]">{s.n}</p>
              <s.icon className="h-5 w-5 mx-auto mt-4 text-foreground" />
              <h3 className="mt-3 text-base font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Security() {
  const items = ["Data isolation per tenant", "Zero cross-tenant leakage", "Granular access controls", "Audit logs & activity tracking", "Enterprise SSO ready", "API key per connector"];
  return (
    <section className="container-1200 py-24">
      <h2 className="text-2xl md:text-3xl tracking-tight max-w-xl">
        Built for <span className="serif-em">security-conscious teams.</span>
      </h2>
      <div className="mt-8 flex flex-wrap gap-2">
        {items.map((c) => (
          <span key={c} className="pill pill-sage"><Check className="h-3 w-3" /> {c}</span>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-1200 py-24 text-center">
      <h2 className="text-3xl md:text-4xl tracking-tight">
        Pick the agent <span className="serif-em">built for you.</span>
      </h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/pricing" className="btn-ghost">See pricing</Link>
      </div>
    </section>
  );
}
