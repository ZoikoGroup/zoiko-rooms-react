import {
  ZoikoRoomsProHeroSection,
  FiveCapabilitiesSection,
  UnifiedOperatingModelSection,
  HowOperatingGraphIsBuilt,
  PortfolioAndAvailabilitySection,
  ComplianceAndVerificationSection,
  ApplicationsAgreementsPaymentsSection,
  InstitutionalDistributionSection,
  IntegrationsAndApiSection,
  RolesAuditAndReportingSection,
  ImplementationModelSection,
  AssuranceAndProcurementSection,
  FAQSection,
} from "@/components/pro-overview";

export default function OverviewPage() {
  return (
    <main>
      <ZoikoRoomsProHeroSection />
      <FiveCapabilitiesSection />
      <UnifiedOperatingModelSection />
      <HowOperatingGraphIsBuilt />
      <PortfolioAndAvailabilitySection />
      <ComplianceAndVerificationSection />
      <ApplicationsAgreementsPaymentsSection />
      <InstitutionalDistributionSection />
      <IntegrationsAndApiSection />
      <RolesAuditAndReportingSection />
      <ImplementationModelSection />
      <AssuranceAndProcurementSection />
      <FAQSection />
    </main>
  );
}
