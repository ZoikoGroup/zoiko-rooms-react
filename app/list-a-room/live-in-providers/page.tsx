import type { Metadata } from "next";
import {
  HeroSection,
  BindingBoundarySection,
  SharedHomeReadinessSection,
  HouseholdSharedSpacesSection,
  FairAccessSection,
  PricingTermsSection,
  PrivacyMediaSection,
  CommunicationViewingsSection,
  ListingLifecycleSection,
  FaqSection,
  SupportCtaSection,
} from "@/components/live-in-providers";

export const metadata: Metadata = {
  title: "Live In Room Provider Listings | Zoiko Rooms",
  description:
    "Zoiko Rooms helps live in room providers list available rooms with clear details on pricing, availability, conditions, household information and evidence.",
};

export default function LiveInProvidersPage() {
  return (
    <>
      <HeroSection />
      <BindingBoundarySection />
      <SharedHomeReadinessSection />
      <HouseholdSharedSpacesSection />
      <FairAccessSection />
      <PricingTermsSection />
      <PrivacyMediaSection />
      <CommunicationViewingsSection />
      <ListingLifecycleSection />
      <FaqSection />
      <SupportCtaSection />
    </>
  );
}
