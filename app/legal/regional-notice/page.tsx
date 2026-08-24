import type { Metadata } from "next";

import {
  RegionalLegalHeroSection,
  LegalContextSection,
  ApplicableNoticesSection,
  WhoYouContractWithSection,
  HousingPropertyNoticesSection,
  ConsumerPaymentsPrivacySection,
  DisputesRegulatorsRedressSection,
  VersionEffectiveDateSection,
  RelatedLegalPagesSection,
} from "@/components/regional-notice";

export const metadata: Metadata = {
  title: "Regional Notice & Legal Information | Zoiko Rooms ",
  description:
    "Read the Zoiko Rooms regional legal notice for information on regional requirements, applicable terms, service availability, and important obligations.",
};

export default function RegionalLegalNoticePage() {
  return (
    <main>
      <RegionalLegalHeroSection />
      <LegalContextSection />
      <ApplicableNoticesSection />
      <WhoYouContractWithSection />
      <HousingPropertyNoticesSection />
      <ConsumerPaymentsPrivacySection />
      <DisputesRegulatorsRedressSection />
      <VersionEffectiveDateSection />
      <RelatedLegalPagesSection />
    </main>
  );
}
