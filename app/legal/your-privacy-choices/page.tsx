import type { Metadata } from "next";
import {
  HeroSection,
  PrivacyContextSection,
  QuickPrivacyChoicesSection,
  BrowserPrivacySignalSection,
  DeletionAccountClosureSection,
  AutomatedDecisionsSection,
  RequestStatusHistorySection,
  AuthorizedAgentAppealsSection,
  RelatedControlsSection,
} from "@/components/privacy-choices";

export const metadata: Metadata = {
  title: "Your Privacy Choices — Zoiko Rooms",
  description:
    "Manage privacy choices and exercise data rights — opt-outs, deletion, automated-decision explanations, and request tracking in one place.",
};

export default function YourPrivacyChoicesPage() {
  return (
    <>
      <HeroSection />
      <PrivacyContextSection />
      <QuickPrivacyChoicesSection />
      <BrowserPrivacySignalSection />
      <DeletionAccountClosureSection />
      <AutomatedDecisionsSection />
      <RequestStatusHistorySection />
      <AuthorizedAgentAppealsSection />
      <RelatedControlsSection />
    </>
  );
}
