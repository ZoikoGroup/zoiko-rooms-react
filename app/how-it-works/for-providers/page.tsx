import type { Metadata } from "next";
import {
  HeroSection,
  BindingBoundarySection,
  ProviderLifecycleSection,
  ProviderPathsSection,
  PrivateDraftVerificationSection,
  RoomFactsCostsSection,
  CommunicationViewingsSection,
  ApplicationsDecisionsSection,
  AgreementsPaymentsSection,
  PublishManageSection,
  RoomPassportSection,
  OrganizationsProSection,
  FaqSection,
  ProviderSupportSection,
} from "@/components/for-providers";

export const metadata: Metadata = {
  title: "For Providers — Zoiko Rooms",
  description:
    "Prepare, publish, and manage a room through clear authority, accurate facts, complete costs, fair decisions, and accountable follow-through.",
};

export default function ForProvidersPage() {
  return (
    <>
      <HeroSection />
      <BindingBoundarySection />
      <ProviderLifecycleSection />
      <ProviderPathsSection />
      <PrivateDraftVerificationSection />
      <RoomFactsCostsSection />
      <CommunicationViewingsSection />
      <ApplicationsDecisionsSection />
      <AgreementsPaymentsSection />
      <PublishManageSection />
      <RoomPassportSection />
      <OrganizationsProSection />
      <FaqSection />
      <ProviderSupportSection />
    </>
  );
}
