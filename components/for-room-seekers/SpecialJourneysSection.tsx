"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const journeys = [
  {
    title: "University",
    description: "Institution/area search, term dates, and scoped relationship. No endorsement unless authorized.",
  },
  {
    title: "Work & healthcare",
    description: "Workplace/healthcare destination, rotation dates, and privacy. No employment/clinical suitability claim.",
  },
  {
    title: "International",
    description: "Arrival window, remote viewing, original currency. No immigration or legal guarantee.",
  },
  {
    title: "Accessibility-led",
    description: "Specific features/evidence and viewing support. No medical suitability claim.",
  },
  {
    title: "Organization-referred",
    description: "Referral, allocation, subsidy, or direct billing. Relationship does not guarantee outcome.",
  },
  {
    title: "Flexible / no inventory",
    description: "Broaden area/dates/budget/stay, alerts, and nearby routes — never fabricated inventory.",
  },
];

export function SpecialJourneysSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Special Journeys</Eyebrow>
            <SectionTitle>Adapted for your situation</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {journeys.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
