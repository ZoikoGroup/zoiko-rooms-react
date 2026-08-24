import type { Metadata } from "next";
import {
  HeroSection,
  RoleSelectorSection,
  AuthorityBoundarySection,
  PathwaySelectionSection,
  ProRoutingSection,
  PrepareChecklistSection,
  FairAccessSection,
  SecuritySafeOperationsSection,
  LifecycleGovernanceSection,
  FaqSection,
  MiniRequirementsPricingSection,
  SupportCtaSection,
} from "@/components/landlords-agents";

export const metadata: Metadata = {
  title: "Landlord & Agent Room Listings Platform | Zoiko",
  description:
    "Create landlord and agent room listings with Zoiko Rooms. Add room details, availability, costs, authority and evidence to help seekers choose confidently.",
};

export default function LandlordsAgentsPage() {
  return (
    <>
      <HeroSection />
      <RoleSelectorSection />
      <AuthorityBoundarySection />
      <PathwaySelectionSection />
      <ProRoutingSection />
      <PrepareChecklistSection />
      <FairAccessSection />
      <SecuritySafeOperationsSection />
      <LifecycleGovernanceSection />
      <FaqSection />
      <MiniRequirementsPricingSection />
      <SupportCtaSection />
    </>
  );
}
