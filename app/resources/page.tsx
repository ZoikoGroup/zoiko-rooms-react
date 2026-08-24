import type { Metadata } from "next";
import {
  HeroSection,
  DestinationsSection,
  BoundarySection,
  SafetyBannerSection,
  FaqCtaSection,
} from "@/components/resources-overview";

export const metadata: Metadata = {
  title: "Renting, Listing and Moving Resources | Zoiko Rooms",
  description:
    "Find current Zoiko Rooms guidance for renting, listing, moving and operating rooms, with helpful guides, safety tips, city insights and support resources.",
};

export default function ResourcesPage() {
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <BoundarySection />
      <SafetyBannerSection />
      <FaqCtaSection />
    </>
  );
}
