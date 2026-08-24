import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Institutional Room Distribution Platform | Zoiko Rooms",
  description:
    "Simplify institutional room distribution with Zoiko Rooms. Manage room access, allocation, availability, applications, verification, and support securely.",
};

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
