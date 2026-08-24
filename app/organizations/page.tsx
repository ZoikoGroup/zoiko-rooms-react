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
  title: "Housing Solutions for Organizations | Zoiko Rooms",
  description:
    "Zoiko Rooms provides housing solutions for organizations, connecting room supply, availability, applications, agreements, payments & operational workflows.",
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
