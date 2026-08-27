import {
  ComplianceHeroSection,
  GovernFitSection,
  ComplianceToolingSection,
  ScopedStatesSection,
  RestrictionRestorationSection,
  BoundarySection,
  OtherPathsSection,
  DirectAnswersFaqSection,
  ReadyWhenYouAreSection,
} from "@/components/compliance-tooling";

export default function ComplianceToolingPage() {
  return (
    <main>
      <ComplianceHeroSection />
      <GovernFitSection />
      <ComplianceToolingSection />
      <ScopedStatesSection />
      <RestrictionRestorationSection />
      <BoundarySection />
      <OtherPathsSection />
      <DirectAnswersFaqSection />
      <ReadyWhenYouAreSection />
    </main>
  );
}
