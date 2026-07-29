import type { Metadata } from "next";
import { PlaceholderSection } from "@/components/placeholder";

export const metadata: Metadata = { title: "How It Works — Zoiko Rooms" };

export default function HowItWorksPage() {
  return (
    <PlaceholderSection
      eyebrow="How It Works"
      title="A closer look at the Zoiko process"
      description="This page will detail verification, the Room Passport, and how payments and safety work for renters and providers."
    />
  );
}
