import type { Metadata } from "next";
import {
  IntroSection,
  CheckRightThingSection,
  EvidenceLifecycleSection,
  ProviderAuthoritySection,
  ActionSpecificAuthoritySection,
  OrganizationAuthoritySection,
  PublicStatusDisplaySection,
  DisputesRevocationSection,
  PrivacySecuritySection,
  FaqSection,
  FinalCtaSection,
} from "@/components/verification-authority";

export const metadata: Metadata = {
  title: "Room Verification and Authority | Zoiko Rooms",
  description:
    "Zoiko Rooms connects verification and authority to source evidence, helping confirm room data, provider responsibility, status, limitations, and decisions.",
};

export default function VerificationAuthorityPage() {
  return (
    <>
      <IntroSection />
      <CheckRightThingSection />
      <EvidenceLifecycleSection />
      <ProviderAuthoritySection />
      <ActionSpecificAuthoritySection />
      <OrganizationAuthoritySection />
      <PublicStatusDisplaySection />
      <DisputesRevocationSection />
      <PrivacySecuritySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
