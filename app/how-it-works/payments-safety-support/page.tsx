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
  title: "Secure Room Rental Payments & Safety Guide | Zoiko Rooms",
  description:
    "Get secure room rental payments with Zoiko Rooms. Learn about payment safety, fraud prevention, and reliable support for a trusted room booking experience.",
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
