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
  title: "Live-in Providers — Zoiko Rooms",
  description:
    "Offer a room in the home where you live — with clear authority, household expectations, privacy, and fair access.",
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
