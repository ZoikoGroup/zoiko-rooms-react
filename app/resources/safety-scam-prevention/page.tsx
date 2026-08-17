import {
  SafetyScamPreventionSection,
  ActiveRiskStepsSection,
  RiskCheckerSection,
  VerifyRecordSection,
  ReportSafetyIssueSection,
  RecoveryPlaybooksSection,
  SafetyControlsSection,
  FAQSection,
} from "@/components/safety-scam-prevention";

export default function SafetyScamPreventPage() {
  return (
    <main>
      <SafetyScamPreventionSection />
      <ActiveRiskStepsSection />
      <RiskCheckerSection />
      <VerifyRecordSection />
      <ReportSafetyIssueSection />
      <RecoveryPlaybooksSection />
      <SafetyControlsSection />
      <FAQSection />
    </main>
  );
}
