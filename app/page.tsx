import type { Metadata } from "next";

import {
  HeroSection,
  WhyZoikoSection,
  EvidenceSection,
  RoomsAvailableSection,
  RoomPassportSection,
  ProcessSection,
  RelocationSection,
  AudienceSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Verified Private Rooms for Rent: 30+ Nights | Zoiko Rooms",
  description:
    "Find verified private rooms for rent for 30+ nights. Review Room Passports and provider-authority checks; manage the rental journey from search to move-out.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyZoikoSection />
      <EvidenceSection />
      <RoomsAvailableSection />
      <RoomPassportSection />
      <ProcessSection />
      <RelocationSection />
      <AudienceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
