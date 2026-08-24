import type { Metadata } from "next";

import {
  IntegrationsHeroSection,
  IntegrationTrustBoundarySection,
  CapabilityMapSection,
  ArchitecturePatternsSection,
  ObjectsAndIdentifiersSection,
  AuthorizationAndEnvironmentsSection,
  DataAndSourceOfTruthRulesSection,
  WritesAndActionReviewSection,
  SecurityArchitectureSection,
  ReliabilityAndObservabilitySection,
  DeveloperExperienceSection,
  ImplementationModelSection,
  FAQSection,
  FinalStepSection,
} from "@/components/integration-api";

export const metadata: Metadata = {
  title: "Room Management API and Integrations | Zoiko Rooms",
  description:
    "Zoiko Rooms offers a secure room management API for syncing room inventory, availability, applications, payments, identity, agreements and support.",
};

export default function IntegrationApiPage() {
  return (
    <main>
      <IntegrationsHeroSection />
      <IntegrationTrustBoundarySection />
      <CapabilityMapSection />
      <ArchitecturePatternsSection />
      <ObjectsAndIdentifiersSection />
      <AuthorizationAndEnvironmentsSection />
      <DataAndSourceOfTruthRulesSection />
      <WritesAndActionReviewSection />
      <SecurityArchitectureSection />
      <ReliabilityAndObservabilitySection />
      <DeveloperExperienceSection />
      <ImplementationModelSection />
      <FAQSection />
      <FinalStepSection />
    </main>
  );
}
