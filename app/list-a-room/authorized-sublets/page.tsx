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
  title: "Authorized Sublet Listings | Zoiko Rooms",
  description:
    "List authorized sublets with Zoiko Rooms. Offer rooms within approved permissions, dates, prices and conditions while keeping evidence & requirements clear.",
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
