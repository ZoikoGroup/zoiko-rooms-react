"use client";

import { useState } from "react";
import GlossaryHeroSection from "./GlossaryHeroSection";
import BrowseByTopicSection from "./BrowseByTopicSection";
import AZIndexSection from "./AZIndexSection";
import CompleteCostExampleSection from "./CompleteCostExampleSection";
import ActionCalloutSection from "./ActionCalloutSection";

export default function GlossaryView() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [jumpToTermId, setJumpToTermId] = useState<string | null>(null);

  return (
    <main>
      <GlossaryHeroSection onSelectQuestionTerm={setJumpToTermId} />
      <BrowseByTopicSection onSelectCategory={setActiveCategory} />
      <AZIndexSection
        activeCategory={activeCategory}
        onClearCategory={() => setActiveCategory(null)}
        jumpToTermId={jumpToTermId}
        onJumpHandled={() => setJumpToTermId(null)}
      />
      <CompleteCostExampleSection />
      <ActionCalloutSection />
    </main>
  );
}
