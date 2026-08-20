import type { Metadata } from "next";
import {
  HeroSection,
  RelationshipBoundarySection,
  SixPathwaysSection,
  OperatingModelSection,
  InstitutionalRoomSupplySection,
  ParticipantJourneySection,
  FundingBillingSection,
  GovernanceDataSection,
  ZoikoRoomsProSection,
  ProofProcurementSection,
  FaqCtaSection,
} from "@/components/organizations-overview";

export const metadata: Metadata = {
  title: "Organizations — Zoiko Rooms",
  description:
    "Coordinate room access, supply, funding, and support through clear organizational responsibility — universities, employers, healthcare, relocation, and government.",
};

export default function OrganizationsPage() {
  return (
    <>
      <HeroSection />
      <RelationshipBoundarySection />
      <SixPathwaysSection />
      <OperatingModelSection />
      <InstitutionalRoomSupplySection />
      <ParticipantJourneySection />
      <FundingBillingSection />
      <GovernanceDataSection />
      <ZoikoRoomsProSection />
      <ProofProcurementSection />
      <FaqCtaSection />
    </>
  );
}
