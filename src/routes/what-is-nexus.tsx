import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight, Plug, Compass, Database, Brain, ShoppingCart, FolderKanban,
  Search, ShieldCheck, Server, Lock, KeyRound, ScrollText, Globe, Copy, Check,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Typewriter } from "@/components/site/Typewriter";
import { brand, verticals } from "@/lib/content";

export const Route = createFileRoute("/what-is-nexus")({
  head: () => ({
    meta: [
      { title: "What is Nexus² — your website, but it answers back" },
      { name: "description", content: "Nexus² is an AI concierge that reads your site and guides every visitor to the right page, product, or answer." },
    ],
  }),
  component: WhatIs,
});

const heroPrompts = [
  "Show me all the new holiday products under $50.",
  "Where can I find my order history?",
  "Take me to the consultant resources page.",
  "Compare these two items for me.",
];

function WhatIs() {
  return (
    <>
      <Hero />
      <Features />
      <Departments />
      <Industries />
      <Customizable />
      <Enterprise />
      <CTA />
    </>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % heroPrompts.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container-1200 py-20 md:py-28 text-center">
      <Reveal>
        <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
          Your website, <span className="serif-em">but it answers back.</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Today's websites are packed with info. Visitors don't want to click — they want answers.
        </p>
      </Reveal>
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="card-soft px-6 py-8 min-h-[140px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}>
              <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-snug">
                <Typewriter text={heroPrompts[i]} speed={26} />
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">…and Nexus² does it.</p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
        <a href="#features" className="btn-ghost">See how it works</a>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Plug, kicker: "Zero engineering", title: "Connects directly to your website", body: "Drop in the widget. Nexi crawls products, menus, categories, pages, and URLs — and stays in sync." },
    { icon: Compass, kicker: "The #1 differentiator", title: "Helps users navigate", body: "Take visitors to any page, highlight sections, deep-link to products, filter, compare, and guide step-by-step." },
    { icon: Database, kicker: "Beyond your website", title: "Connects all your data sources", body: "JIRA, Google Workspace, SQL, S3, PDFs, docs, CRMs, catalogs — one brain for everything your business knows." },
    { icon: Brain, kicker: "Modern AI engine", title: "Powered by advanced RAG + multi-agent AI", body: "Hybrid search, intelligent chunking, multi-agent workflows, real-time connectors, automatic citations." },
  ];
  return (
    <section id="features" className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">What Nexus² does</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Four things, <span className="serif-em">done well.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="card-soft p-7 h-full group">
              <div className="h-1 w-12 rounded-full gradient-sunset mb-5" />
              <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">{it.kicker}</p>
              <h3 className="mt-2 text-xl font-medium flex items-center gap-2">
                <it.icon className="h-5 w-5 text-foreground" /> {it.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Departments() {
  return (
    <section className="container-1200 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="card-soft p-8 gradient-sunset">
          <ShoppingCart className="h-8 w-8 text-foreground" />
          <h3 className="mt-4 font-serif italic text-3xl">For Customers</h3>
          <p className="mt-2 text-sm text-foreground/80">Where visitors meet your business.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Product search", "Guided shopping", "Support questions", "Order questions", "Account help", "Site navigation"].map((c) => (
              <span key={c} className="pill bg-[color:var(--card)]">{c}</span>
            ))}
          </div>
        </div>
        <div className="card-soft p-8 gradient-sage">
          <FolderKanban className="h-8 w-8 text-foreground" />
          <h3 className="mt-4 font-serif italic text-3xl">For Internal Teams</h3>
          <p className="mt-2 text-sm text-foreground/80">Where work gets unblocked.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Search JIRA / Sheets", "Query databases", "Retrieve documents", "Automate workflows", "Answer process questions"].map((c) => (
              <span key={c} className="pill bg-[color:var(--card)]">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const list = Object.values(verticals);
  const [active, setActive] = useState(list[0].slug);
  const cur = list.find((v) => v.slug === active)!;
  useEffect(() => {
    const t = setInterval(() => {
      setActive((s) => {
        const i = list.findIndex((v) => v.slug === s);
        return list[(i + 1) % list.length].slug;
      });
    }, 6000);
    return () => clearInterval(t);
  }, [list]);
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Industries</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Built for <span className="serif-em">every industry.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-12">
        <ul className="md:col-span-4 space-y-2">
          {list.map((v) => (
            <li key={v.slug}>
              <button
                onClick={() => setActive(v.slug)}
                className={`w-full text-left card-soft p-4 transition-all ${active === v.slug ? "border-[color:var(--sage)]" : "opacity-70 hover:opacity-100"}`}
              >
                <p className="text-sm font-medium">{v.name}</p>
                <p className="text-xs text-muted-foreground">{v.blurb}</p>
              </button>
            </li>
          ))}
        </ul>
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div key={cur.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }} className="card-soft p-6">
              <div className="space-y-3">
                {cur.prompts.map((p, i) => (
                  <motion.div key={p} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
                    <div className="rounded-2xl bg-secondary px-3 py-2 text-sm inline-block">{p}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground mr-2">Use cases:</span>
                {cur.audiences.flatMap(a => a.lines).slice(0, 4).map((u) => (
                  <span key={u} className="pill">{u}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Customizable() {
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Customization</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          Fully <span className="serif-em">customizable.</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-6 md:col-span-2 md:row-span-2 gradient-sage">
          <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">Model picker</p>
          <h3 className="mt-2 text-xl font-medium">Bring your own model.</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { n: "Claude", sel: true },
              { n: "GPT-4", sel: false },
              { n: "Llama", sel: false },
              { n: "Titan", sel: false },
            ].map((m) => (
              <div key={m.n} className={`card-soft p-4 text-center ${m.sel ? "border-[color:var(--sage)] bg-[color:var(--card)]" : "opacity-60"}`}>
                <p className="text-sm font-medium">{m.n}</p>
                {m.sel && <span className="pill pill-sage mt-2 text-[10px]">Selected</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">UI</p>
          <h3 className="mt-2 text-base font-medium">Personalization</h3>
          <div className="mt-4 flex gap-2">
            {["#6FAE7E", "#0E0E10", "#E8A87C", "#A78BFA"].map((c) => (
              <span key={c} className="h-6 w-6 rounded-full border border-border" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="card-soft p-6">
          <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">Access</p>
          <h3 className="mt-2 text-base font-medium">Role-based controls</h3>
          <div className="mt-4 space-y-2">
            {["Admin", "Editor", "Viewer"].map((r, i) => (
              <div key={r} className="flex items-center justify-between text-sm">
                <span>{r}</span>
                <span className={`pill ${i === 0 ? "pill-sage" : ""}`}>{i === 0 ? "On" : "Off"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["Custom instructions", "Analytics & insights", "Role-based permissions"].map((c) => (
          <span key={c} className="pill">{c}</span>
        ))}
      </div>
    </section>
  );
}

function Enterprise() {
  const items = [
    { icon: ShieldCheck, label: "SOC-2 aligned" },
    { icon: Server, label: "Multi-tenant infra" },
    { icon: Lock, label: "Per-tenant data isolation" },
    { icon: KeyRound, label: "Encrypted credentials vault" },
    { icon: ScrollText, label: "On-demand access logs" },
    { icon: Globe, label: "EU hosting option" },
  ];
  return (
    <section className="container-1200 py-24">
      <Reveal>
        <p className="pill pill-sage mb-4">Enterprise-ready</p>
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl">
          The boring parts, <span className="serif-em">handled.</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.label} className="card-soft p-5 flex items-center gap-3">
            <it.icon className="h-5 w-5 text-[color:var(--sage)]" />
            <p className="text-sm">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="container-1200 py-24">
      <div className="card-soft p-10 text-center">
        <h2 className="text-3xl md:text-4xl tracking-tight max-w-2xl mx-auto">
          Drop in one line. <span className="serif-em">Change every visit.</span>
        </h2>
        <div className="mt-8 max-w-xl mx-auto card-soft p-3 flex items-center gap-2 bg-[color:var(--paper)]">
          <code className="flex-1 text-xs font-mono truncate">{brand.embedSnippet}</code>
          <button
            onClick={async () => { try { await navigator.clipboard.writeText(brand.embedSnippet); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {} }}
            className="btn-ghost text-xs py-1.5 px-3"
          >
            {copied ? <><Check className="h-3.5 w-3.5" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/demo" className="btn-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/pricing" className="btn-ghost">See pricing</Link>
        </div>
      </div>
    </section>
  );
}
