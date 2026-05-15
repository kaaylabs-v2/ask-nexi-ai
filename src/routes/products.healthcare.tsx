import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/site/VerticalPage";
import { verticals } from "@/lib/content";

export const Route = createFileRoute("/products/healthcare")({
  head: () => ({ meta: [{ title: "Nexus for Healthcare — Guide patients without growing your call center" }] }),
  component: () => <VerticalPage v={verticals.healthcare} />,
});
