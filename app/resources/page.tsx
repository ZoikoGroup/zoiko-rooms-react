import type { Metadata } from "next";
import { HeroSection, DestinationsSection, BoundarySection, SafetyBannerSection, FaqCtaSection } from "@/components/resources-overview";

export const metadata: Metadata = {
  title: "Resources — Zoiko Rooms",
  description:
    "Find direct, current guidance for every stage of renting, listing, moving, and operating rooms.",
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
