import type { Metadata } from "next";
import {
  HeroSection,
  ClaimEvidenceSection,
  ThreeTiersSection,
  ExplorePassportSection,
  PassportLifecycleSection,
  QuoteSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/room-passport";

export const metadata: Metadata = {
  title: "Room Passport — Zoiko Rooms",
  description:
    "The record that tells you what's actually true about a room — a structured, evidence-scoped record of what's been declared, documented, or physically inspected.",
};

export default function RoomPassportPage() {
  return (
    <>
      <HeroSection />
      <ClaimEvidenceSection />
      <ThreeTiersSection />
      <ExplorePassportSection />
      <PassportLifecycleSection />
      <QuoteSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
