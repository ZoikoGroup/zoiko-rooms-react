import type { Metadata } from "next";

import {
  TransactionLifecycleSection,
  OperationalNeedsSection,
  AgreementLifecycleSection,
  PaymentLifecycleAndRolesSection,
  InstitutionalContributionsSection,
  CommonQuestionsFAQSection,
  CallToActionSection,
} from "@/components/application-payment";

export const metadata: Metadata = {
  title: "Room Applications Management Platform | Zoiko Rooms",
  description:
    "Zoiko Rooms streamlines rental application management with digital workflows for applicant details, verification, room matching, approvals and communication.",
};

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
