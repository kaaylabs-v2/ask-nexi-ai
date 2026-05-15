import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Nexus²" }] }),
  component: Careers,
});

const roles = [
  { title: "Founding Engineer", team: "Engineering", location: "Remote (EU/US)" },
  { title: "Product Designer", team: "Design", location: "Remote" },
  { title: "ML Engineer (RAG/Agents)", team: "Engineering", location: "Remote" },
  { title: "Customer Engineer", team: "Customer", location: "Remote (US)" },
  { title: "Head of Marketing", team: "Marketing", location: "Remote" },
];

function Careers() {
  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Build the <span className="serif-em">navigation layer</span> for the web.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Small team. High taste. Real users from day one.
          </p>
          <a href="#roles" className="btn-primary mt-8">See open roles <ArrowDown className="h-4 w-4" /></a>
        </Reveal>
      </section>

      <section className="container-1200 py-16 grid gap-4 md:grid-cols-3">
        {[
          { t: "Ship every week", b: "We ship something visitors notice every Friday. The cadence isn't a goal, it's a habit." },
          { t: "Talk to users", b: "Engineers, designers, leadership — everyone sits in customer calls weekly. No exceptions." },
          { t: "Default to clarity", b: "Short docs, real examples, no jargon. If we can't explain it, we haven't understood it yet." },
        ].map((v) => (
          <div key={v.t} className="card-soft p-6">
            <h3 className="font-medium">{v.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
          </div>
        ))}
      </section>

      <section id="roles" className="container-1200 py-16">
        <h2 className="text-2xl md:text-3xl tracking-tight">Open roles.</h2>
        <ul className="mt-8 card-soft divide-y divide-border">
          {roles.map((r) => (
            <li key={r.title} className="grid grid-cols-12 items-center p-5 hover:border-l-2 hover:border-[color:var(--sage)] hover:pl-[18px] transition-all">
              <p className="col-span-12 sm:col-span-5 font-medium">{r.title}</p>
              <p className="col-span-6 sm:col-span-5 text-sm text-muted-foreground">{r.team} · {r.location}</p>
              <a href="#" className="col-span-6 sm:col-span-2 text-sm text-right text-[color:var(--sage)] hover:underline inline-flex justify-end items-center gap-1">Apply <ArrowRight className="h-4 w-4" /></a>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-1200 py-8 flex flex-wrap gap-2 justify-center">
        {["Competitive equity", "Remote-friendly", "Health / dental / vision", "Home office stipend", "Annual offsite", "20 days PTO + holidays"].map((p) => (
          <span key={p} className="pill pill-sage">{p}</span>
        ))}
      </section>

      <section className="container-1200 py-24 text-center">
        <div className="card-soft p-8 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl tracking-tight">Don't see your role?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tell us where you'd fit.</p>
          <a href="mailto:hello@nexus2.ai" className="btn-primary mt-6">hello@nexus2.ai</a>
        </div>
      </section>
    </>
  );
}
