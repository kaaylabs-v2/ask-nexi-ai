import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/site/VerticalPage";
import { verticals } from "@/lib/content";

export const Route = createFileRoute("/products/education")({
  head: () => ({ meta: [{ title: "Nexus for Education — Help students find everything campus" }] }),
  component: () => <VerticalPage v={verticals.education} />,
});
