import type { Metadata } from "next";
import {
  HeroSection,
  BindingBoundarySection,
  AuthorizationLifecycleSection,
  PrepareChecklistSection,
  PricingPrimaryObligationSection,
  PrivacyDocumentsSection,
  FairAccessSection,
  ViewingHandoverSupportSection,
  LifecycleChangesSection,
  FaqSection,
  SupportCtaSection,
} from "@/components/authorized-sublets";

export const metadata: Metadata = {
  title: "Authorized Sublets — Zoiko Rooms",
  description:
    "Offer a room only within the permission, dates, price, and conditions you are authorized to use.",
};

export default function AuthorizedSubletsPage() {
  return (
    <>
      <HeroSection />
      <BindingBoundarySection />
      <AuthorizationLifecycleSection />
      <PrepareChecklistSection />
      <PricingPrimaryObligationSection />
      <PrivacyDocumentsSection />
      <FairAccessSection />
      <ViewingHandoverSupportSection />
      <LifecycleChangesSection />
      <FaqSection />
      <SupportCtaSection />
    </>
  );
}
