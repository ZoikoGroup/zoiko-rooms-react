import type { Metadata } from "next";
import {
  HeroSection,
  VerificationScopedSection,
  RoomPassportSection,
  EightStagesSection,
  FaqSection,
} from "@/components/how-it-works-overview";

export const metadata: Metadata = {
  title: "How Zoiko Rooms Works | Room Management Platform",
  description:
    "See how Zoiko Rooms connects room portfolios, availability, applications, verification, agreements, payments and support through one governed platform.",
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
