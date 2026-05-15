import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { pricingTiers, faqs } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Nexus²" }, { name: "description", content: "Simple pricing. Start free. Pay for outcomes, not seats." }] }),
  component: Pricing,
});

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [traffic, setTraffic] = useState(10000);
  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <p className="pill pill-sage mb-4 mx-auto">Pricing</p>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Simple pricing. <span className="serif-em">Start free.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">Pay for outcomes, not seats. Cancel anytime.</p>
          <div className="mt-8 inline-flex items-center gap-1 card-soft p-1">
            <button onClick={() => setAnnual(false)} className={`pill ${!annual ? "pill-sage" : ""}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`pill ${annual ? "pill-sage" : ""}`}>Annual · save 20%</button>
          </div>
        </Reveal>
      </section>

      <section className="container-1200 pb-12 grid gap-4 md:grid-cols-3">
        {pricingTiers.map((t) => {
          const price = annual && t.price === "$100" ? "$80" : t.price;
          return (
            <div key={t.name} className={`card-soft p-7 flex flex-col ${t.popular ? "ring-1 ring-[color:var(--sage)] -translate-y-2" : ""}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t.name}</p>
                {t.popular && <span className="pill pill-sage">Most popular</span>}
              </div>
              <p className="mt-4 font-serif italic text-4xl">{price}<span className="text-sm not-italic font-sans text-muted-foreground"> · {t.period}</span></p>
              <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
              <ul className="mt-6 space-y-2 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="text-sm flex items-start gap-2"><Check className="h-4 w-4 text-[color:var(--sage)] mt-0.5 shrink-0" /> {f}</li>
                ))}
              </ul>
              <Link to={t.cta.href as "/demo"} className={`mt-6 ${t.cta.variant === "primary" ? "btn-primary" : "btn-ghost"} justify-center`}>
                {t.cta.label}
              </Link>
            </div>
          );
        })}
      </section>

      <section className="container-1200 py-16">
        <div className="card-soft p-8">
          <h2 className="text-xl font-medium">What's a query?</h2>
          <p className="mt-2 text-sm text-muted-foreground">A query is one back-and-forth with Nexi. Drag the slider to estimate based on your traffic.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 items-center">
            <input type="range" min={1000} max={500000} step={1000} value={traffic} onChange={(e) => setTraffic(+e.target.value)}
              className="w-full accent-[color:var(--sage)]" />
            <p className="text-sm">
              <span className="font-serif italic text-2xl">{traffic.toLocaleString()}</span> monthly visitors × 5% engagement ≈ <span className="font-medium">{Math.round(traffic * 0.05).toLocaleString()}</span> queries / mo
            </p>
          </div>
        </div>
      </section>

      <section className="container-1200 py-16">
        <h2 className="text-2xl md:text-3xl tracking-tight">Compare <span className="serif-em">every plan.</span></h2>
        <div className="mt-8 card-soft overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left">
              <tr><th className="p-4 font-medium"></th><th className="p-4 font-medium">Trial</th><th className="p-4 font-medium text-[color:var(--sage)]">Pro</th><th className="p-4 font-medium">Enterprise</th></tr>
            </thead>
            <tbody>
              {[
                ["Conversations / month", "1,000", "50,000", "Unlimited"],
                ["Workspaces", "1", "5", "Unlimited"],
                ["Custom branding", "—", "✓", "✓ + white-label"],
                ["Analytics dashboard", "Basic", "Advanced", "Advanced + exports"],
                ["Priority support", "—", "✓", "Dedicated CSM"],
                ["SSO & SAML", "—", "—", "✓"],
                ["On-prem / VPC", "—", "—", "✓"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-border">
                  {row.map((c, i) => <td key={i} className={`p-4 ${i === 2 ? "bg-[color:var(--sage)]/5" : ""}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-1200 py-16">
        <h2 className="text-2xl md:text-3xl tracking-tight">Frequently asked.</h2>
        <Accordion type="single" collapsible className="card-soft px-6 mt-6">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container-1200 py-24 text-center">
        <h2 className="text-3xl md:text-4xl tracking-tight">Try Nexi free for 14 days. <span className="serif-em">No card required.</span></h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/demo" className="btn-primary">Start free trial <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="btn-ghost">Talk to sales</Link>
        </div>
      </section>
    </>
  );
}
