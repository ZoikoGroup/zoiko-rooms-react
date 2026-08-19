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
