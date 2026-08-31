"use client";

import { useState } from "react";
import HelpCenterHeroSection from "./HelpCenterHeroSection";
import HelpAnswerExampleSection from "./HelpAnswerExampleSection";
import SmallestAccountableRequestSection from "./SmallestAccountableRequestSection";
import CaseStatusAndPopularHelpSection from "./CaseStatusAndPopularHelpSection";
import SafetyAndPrivacySection from "./SafetyAndPrivacySection";
import OrganizationsProSupportSection from "./OrganizationsProSupportSection";
import FAQSection from "./FAQSection";
import NextStepsCalloutSection from "./NextStepsCalloutSection";

export default function HelpCenterView() {
  const [issueCategory, setIssueCategory] = useState("Account & Identity");
  const [yourRole, setYourRole] = useState("Room Seeker");

  return (
    <main>
      <HelpCenterHeroSection onSelectCategory={setIssueCategory} />
      <HelpAnswerExampleSection selectedPersona={yourRole} onSelectPersona={setYourRole} />
      <SmallestAccountableRequestSection
        issueCategory={issueCategory}
        onIssueCategoryChange={setIssueCategory}
        yourRole={yourRole}
        onYourRoleChange={setYourRole}
      />
      <CaseStatusAndPopularHelpSection />
      <SafetyAndPrivacySection />
      <OrganizationsProSupportSection />
      <FAQSection />
      <NextStepsCalloutSection />
    </main>
  );
}
