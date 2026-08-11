import type { Metadata } from "next";
import {
  HeroSection,
  ProgramPathwaysSection,
  OperatingModelsSection,
  RightsDueProcessSection,
  ResponsibilityMapSection,
  ProviderSupplySection,
  PublicFundingSection,
  HowItWorksSection,
  FaqSection,
} from "@/components/government-public-sector";

export const metadata: Metadata = {
  title: "Government & Public Sector — Zoiko Rooms",
  description:
    "Accountable room access, built on transparent authority — coordinate public workforce moves, education placements, housing-access programs, and reception or resettlement transitions.",
};

export default function GovernmentPublicSectorPage() {
  return (
    <>
      <HeroSection />
      <ProgramPathwaysSection />
      <OperatingModelsSection />
      <RightsDueProcessSection />
      <ResponsibilityMapSection />
      <ProviderSupplySection />
      <PublicFundingSection />
      <HowItWorksSection />
      <FaqSection />
    </>
  );
}
