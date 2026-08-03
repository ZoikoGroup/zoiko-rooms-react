import type { Metadata } from "next";
import {
  HeroSection,
  TrustBoundarySection,
  JourneySection,
  SearchCompareSection,
  RoomDetailEvidenceSection,
  CommunicationViewingsSection,
  ApplicationsReservationsSection,
  AgreementsCostsSection,
  PaymentsSection,
  MoveInSupportSection,
  SpecialJourneysSection,
  SafetyScamSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/for-room-seekers";

export const metadata: Metadata = {
  title: "For Room Seekers — Zoiko Rooms",
  description:
    "Find, understand, and secure a room through visible facts, accountable decisions, complete costs, and safe next steps.",
};

export default function ForRoomSeekersPage() {
  return (
    <>
      <HeroSection />
      <TrustBoundarySection />
      <JourneySection />
      <SearchCompareSection />
      <RoomDetailEvidenceSection />
      <CommunicationViewingsSection />
      <ApplicationsReservationsSection />
      <AgreementsCostsSection />
      <PaymentsSection />
      <MoveInSupportSection />
      <SpecialJourneysSection />
      <SafetyScamSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
