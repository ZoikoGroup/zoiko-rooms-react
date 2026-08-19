import {
  TransactionLifecycleSection,
  OperationalNeedsSection,
  AgreementLifecycleSection,
  PaymentLifecycleAndRolesSection,
  InstitutionalContributionsSection,
  CommonQuestionsFAQSection,
  CallToActionSection,
} from "@/components/application-payment";

export default function ApplicationPage() {
  return (
    <main>
      <TransactionLifecycleSection />
      <OperationalNeedsSection />
      <AgreementLifecycleSection />
      <PaymentLifecycleAndRolesSection />
      <InstitutionalContributionsSection />
      <CommonQuestionsFAQSection />
      <CallToActionSection />
    </main>
  );
}
