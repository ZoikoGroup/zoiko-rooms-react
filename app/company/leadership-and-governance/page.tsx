import {
  LeadershipGovernanceSection,
  LeadershipDirectorySection,
  GovernanceOversightSection,
  DecisionRightsSection,
  GovernanceDocumentsSection,
  CorporateStructureSection,
  AuthoritativeSourcesSection,
  DirectAnswersFAQSection,
} from "@/components/leadership-and-governance";

export default function LeadershipAndGovernancePage() {
  return (
    <main>
      <LeadershipGovernanceSection />
      <LeadershipDirectorySection />
      <GovernanceOversightSection />
      <DecisionRightsSection />
      <GovernanceDocumentsSection />
      <CorporateStructureSection />
      <AuthoritativeSourcesSection />
      <DirectAnswersFAQSection />
    </main>
  );
}
