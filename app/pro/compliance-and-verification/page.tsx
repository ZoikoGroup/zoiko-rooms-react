import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Rental Compliance & Verification | Zoiko Rooms",
  description:
    "Simplify rental compliance and verification with Zoiko Rooms. Verify applicants, documents, identity and eligibility through secure, governed workflows.",
};

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
