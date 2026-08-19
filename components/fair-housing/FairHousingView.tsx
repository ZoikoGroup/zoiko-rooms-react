"use client";

import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { ProtectedGroundsSection } from "./ProtectedGroundsSection";
import { LegitimateCriteriaSection } from "./LegitimateCriteriaSection";
import { DisabilityAccessibilitySection } from "./DisabilityAccessibilitySection";
import { HarassmentRetaliationSafetySection } from "./HarassmentRetaliationSafetySection";
import { PlatformEnforcementSection } from "./PlatformEnforcementSection";
import { ReportDiscriminationSection } from "./ReportDiscriminationSection";
import { RegionalRulesSection } from "./RegionalRulesSection";
import { FaqSection } from "./FaqSection";
import type { RegionKey } from "./data";

export function FairHousingView() {
  const [region, setRegion] = useState<RegionKey>("england");

  return (
    <>
      <HeroSection region={region} onRegionChange={setRegion} />
      <ProtectedGroundsSection />
      <LegitimateCriteriaSection />
      <DisabilityAccessibilitySection />
      <HarassmentRetaliationSafetySection />
      <PlatformEnforcementSection />
      <ReportDiscriminationSection />
      <RegionalRulesSection region={region} />
      <FaqSection />
    </>
  );
}
