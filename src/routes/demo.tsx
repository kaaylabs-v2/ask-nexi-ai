import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarClock, Check, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { testimonials } from "@/lib/content";

export const Route = createFileRoute("/demo")({
  head: () => ({ meta: [{ title: "Request a demo — Nexus²" }] }),
  component: Demo,
});

function Demo() {
  const [done, setDone] = useState(false);
  return (
    <>
      <section className="container-1200 py-16 md:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <h1 className="text-4xl md:text-5xl tracking-tight leading-[1.05]">
              See Nexi <span className="serif-em">answer your site</span> in 20 minutes.
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              A product specialist will share a live demo on your actual website. No slides, no canned questions.
            </p>
          </Reveal>
          {done ? (
            <div className="mt-10 card-soft p-8 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-[color:var(--sage)]/20 flex items-center justify-center"><Check className="h-6 w-6 text-[color:var(--sage)]" /></div>
              <p className="mt-4 font-medium">Booked!</p>
              <p className="text-sm text-muted-foreground mt-1">We'll be in touch within 24 hours.</p>
              <a href="#" className="btn-ghost mt-6 inline-flex"><CalendarClock className="h-4 w-4" /> Or pick a time now</a>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-10 card-soft p-6 space-y-4">
              {[
                { l: "Work email", t: "email", req: true },
                { l: "Full name", t: "text", req: true },
                { l: "Company", t: "text", req: true },
                { l: "Your website (URL)", t: "url", req: true },
              ].map((f) => (
                <div key={f.l}>
                  <label className="text-xs font-medium">{f.l}{f.req && " *"}</label>
                  <input required={f.req} type={f.t} className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[color:var(--sage)]" />
                </div>
              ))}
              <div>
                <label className="text-xs font-medium">Company size</label>
                <select className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm">
                  <option>1–10</option><option>11–50</option><option>51–200</option><option>201–1000</option><option>1000+</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium">Primary use case</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Customer support", "E-commerce", "Internal knowledge", "Documentation", "Other"].map((u, i) => (
                    <label key={u} className="pill cursor-pointer has-[:checked]:pill-sage">
                      <input type="radio" name="usecase" defaultChecked={i === 0} className="sr-only" /> {u}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-medium">Anything we should know?</label>
                <textarea rows={3} className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 text-sm" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Book my demo →</button>
              <p className="text-xs text-muted-foreground text-center">We'll never share your data. Read our privacy policy.</p>
            </form>
          )}
        </div>
        <aside className="md:col-span-5 space-y-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft p-5">
              <blockquote className="font-serif italic text-base">"{t.quote}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[color:var(--sage)]/30 flex items-center justify-center text-xs font-medium">{t.name.split(" ").map(n => n[0]).join("")}</div>
                <div><p className="text-sm font-medium">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}, {t.company}</p></div>
              </figcaption>
            </figure>
          ))}
          <div className="card-soft p-4 flex flex-wrap gap-2 justify-center">
            {["SOC-2 aligned", "GDPR-ready", "Zero tracking"].map((b) => (
              <span key={b} className="pill pill-sage"><ShieldCheck className="h-3 w-3" /> {b}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="container-1200 py-16">
        <Accordion type="single" collapsible className="card-soft px-6">
          {[
            { q: "How long is the demo?", a: "20 minutes, or 30 if you have follow-ups." },
            { q: "Will you scan my site beforehand?", a: "If you'd like — we can show Nexi running on your site live during the call." },
            { q: "Can my team join?", a: "Yes. Bring whoever owns marketing, product, or support." },
          ].map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
