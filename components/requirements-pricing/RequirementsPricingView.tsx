"use client";

import { useMemo, useState } from "react";
import { CalculatorHeroSection, type CalculatorState } from "./CalculatorHeroSection";
import { SharedRequirementsSection } from "./SharedRequirementsSection";
import { ProviderPathComparisonSection } from "./ProviderPathComparisonSection";
import { EvidenceReviewSection } from "./EvidenceReviewSection";
import { PlatformPricingBreakdownSection } from "./PlatformPricingBreakdownSection";
import { RoomCostDisclosureSection } from "./RoomCostDisclosureSection";
import { OrganizationsProSection } from "./OrganizationsProSection";
import { PriceChangesSection } from "./PriceChangesSection";
import { computePricingBreakdown } from "./pricing";
import { providerTypeOptions, locationOptions, accountTypeOptions, locationToCountry } from "./data";

const DEFAULT_DRAFT: CalculatorState = {
  providerType: providerTypeOptions[0],
  location: locationOptions[0],
  activeRooms: "1",
  accountType: accountTypeOptions[0],
  billingCountry: locationToCountry[locationOptions[0]],
};

export function RequirementsPricingView() {
  const [draft, setDraft] = useState<CalculatorState>(DEFAULT_DRAFT);
  const [applied, setApplied] = useState<CalculatorState>(DEFAULT_DRAFT);

  const result = useMemo(
    () => computePricingBreakdown(applied.providerType, applied.activeRooms, applied.accountType, false),
    [applied],
  );

  const resultKey = `${applied.providerType}|${applied.location}|${applied.activeRooms}|${applied.accountType}`;

  return (
    <>
      <CalculatorHeroSection draft={draft} onDraftChange={setDraft} onSubmit={() => setApplied(draft)} />
      <SharedRequirementsSection />
      <ProviderPathComparisonSection />
      <EvidenceReviewSection />
      <PlatformPricingBreakdownSection rows={result.rows} outOfScope={result.outOfScope} resultKey={resultKey} />
      <RoomCostDisclosureSection />
      <OrganizationsProSection />
      <PriceChangesSection />
    </>
  );
}
