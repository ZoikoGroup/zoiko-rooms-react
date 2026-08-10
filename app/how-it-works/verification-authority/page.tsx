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
  title: "Verification & Authority — Zoiko Rooms",
  description:
    "Know what was checked, whose authority applies, and what each status does — and does not — prove, across identity, listing authority, room evidence, and more.",
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
