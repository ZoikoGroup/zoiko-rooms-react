import { Container } from "@/components/ui";
import { HeroSection } from "./HeroSection";
import { TableOfContentsSidebar } from "./TableOfContentsSidebar";
import { ScopeControllerSection } from "./ScopeControllerSection";
import { InformationCollectedSection } from "./InformationCollectedSection";
import { SourcesPurposesSection } from "./SourcesPurposesSection";
import { RequirementSharingSection } from "./RequirementSharingSection";
import { PaymentsVerificationSection } from "./PaymentsVerificationSection";
import { AutomationCookiesSection } from "./AutomationCookiesSection";
import { TransfersRetentionSecuritySection } from "./TransfersRetentionSecuritySection";
import { RightsChildrenSection } from "./RightsChildrenSection";
import { RegionalContactSection } from "./RegionalContactSection";
import { ChangesRelatedSection } from "./ChangesRelatedSection";

export function PrivacyNoticeView() {
  return (
    <>
      <HeroSection />
      <Container className="border-t border-[#E9E0D3] pb-20 pt-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <TableOfContentsSidebar />
          <div className="min-w-0 flex-1">
            <ScopeControllerSection />
            <InformationCollectedSection />
            <SourcesPurposesSection />
            <RequirementSharingSection />
            <PaymentsVerificationSection />
            <AutomationCookiesSection />
            <TransfersRetentionSecuritySection />
            <RightsChildrenSection />
            <RegionalContactSection />
            <ChangesRelatedSection />
          </div>
        </div>
      </Container>
    </>
  );
}
