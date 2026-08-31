import { Container } from "@/components/ui";
import { HeroSection } from "./HeroSection";
import { TableOfContentsSidebar } from "./TableOfContentsSidebar";
import { CommitmentSection } from "./CommitmentSection";
import { DiscriminationLookLikeSection } from "./DiscriminationLookLikeSection";
import { ListingsAdvertisingSection } from "./ListingsAdvertisingSection";
import { ViewingsApplicationsSection } from "./ViewingsApplicationsSection";
import { ScreeningRentalTermsSection } from "./ScreeningRentalTermsSection";
import { AccessibilitySection } from "./AccessibilitySection";
import { SharedHomesSection } from "./SharedHomesSection";
import { ReportDiscriminationSection } from "./ReportDiscriminationSection";
import { ReviewReportsSection } from "./ReviewReportsSection";
import { EnforcementReviewsSection } from "./EnforcementReviewsSection";
import { LocalRequirementsSection } from "./LocalRequirementsSection";
import { FaqSection } from "./FaqSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { DocMetaFooterSection } from "./DocMetaFooterSection";

export function FairHousingView() {
  return (
    <>
      <HeroSection />
      <Container className="pb-20 pt-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <TableOfContentsSidebar />
          <div className="min-w-0 flex-1">
            <CommitmentSection />
            <DiscriminationLookLikeSection />
            <ListingsAdvertisingSection />
            <ViewingsApplicationsSection />
            <ScreeningRentalTermsSection />
            <AccessibilitySection />
            <SharedHomesSection />
            <ReportDiscriminationSection />
            <ReviewReportsSection />
            <EnforcementReviewsSection />
            <LocalRequirementsSection />
          </div>
        </div>
      </Container>
      <FaqSection />
      <FinalCtaSection />
      <DocMetaFooterSection />
    </>
  );
}
