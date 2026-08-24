"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, DotSteps, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const steps = [
  {
    title: "Define location and timing",
    description: "Workplace/healthcare location or general area, assignment dates, travel window, budget, and essential needs.",
  },
  {
    title: "Review relationship",
    description: "Understand independent, referred, distributed, managed, or no confirmed relationship.",
  },
  {
    title: "Compare current rooms",
    description: "Availability, total cost, travel estimate, stay, furnishing, access, household, and authority.",
  },
  {
    title: "Confirm travel assumptions",
    description: "Service schedules, parking, route accessibility, and alternative modes.",
  },
  {
    title: "Communicate safely",
    description: "Use approved channels; disclose only necessary information.",
  },
];

export function GuidedSeekerStepsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Guided Seeker Steps")}</Eyebrow>
            <SectionTitle>{t("From search to move-in")}</SectionTitle>
          </div>

          <DotSteps steps={steps.map(({ title, description }) => ({ title: t(title), description: t(description) }))} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
