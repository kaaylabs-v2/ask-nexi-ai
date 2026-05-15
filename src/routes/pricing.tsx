import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { pricingTiers, faqs } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CurrencySwitcher } from "@/components/site/CurrencySwitcher";
import { useCurrency } from "@/components/site/CurrencyContext";
import {
  plans,
  proAnnualBilledYearly,
  tokenPacks,
  perTokenCopy,
  queryClarifier,
} from "@/content/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Nexus²" }, { name: "description", content: "Simple pricing. Start free. Pay for outcomes, not seats." }] }),
  component: Pricing,
});

function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [traffic, setTraffic] = useState(10000);
  const { format, currency } = useCurrency();

  const proPrice = annual ? plans.proAnnual : plans.pro;
  const proBilledYearly = format(proAnnualBilledYearly);

  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <p className="pill pill-sage mb-4 mx-auto">Pricing</p>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Simple pricing. <span className="serif-em">Start free.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">Pay for outcomes, not seats. Cancel anytime.</p>

          <div className="mt-8 inline-flex items-stretch gap-4">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Billing</span>
              <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
                <button onClick={() => setAnnual(false)} className={`pill ${!annual ? "pill-sage" : "border-transparent bg-transparent text-muted-foreground"}`}>Monthly</button>
                <button onClick={() => setAnnual(true)} className={`pill ${annual ? "pill-sage" : "border-transparent bg-transparent text-muted-foreground"}`}>Annual · save 20%</button>
              </div>
            </div>
            <div aria-hidden className="w-px self-stretch bg-border" />
            <CurrencySwitcher />
          </div>
        </Reveal>
      </section>

      <section className="container-1200 pb-12 grid gap-4 md:grid-cols-3">
        {pricingTiers.map((t) => {
          const isTrial = t.name === "Trial";
          const isPro = t.name === "Pro";
          const isEnterprise = t.name === "Enterprise";
          const priceLabel = isTrial
            ? format(plans.trial, { freeLabel: "Free" })
            : isPro
            ? format(proPrice)
            : format(plans.enterprise, { customLabel: "Custom" });
          const subLabel = isTrial
            ? "14-day limited trial"
            : isPro
            ? annual
              ? `/mo · billed ${proBilledYearly} yearly`
              : "/mo"
            : "talk to us";

          return (
            <div key={t.name} className={`card-soft p-7 flex flex-col ${t.popular ? "ring-1 ring-[color:var(--sage)] -translate-y-2" : ""}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t.name}</p>
                {t.popular && <span className="pill pill-sage">Most popular</span>}
              </div>

              <p className="mt-4 font-serif italic text-4xl">
                {priceLabel}
                {isPro && (
                  <span className="text-sm not-italic font-sans text-muted-foreground"> {subLabel}</span>
                )}
                {isEnterprise && (
                  <span className="text-sm not-italic font-sans text-muted-foreground"> · {subLabel}</span>
                )}
              </p>

              {isTrial && (
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {subLabel}
                </p>
              )}

              {isPro && annual && (
                <span className="mt-2 inline-flex w-fit pill pill-sage">Save 20% annual</span>
              )}

              {isEnterprise && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Pricing scaled to deployment. Quoted in INR or USD.
                </p>
              )}

              <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
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

      <section className="container-1200 pb-2">
        <p className="text-xs text-muted-foreground text-center">
          All prices exclusive of GST (India) / sales tax (US), as applicable.
        </p>
      </section>

      <TokenPacksSection />

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
          <p className="mt-4 text-xs text-muted-foreground">{queryClarifier[currency]}</p>
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
                ["Queries/month", "1,000", "50,000", "Unlimited"],
                ["Token top-ups", "—", "Available", "Included, custom volume"],
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

function TokenPacksSection() {
  const { format, currency } = useCurrency();
  // For demo: assume not on Trial. Could read from auth later.
  const onTrial = false;

  return (
    <section className="container-1200 py-16">
      <div className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--sage)] font-medium">
          Add-ons · Usage packs
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
          Need more headroom? <span className="serif-em">Top up tokens.</span>
        </h2>
        <p className="mt-4 text-[15px] text-muted-foreground max-w-[560px]">
          Token packs add to any paid plan and never expire. Use them to absorb a viral moment,
          a holiday spike, or a long-running knowledge-base sync — without upgrading your tier.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tokenPacks.map((p) => {
          const tokensK = `${Math.round(p.tokens / 1000)}`;
          const price = format({ INR: p.INR, USD: p.USD });
          return (
            <div
              key={p.tokens}
              className="group relative bg-[color:var(--paper)] border border-border rounded-none p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              {p.recommended && (
                <span className="absolute top-3 right-3 pill pill-sage">Most popular</span>
              )}
              <div className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--sage)] font-medium">
                  Pack
                </p>
                <div className="h-px w-10 bg-[color:var(--sage)] transition-all duration-200 group-hover:w-16" />
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-[40px] leading-none">{tokensK}</span>
                <span className="text-[24px] text-muted-foreground leading-none">K</span>
                <span className="ml-2 text-sm text-muted-foreground self-end pb-1">tokens</span>
              </div>
              <p className="mt-2 text-[12px] text-muted-foreground">added to current plan</p>

              <p className="mt-5 font-serif italic text-[32px] leading-none text-foreground">{price}</p>
              <p className="mt-2 text-[11px] text-muted-foreground">{perTokenCopy[currency]}</p>

              <div className="mt-auto pt-6">
                {onTrial ? (
                  <button
                    disabled
                    title="Token packs unlock on Pro and Enterprise plans"
                    className="w-full inline-flex items-center justify-center gap-2 border border-border text-muted-foreground py-2.5 text-sm cursor-not-allowed"
                  >
                    Add to plan →
                  </button>
                ) : (
                  <Link
                    to="/checkout"
                    search={{ pack: p.tokens }}
                    className={`w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${
                      p.recommended
                        ? "bg-[color:var(--ink)] text-[color:var(--paper)] hover:opacity-90"
                        : "border border-border hover:bg-secondary"
                    }`}
                  >
                    Add to plan →
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 card-soft divide-y divide-border">
        {[
          "Packs never expire and roll over month to month.",
          "Applied automatically once your plan's monthly queries are consumed.",
          null, // last row uses link
        ].map((line, i) =>
          line ? (
            <p key={i} className="px-6 py-4 text-sm text-muted-foreground">{line}</p>
          ) : (
            <Link
              key="contact"
              to="/contact"
              className="block px-6 py-4 text-sm text-foreground hover:text-[color:var(--sage)] transition-colors"
            >
              Volume above 100K tokens — talk to sales for custom pricing →
            </Link>
          )
        )}
      </div>
    </section>
  );
}
