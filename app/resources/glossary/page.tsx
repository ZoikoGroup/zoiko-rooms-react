import {
  GlossaryHeroSection,
  BrowseByTopicSection,
  AZIndexSection,
  CompleteCostExampleSection,
  ActionCalloutSection,
} from "@/components/glossary";

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
