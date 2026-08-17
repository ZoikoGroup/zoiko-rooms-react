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
