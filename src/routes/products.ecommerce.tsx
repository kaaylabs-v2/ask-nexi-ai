import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/site/VerticalPage";
import { verticals } from "@/lib/content";

export const Route = createFileRoute("/products/ecommerce")({
  head: () => ({ meta: [{ title: "Nexus for E-commerce — Turn questions into sales" }] }),
  component: () => <VerticalPage v={verticals.ecommerce} />,
});
