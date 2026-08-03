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
  title: "International Moves — Zoiko Rooms",
  description:
    "Search for a room across borders with clearer timing, costs, documents, and support — original-currency pricing, provider authority, and scam-prevention guidance included.",
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
