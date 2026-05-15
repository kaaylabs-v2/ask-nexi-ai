import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowDown, Clipboard, ScanEye, LineChart, Check, Copy,
  ShieldCheck, Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  brand, heroDemo, howItWorks, platforms, stats, testimonials, trustedLogos,
  faqs, pricingTiers,
} from "@/lib/content";
import { BrowserFrame, GradientBlobs } from "@/components/site/Decor";
import { Typewriter } from "@/components/site/Typewriter";
import { Reveal } from "@/components/site/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCurrency } from "@/components/site/CurrencyContext";
import { plans } from "@/content/pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus² — The AI concierge that makes your website answer back" },
      { name: "description", content: "Nexi reads your site, learns your brand, and guides every visitor — by chat or voice — to exactly what they need." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <HowItWorks />
      <Showcase />
      <Bento />
      <Outcomes />
      <Privacy />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  const [phase, setPhase] = useState<"user" | "agent" | "done">("user");
  return (
    <section className="relative overflow-hidden">
      <GradientBlobs />
      <div className="container-1200 relative grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
            The AI concierge that <span className="serif-em">makes your website</span> answer back.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Nexi reads your site, learns your brand, and guides every visitor — by chat or voice — to exactly what they need. 5-minute install. Zero tracking.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
            <a href="#showcase" className="btn-ghost">See it live <ArrowDown className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <BrowserFrame url="oakandfern.shop">
              <div className="relative grid grid-cols-3 gap-3 p-5 bg-[color:var(--card)]">
                {[0,1,2,3,4,5].map((i) => (
                  <div key={i} className="aspect-[4/5] rounded-md gradient-sunset opacity-80" style={{ filter: `hue-rotate(${i*22}deg)` }} />
                ))}
                <div className="absolute bottom-3 right-3 w-[260px] card-soft p-3 space-y-2 bg-[color:var(--paper)]">
                  <div className="flex items-center gap-2 pb-2 border-b border-border">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--sage)] animate-pulse" />
                    <p className="text-xs font-medium">Nexi</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="rounded-2xl bg-[color:var(--ink)] text-[color:var(--paper)] text-xs px-3 py-2 max-w-[80%]">
                      {phase === "user" ? <Typewriter text={heroDemo.user} onDone={() => setTimeout(() => setPhase("agent"), 400)} /> : heroDemo.user}
                    </div>
                  </div>
                  {phase !== "user" && (
                    <div className="flex justify-start">
                      <div className="rounded-2xl bg-secondary text-xs px-3 py-2 max-w-[85%]">
                        {phase === "agent" ? <Typewriter text={heroDemo.agent} onDone={() => setPhase("done")} /> : heroDemo.agent}
                      </div>
                    </div>
                  )}
                  {phase === "done" && (
                    <button onClick={() => setPhase("user")} className="pill pill-sage text-[10px]">Open size guide →</button>
                  )}
                </div>
              </div>
            </BrowserFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number, start: number;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.floor(to * (0.2 + 0.8 * p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n.toLocaleString()}</span>;
}

