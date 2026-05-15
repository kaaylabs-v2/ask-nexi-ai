import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, LifeBuoy, Megaphone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Nexus²" }] }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-2xl mx-auto leading-[1.05]">
            Talk to a <span className="serif-em">human.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">We answer email faster than most chatbots.</p>
        </Reveal>
      </section>

      <section className="container-1200 grid gap-4 md:grid-cols-3">
        {[
          { icon: Briefcase, title: "Sales", body: "For new prospects.", email: "sales@nexus2.ai", cta: "Book a call →" },
          { icon: LifeBuoy, title: "Support", body: "For existing customers.", email: "support@nexus2.ai", cta: "Open a ticket →" },
          { icon: Megaphone, title: "Press & partnerships", body: "Stories and integrations.", email: "press@nexus2.ai", cta: "Send a note →" },
        ].map((c) => (
          <div key={c.title} className="card-soft p-6">
            <c.icon className="h-5 w-5 text-[color:var(--sage)]" />
            <h3 className="mt-3 font-medium">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
            <p className="mt-4 text-sm">{c.email}</p>
            <a href={`mailto:${c.email}`} className="mt-3 inline-block text-sm text-[color:var(--sage)] hover:underline">{c.cta}</a>
          </div>
        ))}
      </section>

      <section className="container-1200 py-16 max-w-2xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()} className="card-soft p-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="Name" className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
            <input placeholder="Email" type="email" className="rounded-md border border-border bg-card px-3 py-2 text-sm" />
          </div>
          <select className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm">
            <option>General inquiry</option><option>Sales</option><option>Support</option><option>Press</option>
          </select>
          <textarea rows={4} placeholder="Message" className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm" />
          <button type="submit" className="btn-primary w-full justify-center">Send →</button>
        </form>
      </section>

      <section className="container-1200 py-16 text-center">
        <p className="font-serif italic text-2xl">We read every message. <span className="text-[color:var(--sage)]">Promise.</span></p>
      </section>
    </>
  );
}
