"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const scope = [
  {
    title: "What it is",
    description:
      "A platform for private individual rooms, generally rented for 30 consecutive nights or longer, supported by verification, structured transactions and occupancy records.",
  },
  {
    title: "What it is not",
    description:
      "A hotel-booking service, vacation-rental marketplace, dormitory-bed exchange, general property portal or informal social roommate board.",
  },
];

export function ScopeSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Scope</Eyebrow>
            <SectionTitle>What Zoiko Rooms Is — and Is Not</SectionTitle>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {scope.map(({ title, description }) => (
              <Card key={title}>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
