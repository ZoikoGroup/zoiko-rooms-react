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
  title: "Find a Room for Rent Online | Zoiko Rooms",
  description:
    "Find a room with verified listings, transparent details, and trusted providers. Explore safe room rentals that match your budget & lifestyle at Zoiko Rooms.",
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
