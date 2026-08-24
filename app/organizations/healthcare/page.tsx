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
  title: "Healthcare Worker Housing Solutions | Zoiko Rooms",
  description:
    "Zoiko Rooms provides healthcare worker housing solutions for staff, trainees, researchers and temporary workers, connecting rooms, availability and stays.",
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
