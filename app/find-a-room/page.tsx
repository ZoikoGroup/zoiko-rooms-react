import type { Metadata } from "next";
import {
  HeroSection,
  SearchAssuranceSection,
  FeaturedModulesSection,
  RoomHighlightsSection,
  RoomsByCitySection,
  AudienceRowsSection,
  AccountabilitySection,
  SeekerGuidanceSection,
  FaqSection,
} from "@/components/find-a-room";

export const metadata: Metadata = {
  title: "Find a Room — Zoiko Rooms",
  description:
    "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.",
};

export default function FindARoomPage() {
  return (
    <>
      <HeroSection />
      <SearchAssuranceSection />
      <FeaturedModulesSection />
      <RoomHighlightsSection />
      <RoomsByCitySection />
      <AudienceRowsSection />
      <AccountabilitySection />
      <SeekerGuidanceSection />
      <FaqSection />
    </>
  );
}
