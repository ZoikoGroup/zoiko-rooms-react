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
  title: "Landlords & Agents — Zoiko Rooms",
  description:
    "List with clear ownership or current instruction — and keep authority, availability, costs, and responsibility visible.",
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
