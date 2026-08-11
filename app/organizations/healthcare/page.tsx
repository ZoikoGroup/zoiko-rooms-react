import type { Metadata } from "next";
import {
  HeroSection,
  WorkforcePathwaysSection,
  OperatingModelsSection,
  ResponsibilityMapSection,
  ConnectedSupplySection,
  FundingBillingSection,
  HowItWorksSection,
  FaqCtaSection,
} from "@/components/healthcare";

export const metadata: Metadata = {
  title: "Healthcare — Zoiko Rooms",
  description:
    "Room access for healthcare workforces, built on clear choice — support permanent hires, rotations, trainees, researchers, and temporary staff with transparent cost, privacy, and responsibility.",
};

export default function HealthcarePage() {
  return (
    <>
      <HeroSection />
      <WorkforcePathwaysSection />
      <OperatingModelsSection />
      <ResponsibilityMapSection />
      <ConnectedSupplySection />
      <FundingBillingSection />
      <HowItWorksSection />
      <FaqCtaSection />
    </>
  );
}
