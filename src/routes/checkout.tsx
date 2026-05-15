import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";

const search = z.object({
  pack: z.coerce.number().optional(),
});

export const Route = createFileRoute("/checkout")({
  validateSearch: (raw) => search.parse(raw),
  head: () => ({ meta: [{ title: "Checkout — Nexus²" }] }),
  component: Checkout,
});

function Checkout() {
  const { pack } = Route.useSearch();
  return (
    <section className="container-1200 py-24 text-center">
      <p className="pill pill-sage mx-auto mb-4">Checkout</p>
      <h1 className="text-4xl md:text-5xl tracking-tight">
        Checkout <span className="serif-em">coming soon.</span>
      </h1>
      <p className="mt-4 text-muted-foreground">
        {pack
          ? `You're about to add ${pack.toLocaleString()} tokens to your plan.`
          : "Pick a plan or token pack to continue."}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/pricing" className="btn-ghost">Back to pricing</Link>
        <Link to="/contact" className="btn-primary">Talk to sales</Link>
      </div>
    </section>
  );
}
