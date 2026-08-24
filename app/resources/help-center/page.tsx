import type { Metadata } from "next";

import {
  HelpCenterHeroSection,
  HelpAnswerExampleSection,
  SmallestAccountableRequestSection,
  CaseStatusAndPopularHelpSection,
  SafetyAndPrivacySection,
  OrganizationsProSupportSection,
  FAQSection,
  NextStepsCalloutSection,
} from "@/components/help-center";

export const metadata: Metadata = {
  title: "Help Center for Rooms and Listings | Zoiko Rooms",
  description:
    "Find help for rooms, listings, applications, agreements, payments and account issues. Get safety guidance and support paths from Zoiko Rooms help center.",
};

export default function HelpCenterPage() {
  return (
    <main>
      <HelpCenterHeroSection />
      <HelpAnswerExampleSection />
      <SmallestAccountableRequestSection />
      <CaseStatusAndPopularHelpSection />
      <SafetyAndPrivacySection />
      <OrganizationsProSupportSection />
      <FAQSection />
      <NextStepsCalloutSection />
    </main>
  );
}
