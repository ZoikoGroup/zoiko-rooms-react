import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Rental Safety and Scam Prevention Guide | Zoiko Rooms",
  description:
    "Learn how to spot rental scams, verify Zoiko Rooms listings, protect payments and credentials, and stay safe when sharing documents or meeting others.",
};

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
