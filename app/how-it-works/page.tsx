import type { Metadata } from "next";
import { HeroSection, VerificationScopedSection, RoomPassportSection, EightStagesSection, FaqSection } from "@/components/how-it-works-overview";

export const metadata: Metadata = {
  title: "How It Works — Zoiko Rooms",
  description:
    "Understand the complete room journey — from first search or draft to agreement, payment, move-in, and support.",
};

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection />
      <VerificationScopedSection />
      <RoomPassportSection />
      <EightStagesSection />
      <FaqSection />
    </>
  );
}
