import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "Zoiko Rooms Pro" };

export default function ProPage() {
  return (
    <PlaceholderSection
      eyebrow="Zoiko Rooms Pro"
      title="Compliance, verification, and integrations"
      description="This page will cover Zoiko Rooms Pro tools: compliance & verification workflows and integrations & API access."
    />
  );
}
