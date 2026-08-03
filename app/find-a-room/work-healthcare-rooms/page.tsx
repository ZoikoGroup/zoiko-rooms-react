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
  title: "Work & Healthcare Rooms — Zoiko Rooms",
  description:
    "Find a room around your workplace, hospital, clinic, project, placement, or rotation — with relationship assurance, travel-estimate honesty, and privacy boundaries built in.",
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
