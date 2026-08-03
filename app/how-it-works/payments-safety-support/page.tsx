import type { Metadata } from "next";
import {
  HeroSection,
  SafetyOverviewSection,
  BeforePayingSection,
  PaymentLifecycleSection,
  SaferCommunicationSection,
  FraudAccountRecoverySection,
  RefundsDisputesSection,
  SupportIncidentLifecycleSection,
  OrganizationProSupportSection,
  PrivacyFairnessAccessibilitySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/payments-safety-support";

export const metadata: Metadata = {
  title: "Payments, Safety & Support — Zoiko Rooms",
  description:
    "Know what you are paying, who receives it, how to act safely, and where to get help at every stage — costs, authorized routes, fraud prevention, and the support lifecycle.",
};

export default function PaymentsSafetySupportPage() {
  return (
    <>
      <HeroSection />
      <SafetyOverviewSection />
      <BeforePayingSection />
      <PaymentLifecycleSection />
      <SaferCommunicationSection />
      <FraudAccountRecoverySection />
      <RefundsDisputesSection />
      <SupportIncidentLifecycleSection />
      <OrganizationProSupportSection />
      <PrivacyFairnessAccessibilitySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
