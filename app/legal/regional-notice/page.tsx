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
