import type { Metadata } from "next";
import { HeroSection, SafetyBannerSection, FeaturedGuidesSection, GovernanceSection } from "@/components/guides";

export const metadata: Metadata = {
  title: "Guides | Zoiko Rooms",
  description:
    "Follow the right steps for your role and stage of the room journey — agreement review, payments, Room Passport preparation, and organization eligibility guides.",
};

export default function GuidesPage() {
  return (
    <>
      <HeroSection />
      <SafetyBannerSection />
      <FeaturedGuidesSection />
      <GovernanceSection />
    </>
  );
}
