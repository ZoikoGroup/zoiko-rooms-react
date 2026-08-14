import type { Metadata } from "next";
import {
  HeroSection,
  DelegationPrincipleSection,
  DelegationBoundarySection,
  MobilityPathwaysSection,
  OperatingModelsSection,
  CaseLifecycleSection,
  SupplyDiscoverySection,
  FundingBillingSection,
  FaqCtaSection,
} from "@/components/relocation-mobility";

export const metadata: Metadata = {
  title: "Relocation & Mobility — Zoiko Rooms",
  description:
    "Coordinate room access across moves, providers, and borders — through one accountable workflow, with authority, cost, and data sharing explicit from case creation to close.",
};

export default function RelocationMobilityPage() {
  return (
    <>
      <HeroSection />
      <DelegationPrincipleSection />
      <DelegationBoundarySection />
      <MobilityPathwaysSection />
      <OperatingModelsSection />
      <CaseLifecycleSection />
      <SupplyDiscoverySection />
      <FundingBillingSection />
      <FaqCtaSection />
    </>
  );
}
