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
  title: "Your Privacy Choices & Data Rights | Zoiko Rooms",
  description:
    "Learn about your Zoiko Rooms privacy choices, including data access, deletion, advertising opt-outs, marketing preferences, and how to manage your rights.",
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
