import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { verticals } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [{ title: "Industries — Nexus²" }] }),
  component: Industries,
});

function Industries() {
  const list = Object.values(verticals);
  return (
    <>
      <section className="container-1200 py-20 md:py-24 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Built for the way <span className="serif-em">your industry works.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Four agents, each shaped by the people who use them every day.
          </p>
        </Reveal>
      </section>
      <section className="container-1200 pb-24 grid gap-4 md:grid-cols-2">
        {list.map((v) => (
          <Link key={v.slug} to={`/products/${v.slug}` as "/products/education"}
            className="card-soft p-7 hover:-translate-y-1 transition-transform"
            style={{ background: `linear-gradient(135deg, ${v.tint.from}, ${v.tint.to})` }}>
            <p className="pill pill-sage">Nexus for {v.name}</p>
            <h2 className="mt-4 font-serif italic text-3xl">{v.blurb}</h2>
            <p className="mt-3 text-sm text-foreground/80">"{v.prompts[0]}"</p>
            <p className="mt-6 inline-flex items-center gap-1 text-sm text-foreground">Explore <ArrowRight className="h-4 w-4" /></p>
          </Link>
        ))}
      </section>
    </>
  );
}