function Trusted() {
  return (
    <section className="border-y border-border bg-[color:var(--card)]/40">
      <div className="container-1200 py-10 grid gap-6 md:grid-cols-12 items-center">
        <p className="md:col-span-3 text-xs uppercase tracking-widest text-muted-foreground">
          Trusted on real sites
        </p>
        <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3 opacity-70">
          {trustedLogos.map((l) => (
            <span key={l} className="text-sm font-serif italic text-foreground/80">{l}</span>
          ))}
        </div>
        <p className="md:col-span-3 text-sm text-muted-foreground">
          + <Counter to={1247} /> sites using Nexi today
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const icons = { Clipboard, ScanEye, LineChart };
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">How it works</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Three steps. <span className="serif-em">No engineers required.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {howItWorks.map((s, i) => {
          const Icon = icons[s.icon as keyof typeof icons];
          return (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="card-soft p-7 h-full relative overflow-hidden">
                <span className="font-serif italic text-6xl text-[color:var(--sage)]/40 absolute top-2 right-4">{s.n}</span>
                <Icon className="h-6 w-6 text-[color:var(--sage)]" />
                <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Showcase</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          See Nexi <span className="serif-em">in action.</span>
        </h2>
      </Reveal>
      <div className="mt-12 card-soft p-3 sm:p-6 gradient-sunset">
        <div className="card-soft p-4 sm:p-6 bg-[color:var(--card)]">
          <Tabs defaultValue="chat">
            <TabsList className="bg-secondary">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="voice">Voice</TabsTrigger>
              <TabsTrigger value="nav">Smart Navigation</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="mt-6">
              <ChatDemo />
            </TabsContent>
            <TabsContent value="voice" className="mt-6">
              <VoiceDemo />
            </TabsContent>
            <TabsContent value="nav" className="mt-6">
              <NavDemo />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function ChatDemo() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        {[
          { from: "user", text: "I need a gift for my mom's birthday under $50." },
          { from: "nexi", text: "Got it. Here are three best-sellers in that range — want gift wrap?" },
          { from: "user", text: "Yes please." },
          { from: "nexi", text: "Added. I'll route you to checkout with free shipping applied." },
        ].map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`rounded-2xl px-3 py-2 text-sm max-w-[85%] ${m.from === "user" ? "bg-[color:var(--ink)] text-[color:var(--paper)]" : "bg-secondary"}`}>
              {m.text}
            </div>
          </motion.div>
        ))}
        <div className="flex flex-wrap gap-2 pt-2">
          {["Gift wrap?", "Track my order", "Compare two items"].map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[0,1,2,3,4,5].map((i) => (
          <div key={i} className="aspect-square rounded-md gradient-sunset" style={{ filter: `hue-rotate(${i*30}deg)` }} />
        ))}
      </div>
    </div>
  );
}

function VoiceDemo() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <div className="relative h-56 w-56">
          {[0,1,2].map((i) => (
            <motion.div key={i} className="absolute inset-0 rounded-full border border-[color:var(--sage)]"
              animate={{ scale: [1, 1.3 + i*0.15], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} />
          ))}
          <div className="absolute inset-6 rounded-full bg-[color:var(--sage)]/15 flex items-center justify-center">
            <div className="flex items-end gap-1 h-12">
              {[12,18,28,22,34,18,12,22,30,16].map((h, i) => (
                <motion.span key={i} className="w-1 rounded-full bg-[color:var(--sage)]"
                  animate={{ height: [h, h+12, h] }} transition={{ duration: 0.8, repeat: Infinity, delay: i*0.05 }}
                  style={{ height: h }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <p className="pill pill-sage">Live transcript</p>
        <p><span className="text-muted-foreground">You:</span> Where can I find your sustainability report?</p>
        <p><span className="text-muted-foreground">Nexi:</span> Page two of our annual review — sending you there now.</p>
        <p><span className="text-muted-foreground">You:</span> And the carbon offset calculator?</p>
        <p><span className="text-muted-foreground">Nexi:</span> One step deeper. I'll scroll to the section for you.</p>
      </div>
    </div>
  );
}

function NavDemo() {
  const path = ["Home", "Outdoor", "Tents", "2-person", "Apex Lite 2P"];
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {path.map((n, i) => (
        <motion.div key={n} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ delay: i * 0.12 }} className={`card-soft p-4 ${i === path.length-1 ? "border-[color:var(--sage)]" : ""}`}>
          <p className="text-xs text-muted-foreground">Step {i+1}</p>
          <p className="text-sm font-medium mt-1">{n}</p>
          {i === path.length-1 && <p className="text-xs text-[color:var(--sage)] mt-2">← Nexi landed the visitor here</p>}
        </motion.div>
      ))}
    </div>
  );
}

