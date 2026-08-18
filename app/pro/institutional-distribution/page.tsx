import {
  GovernedRoomSupplyHero,
  CoreCapabilitiesSection,
  CanonicalDistributionModelsSection,
  ResponsibilityMapSection,
  AudienceCatalogPreviewSection,
  InstitutionalFundingBillingSection,
  ProgramLifecycleSection,
  FAQSection,
  InstitutionalProgramCTASection,
} from "@/components/institutional-distribution";

export default function InstitutionalDistributionPage() {
  return (
    <main>
      <GovernedRoomSupplyHero />
      <CoreCapabilitiesSection />
      <CanonicalDistributionModelsSection />
      <ResponsibilityMapSection />
      <AudienceCatalogPreviewSection />
      <InstitutionalFundingBillingSection />
      <ProgramLifecycleSection />
      <FAQSection />
      <InstitutionalProgramCTASection />
    </main>
  );
}
