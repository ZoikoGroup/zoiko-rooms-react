import type { Metadata } from "next";
import {
  HeroSection,
  BeforeYouContinueSection,
  PathwaysSection,
  LocationPathwaysSection,
  CurrentRoomsSection,
  TravelShiftFitSection,
  OrganizationRelationshipSection,
  CostBenefitsSection,
  PrivacyFairnessSection,
  SafetySupportSection,
  GuidedSeekerStepsSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/work-healthcare-rooms";

export const metadata: Metadata = {
  title: "Work & Healthcare Rooms Near Your Workplace | Zoiko Rooms",
  description:
    "Find work & healthcare rooms near your workplace, hospital, or clinic with Zoiko Rooms. Search stays by location, budget, commute, timing, and preferences.",
};

export default function WorkHealthcareRoomsPage() {
  return (
    <>
      <HeroSection />
      <BeforeYouContinueSection />
      <PathwaysSection />
      <LocationPathwaysSection />
      <CurrentRoomsSection />
      <TravelShiftFitSection />
      <OrganizationRelationshipSection />
      <CostBenefitsSection />
      <PrivacyFairnessSection />
      <SafetySupportSection />
      <GuidedSeekerStepsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
