"use client";

import { useState } from "react";
import PartnershipsHeroSection from "./PartnershipsHeroSection";
import WhyPartnerWithUsSection from "./WhyPartnerWithUsSection";
import ApprovedPartnershipPathsSection from "./ApprovedPartnershipPathsSection";
import WhoItMayFitSection from "./WhoItMayFitSection";
import PartnershipEvaluationProcessSection from "./PartnershipEvaluationProcessSection";
import PartnerValueEnablementSection from "./PartnerValueEnablementSection";
import TechnicalReadinessSection from "./TechnicalReadinessSection";
import BrandGovernanceSection from "./BrandGovernanceSection";
import DataPrivacyLegalBoundariesSection from "./DataPrivacyLegalBoundariesSection";
import ApprovedPartnerProofSection from "./ApprovedPartnerProofSection";
import SubmitPartnershipInterestSection from "./SubmitPartnershipInterestSection";
import ApprovedPartnerPortalCallout from "./ApprovedPartnerPortalCallout";
import PartnershipFaqSection from "./PartnershipFaqSection";

export default function PartnershipsView() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <main>
      <PartnershipsHeroSection />
      <WhyPartnerWithUsSection />
      <ApprovedPartnershipPathsSection onSelectPath={setSelectedPath} />
      <WhoItMayFitSection />
      <PartnershipEvaluationProcessSection />
      <PartnerValueEnablementSection />
      <TechnicalReadinessSection />
      <BrandGovernanceSection />
      <DataPrivacyLegalBoundariesSection />
      <ApprovedPartnerProofSection />
      <SubmitPartnershipInterestSection initialPath={selectedPath} />
      <ApprovedPartnerPortalCallout />
      <PartnershipFaqSection />
    </main>
  );
}
