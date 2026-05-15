import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage } from "@/components/site/VerticalPage";
import { verticals } from "@/lib/content";

export const Route = createFileRoute("/products/enterprise")({
  head: () => ({ meta: [{ title: "Nexus for Enterprise — Every internal tool, one prompt" }] }),
  component: () => <VerticalPage v={verticals.enterprise} />,
});
