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
  title: "Employers — Zoiko Rooms",
  description:
    "Coordinate room access for workforce moves, built on clear choice — support new hires, transfers, temporary assignments, projects, trainees, and seasonal workforces.",
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
