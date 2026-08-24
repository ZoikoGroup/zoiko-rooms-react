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
  title: "Corporate Relocation Housing Services | Zoiko Rooms",
  description:
    "Streamline corporate relocation housing with Zoiko Rooms. Keep room access, provider handoffs, costs, dates, choices, and data sharing clear and connected.",
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
