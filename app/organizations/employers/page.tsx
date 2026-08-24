import type { Metadata } from "next";
import {
  HeroSection,
  WorkforcePrincipleSection,
  WorkforcePathwaysSection,
  OperatingModelsSection,
  WorkerTransparencySection,
  ResponsibilityMapSection,
  ConnectedSupplySection,
  FundingBillingSection,
  HowItWorksSection,
  FaqCtaSection,
} from "@/components/employers";

export const metadata: Metadata = {
  title: "Employee Housing Platform | Zoiko Rooms",
  description:
    "Zoiko Rooms provides employee housing solutions for businesses, connecting workforce needs with room availability, stays, providers, costs, and relocations.",
};

export default function EmployersPage() {
  return (
    <>
      <HeroSection />
      <WorkforcePrincipleSection />
      <WorkforcePathwaysSection />
      <OperatingModelsSection />
      <WorkerTransparencySection />
      <ResponsibilityMapSection />
      <ConnectedSupplySection />
      <FundingBillingSection />
      <HowItWorksSection />
      <FaqCtaSection />
    </>
  );
}
