import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Room Management Platform for Providers | Zoiko Rooms",
  description:
    "Zoiko Rooms Pro is a room management platform for portfolios, institutional distribution, availability, applications, agreements, payments, and evidence.",
};

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
