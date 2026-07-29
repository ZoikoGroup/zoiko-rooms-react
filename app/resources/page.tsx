import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "Resources — Zoiko Rooms" };

export default function ResourcesPage() {
  return (
    <PlaceholderSection
      eyebrow="Resources"
      title="Help Center & safety guides"
      description="This page will bring together the Zoiko Rooms Help Center and our safety & scam prevention guides."
    />
  );
}
