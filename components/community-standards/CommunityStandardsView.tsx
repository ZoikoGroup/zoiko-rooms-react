import { Container } from "@/components/ui";
import { HeroSection } from "./HeroSection";
import { IntroCalloutSection } from "./IntroCalloutSection";
import { TableOfContentsSidebar } from "./TableOfContentsSidebar";
import { PrinciplesSection } from "./PrinciplesSection";
import { RespectEveryoneSection } from "./RespectEveryoneSection";
import { HonestAccurateSection } from "./HonestAccurateSection";
import { KeepPeopleSafeSection } from "./KeepPeopleSafeSection";
import { ProtectPrivacySection } from "./ProtectPrivacySection";
import { UseResponsiblySection } from "./UseResponsiblySection";
import { RespectHomesSection } from "./RespectHomesSection";
import { ConductNotAllowedSection } from "./ConductNotAllowedSection";
import { ReportingSection } from "./ReportingSection";
import { EnforcementSection } from "./EnforcementSection";
import { ReviewsAppealsSection } from "./ReviewsAppealsSection";
import { LocalRequirementsSection } from "./LocalRequirementsSection";
import { RelatedPoliciesSection } from "./RelatedPoliciesSection";
import { FaqSection } from "./FaqSection";
import { NeedHelpSection } from "./NeedHelpSection";
import { DocMetaFooterSection } from "./DocMetaFooterSection";

export function CommunityStandardsView() {
  return (
    <>
      <HeroSection />
      <IntroCalloutSection />
      <Container className="pb-20 pt-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <TableOfContentsSidebar />
          <div className="min-w-0 flex-1">
            <PrinciplesSection />
            <RespectEveryoneSection />
            <HonestAccurateSection />
            <KeepPeopleSafeSection />
            <ProtectPrivacySection />
            <UseResponsiblySection />
            <RespectHomesSection />
            <ConductNotAllowedSection />
            <ReportingSection />
            <EnforcementSection />
            <ReviewsAppealsSection />
            <LocalRequirementsSection />
            <RelatedPoliciesSection />
            <FaqSection />
          </div>
        </div>
      </Container>
      <NeedHelpSection />
      <DocMetaFooterSection />
    </>
  );
}
