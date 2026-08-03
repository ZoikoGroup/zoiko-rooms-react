"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle } from "./shared";

const pathways = [
  {
    number: "01",
    title: "Search by Work Location",
    description: "Choose a workplace, project site, station, or supported area.",
  },
  {
    number: "02",
    title: "Search by Healthcare Location",
    description: "Choose a hospital, clinic, campus, training site, or supported area.",
  },
  {
    number: "03",
    title: "Plan Shift or Rotation Timing",
    description: "Use start/end dates, flexible arrival, night shifts, or short assignments.",
  },
  {
    number: "04",
    title: "Review Safety and Support",
    description: "Understand viewing, communication, payment, reporting, and organization support.",
  },
];

export function PathwaysSection() {
  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Discovery Pathways</Eyebrow>
            <SectionTitle>Four ways to start</SectionTitle>
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
