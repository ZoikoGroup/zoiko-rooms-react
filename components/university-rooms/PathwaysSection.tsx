"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle } from "./shared";

const pathways = [
  {
    number: "01",
    title: "Search by University",
    description: "Choose a supported institution or campus and apply term-aware search.",
  },
  {
    number: "02",
    title: "Explore Current Rooms",
    description: "Review availability, price, provider authority, and room facts.",
  },
  {
    number: "03",
    title: "Plan International Arrival",
    description: "Understand timing, documents, currency, payments, and uncertainty.",
  },
  {
    number: "04",
    title: "Get Student Safety Help",
    description: "Review scam signs, viewings, payments, reporting, and support.",
  },
];

export function PathwaysSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Quick-Need Pathways</Eyebrow>
            <SectionTitle>Four ways to move forward</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
