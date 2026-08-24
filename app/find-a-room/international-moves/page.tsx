import type { Metadata } from "next";
import {
  HeroSection,
  ConfirmationSection,
  PathwaysSection,
  DestinationPathwaysSection,
  CurrentRoomsSection,
  AvailabilityTimingSection,
  CostsCurrencySection,
  DocumentsPrivacySection,
  ProviderAuthoritySection,
  PaymentsScamSection,
  OrganizationPathwaysSection,
  ArrivalChecklistSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/international-moves";

export const metadata: Metadata = {
  title: "International Room Rentals for Global Moves | Zoiko Rooms",
  description:
    "Find international room rentals for your move abroad. Explore flexible relocation rooms with options based on budget, location, stay length & preferences.",
};

export default function InternationalMovesPage() {
  return (
    <>
      <HeroSection />
      <ConfirmationSection />
      <PathwaysSection />
      <DestinationPathwaysSection />
      <CurrentRoomsSection />
      <AvailabilityTimingSection />
      <CostsCurrencySection />
      <DocumentsPrivacySection />
      <ProviderAuthoritySection />
      <PaymentsScamSection />
      <OrganizationPathwaysSection />
      <ArrivalChecklistSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
