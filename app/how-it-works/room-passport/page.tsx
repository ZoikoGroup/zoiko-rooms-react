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
  title: "Room Passport: Verified Room Data | Zoiko Rooms",
  description:
    "Manage verified room information with room passport from Zoiko Rooms. Connect room details, availability, costs, restrictions, maintenance, and evidence.",
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
