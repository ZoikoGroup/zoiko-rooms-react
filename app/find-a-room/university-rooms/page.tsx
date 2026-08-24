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
  title: "Student Accommodation Near Universities | Zoiko Rooms",
  description:
    "Find student accommodation near universities with verified rooms, trusted providers & clear rental details. Explore safe housing options with Zoiko Rooms.",
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
