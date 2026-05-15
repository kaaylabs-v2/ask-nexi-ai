import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Gauge, Scissors, Store } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Nexus²" }] }),
  component: About,
});

const team = [
  { name: "Santosh Naranapatty", role: "Founder & CEO", ask: "Ask me about navigation analytics." },
  { name: "Krishnan N", role: "Founder & CEO, Kaaylabs", ask: "Ask me about scaling AI for the enterprise." },
  { name: "Swati Sahu", role: "Head of Marketing", ask: "Ask me about copy that doesn't cringe." },
];

function About() {
  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            We believe the web should be <span className="serif-em">easy to navigate.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            We built Nexus² so every visitor finds what they're looking for. Instantly.
          </p>
        </Reveal>
        <div className="mt-12 mx-auto max-w-3xl card-soft h-72 gradient-sunset" />
      </section>

      <section className="container-1200 py-16 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[color:var(--sage)]">Our mission</p>
        <p className="mt-4 text-xl leading-relaxed">
          We're on a mission to eliminate frustration from web browsing. Every day, millions of people land on websites and can't find what they need. They bounce. Businesses lose customers. Visitors lose time. Everyone loses. Nexus² makes navigation invisible — so visitors focus on what matters: finding what they need, making decisions, and taking action.
        </p>
      </section>

      <section className="container-1200 py-16 space-y-16">
        {[
          { n: "I", title: "The frustration", body: "70% bounce on first visit. Support inboxes drown in 'where do I find…' questions. The gap between visitor intent and site structure has only widened.", quote: "Most websites have answers. They just don't speak." },
          { n: "II", title: "The breakthrough", body: "We prototyped a chat layer for an e-commerce client. Bounce dropped 35% in two weeks. Customers asked for it back when we paused the test.", quote: "The first time a visitor said 'thanks Nexi,' we knew." },
          { n: "III", title: "The commitment", body: "Six months of refinement, hundreds of conversations, one promise: do one thing exceptionally well — make any website answer back.", quote: "We chose depth over surface. We still do." },
        ].map((act) => (
          <Reveal key={act.n}>
            <div className="grid gap-8 md:grid-cols-12 items-start">
              <p className="md:col-span-2 font-serif italic text-7xl text-[color:var(--sage)]">{act.n}</p>
              <div className="md:col-span-6">
                <h3 className="text-2xl tracking-tight">{act.title}</h3>
                <p className="mt-3 text-muted-foreground">{act.body}</p>
              </div>
              <blockquote className="md:col-span-4 font-serif italic text-2xl text-foreground/80">"{act.quote}"</blockquote>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-1200 py-16">
        <h2 className="text-2xl md:text-3xl tracking-tight">What drives us.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { icon: Target, title: "User-first thinking", body: "Every decision starts with the visitor on the other end of the screen." },
            { icon: Gauge, title: "Speed matters", body: "If it takes more than 60 seconds, we've already lost the visitor." },
            { icon: Scissors, title: "Simplicity is hard work", body: "We cut every feature that doesn't earn its keep." },
            { icon: Store, title: "Real businesses, real impact", body: "We measure ourselves by the bounce rates we move, not the dashboards we ship." },
          ].map((p) => (
            <div key={p.title} className="card-soft p-6">
              <p.icon className="h-5 w-5 text-[color:var(--sage)]" />
              <h3 className="mt-3 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-1200 py-16">
        <h2 className="text-2xl md:text-3xl tracking-tight">Meet the team.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="card-soft p-5 text-center">
              <div className="mx-auto h-24 w-24 rounded-full gradient-sage flex items-center justify-center font-medium text-xl">{t.name.split(" ").map(n => n[0]).join("")}</div>
              <p className="mt-4 font-medium text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
              <p className="mt-3 text-xs text-foreground/70 italic">{t.ask}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-1200 py-24 text-center">
        <h2 className="text-3xl md:text-4xl tracking-tight">We're just getting started. <span className="serif-em">Want to join us?</span></h2>
        <Link to="/careers" className="btn-primary mt-8">See open roles <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </>
  );
}
