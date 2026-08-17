import {
  ComplianceVerificationHero,
  VerificationStatusSection,
  EntityBoundariesSection,
  PolicyRequirementsSection,
  HumanDecisionWorkflowSection,
  VerificationRenewalSection,
  FairnessSafeguardsSection,
  ProtectedReportsSection,
  SeparationOfDutiesSection,
  OperationalVisibilitySection,
  IntegrationDecisionSection,
  OperatingRhythmSection,
  FAQSection,
  GovernedRecordCTASection,
} from "@/components/compliance-and-verification";

export default function CompAndVerPage() {
  return (
    <main>
      <ComplianceVerificationHero />
      <VerificationStatusSection />
      <EntityBoundariesSection />
      <PolicyRequirementsSection />
      <HumanDecisionWorkflowSection />
      <VerificationRenewalSection />
      <FairnessSafeguardsSection />
      <ProtectedReportsSection />
      <SeparationOfDutiesSection />
      <OperationalVisibilitySection />
      <IntegrationDecisionSection />
      <OperatingRhythmSection />
      <FAQSection />
      <GovernedRecordCTASection />
    </main>
  );
}
