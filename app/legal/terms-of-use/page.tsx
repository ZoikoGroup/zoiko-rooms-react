import {
  TermsOfUseHeader,
  TableOfContentsSidebar,
  AboutTheseTermsSection,
  WhoYouContractWithSection,
  EligibilityAccountsSection,
  PlatformRoleSection,
  UserTypesSection,
  ListingsAndSearchSection,
  ApplicationsAgreementsSection,
  StaysOccupancySection,
  FeesPaymentsSection,
  CancellationsDisputesSection,
  VerificationSafetySection,
  FairHousingSection,
  CommunityStandardsSection,
  UserContentIpSection,
  ThirdPartyServicesSection,
  SuspensionTerminationSection,
  DisclaimersLiabilitySection,
  GoverningLawDisputesSection,
  ChangesToTermsSection,
  ContactLegalNoticesSection,
} from "@/components/terms-of-use";

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#FBF8F3]">
      {/* Header Banner */}
      <TermsOfUseHeader />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Left Sticky Sidebar */}
          <TableOfContentsSidebar />

          {/* Right Main Sections Column */}
          <div className="min-w-0 flex-1">
            <AboutTheseTermsSection />
            <WhoYouContractWithSection />
            <EligibilityAccountsSection />
            <PlatformRoleSection />
            <UserTypesSection />
            <ListingsAndSearchSection />
            <ApplicationsAgreementsSection />
            <StaysOccupancySection />
            <FeesPaymentsSection />
            <CancellationsDisputesSection />
            <VerificationSafetySection />
            <FairHousingSection />
            <CommunityStandardsSection />
            <UserContentIpSection />
            <ThirdPartyServicesSection />
            <SuspensionTerminationSection />
            <DisclaimersLiabilitySection />
            <GoverningLawDisputesSection />
            <ChangesToTermsSection />
            <ContactLegalNoticesSection />
          </div>
        </div>
      </div>
    </main>
  );
}
