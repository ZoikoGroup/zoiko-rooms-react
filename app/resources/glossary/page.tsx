import type { Metadata } from "next";

import {
  GlossaryHeroSection,
  BrowseByTopicSection,
  AZIndexSection,
  CompleteCostExampleSection,
  ActionCalloutSection,
} from "@/components/glossary";

export const metadata: Metadata = {
  title: "Property Glossary and Housing Terms | Zoiko Rooms",
  description:
    "Explore the Zoiko Rooms glossary for clear definitions of property, housing and rental terms, helping you understand accommodation and renting with ease.",
};

export default function GlossaryPage() {
  return (
    <main>
      <GlossaryHeroSection />
      <BrowseByTopicSection />
      <AZIndexSection />
      <CompleteCostExampleSection />
      <ActionCalloutSection />
    </main>
  );
}
