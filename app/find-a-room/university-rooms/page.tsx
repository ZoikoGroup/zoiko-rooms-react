import type { Metadata } from "next";
import {
  HeroSection,
  RelationshipAssuranceSection,
  PathwaysSection,
  FeaturedInstitutionsSection,
  CurrentRoomInventorySection,
  AvailabilityPlannerSection,
  CostGuarantorSection,
  ApplicationDocumentsSection,
  InternationalArrivalSupportSection,
  VerificationSafetySection,
  SeekerSupportSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/university-rooms";

export const metadata: Metadata = {
  title: "University Rooms — Zoiko Rooms",
  description:
    "Find a room around your university, campus, term, or placement — with relationship assurance, term-aware availability, and document guidance built in.",
};

export default function UniversityRoomsPage() {
  return (
    <>
      <HeroSection />
      <RelationshipAssuranceSection />
      <PathwaysSection />
      <FeaturedInstitutionsSection />
      <CurrentRoomInventorySection />
      <AvailabilityPlannerSection />
      <CostGuarantorSection />
      <ApplicationDocumentsSection />
      <InternationalArrivalSupportSection />
      <VerificationSafetySection />
      <SeekerSupportSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