function Bento() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(brand.embedSnippet); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Anywhere</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Works on <span className="serif-em">any platform.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2 card-soft p-8 gradient-sage relative overflow-hidden">
          <p className="pill pill-sage">Universal</p>
          <h3 className="mt-4 font-serif italic text-3xl md:text-4xl text-foreground">Any website with HTML.</h3>
          <p className="mt-3 text-sm text-foreground/80 max-w-md">If your visitors can see it in a browser, Nexi can read it. One snippet, zero refactors.</p>
          <div className="mt-8 card-soft p-3 flex items-center gap-3 bg-[color:var(--card)]">
            <code className="flex-1 text-xs font-mono truncate">{brand.embedSnippet}</code>
            <button onClick={copy} className="btn-ghost text-xs py-1.5 px-3">
              {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
            </button>
          </div>
        </div>
        {platforms.slice(0, 6).map((p) => (
          <div key={p.name} className="card-soft p-5 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0" style={{ background: p.color, opacity: 0.08 }} />
            <div className="relative">
              <div className="h-8 w-8 rounded-md flex items-center justify-center text-white text-xs font-bold" style={{ background: p.color }}>
                {p.name[0]}
              </div>
              <p className="mt-4 text-sm font-medium">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Outcomes</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          The numbers <span className="serif-em">speak softly.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="card-soft p-8">
              <p className="font-serif italic text-6xl md:text-7xl text-foreground">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="card-soft p-6 h-full">
              <blockquote className="font-serif italic text-lg leading-snug text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[color:var(--sage)]/30 flex items-center justify-center text-xs font-medium">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Privacy() {
  const badges = ["GDPR-ready", "CCPA-ready", "SOC-2 in progress", "EU hosting", "Zero tracking", "No PII stored"];
  return (
    <section className="container-1200 py-24">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className="pill pill-sage mb-4"><ShieldCheck className="h-3 w-3" /> Privacy first</p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Built with privacy <span className="serif-em">first.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Nexi never tracks visitors and never stores PII. Pick EU-only hosting. Bring your own model. Audit logs on request.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {badges.map((b) => (
            <span key={b} className="pill pill-sage"><Check className="h-3 w-3" /> {b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { format } = useCurrency();
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Pricing</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Simple pricing. <span className="serif-em">Start free.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pricingTiers.map((t) => {
          const priceKey = t.name === "Trial" ? "trial" : t.name === "Pro" ? "pro" : "enterprise";
          const priceLabel =
            priceKey === "trial"
              ? format(plans.trial, { freeLabel: "Free" })
              : priceKey === "pro"
              ? format(plans.pro)
              : format(plans.enterprise, { customLabel: "Custom" });
          return (
            <div key={t.name} className={`card-soft p-7 flex flex-col ${t.popular ? "ring-1 ring-[color:var(--sage)] -translate-y-2" : ""}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t.name}</p>
                {t.popular && <span className="pill pill-sage">Most popular</span>}
              </div>
              <p className="mt-4 font-serif italic text-4xl">{priceLabel}<span className="text-sm not-italic font-sans text-muted-foreground"> · {t.period}</span></p>
              <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
              <ul className="mt-6 space-y-2 flex-1">
                {t.features.slice(0, 5).map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2"><Check className="h-4 w-4 text-[color:var(--sage)] mt-0.5 shrink-0" /> {f}</li>
                ))}
              </ul>
              <Link to={t.cta.href as "/demo"} className={`mt-6 ${t.cta.variant === "primary" ? "btn-primary" : "btn-ghost"} justify-center`}>
                {t.cta.label}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <Link to="/pricing" className="text-sm text-foreground hover:text-[color:var(--sage)]">See full pricing →</Link>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="container-1200 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="pill pill-sage mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl tracking-tight">
            Things teams ask <span className="serif-em">before they sign up.</span>
          </h2>
        </div>
        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="card-soft px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`q${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.035] flex flex-wrap items-center justify-center text-foreground select-none pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="font-serif italic text-6xl mx-6 my-3">Nexus²</span>
        ))}
      </div>
      <div className="container-1200 py-28 relative text-center">
        <h2 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
          Give every visitor <span className="serif-em">their own guide.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Five minutes to install. Lifetime to be remembered as the team that fixed the website.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="btn-ghost">Talk to sales</Link>
        </div>
      </div>
    </section>
  );
}
