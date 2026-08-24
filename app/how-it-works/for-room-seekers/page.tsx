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
  title: "Room Seekers Guide to Find Rooms | Zoiko Rooms",
  description:
    "Explore the room seeker guide by Zoiko Rooms. Learn how to find, compare, view, apply, pay, and move into a room with safe and informed decisions.",
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
