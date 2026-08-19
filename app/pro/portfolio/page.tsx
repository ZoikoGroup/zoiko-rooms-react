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
