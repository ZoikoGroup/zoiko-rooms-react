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
  title: "Government & Public Sector Housing | Zoiko Rooms",
  description:
    "Manage public sector housing with Zoiko Rooms. Connect room availability, applications, verification, compliance, agreements, payments and operational data.",
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
