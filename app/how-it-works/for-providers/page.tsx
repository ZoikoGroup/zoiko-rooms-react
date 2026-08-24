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
  title: "Room Provider Guide for Easy Listings | Zoiko Rooms",
  description:
    "Become a room provider with Zoiko Rooms and learn how to list your rooms, manage bookings, connect with guests, and grow your rental opportunities easily.",
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
