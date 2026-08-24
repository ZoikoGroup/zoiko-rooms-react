import type { Metadata } from "next";

import {
  PortfolioHeroSection,
  OperatingViewSection,
  PortfolioStructureSection,
  RoomPassportOperationsSection,
  AvailabilityLedgerSection,
  CostsAndRestrictionsSection,
  MaintenanceAndExceptionsSection,
  ImportsAndBulkActionsSection,
  PublishingAndDistributionSection,
  RolesAndActionReviewSection,
  PortfolioAvailabilityDashboardSection,
  IntegrationsAndApiSection,
  ImplementationAndMigrationSection,
  FAQSection,
} from "@/components/portfolio";

export const metadata: Metadata = {
  title: "Room Portfolio Management & Availability | Zoiko Rooms",
  description:
    "Operate room portfolios from current evidence with Zoiko Rooms. Manage properties, rooms, availability, costs, restrictions, maintenance and publishing.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioHeroSection />
      <OperatingViewSection />
      <PortfolioStructureSection />
      <RoomPassportOperationsSection />
      <AvailabilityLedgerSection />
      <CostsAndRestrictionsSection />
      <MaintenanceAndExceptionsSection />
      <ImportsAndBulkActionsSection />
      <PublishingAndDistributionSection />
      <RolesAndActionReviewSection />
      <PortfolioAvailabilityDashboardSection />
      <IntegrationsAndApiSection />
      <ImplementationAndMigrationSection />
      <FAQSection />
    </main>
  );
}
