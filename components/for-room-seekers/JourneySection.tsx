"use client";

import { useState } from "react";
import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle } from "./shared";

const stages = ["Search", "Compare", "Communicate", "View", "Apply or reserve", "Agree", "Pay and move", "Support"];

const steps = [
  {
    number: "01",
    title: "Search",
    description: "Location, dates, budget, stay, room/home, accessibility, and practical context.",
  },
  {
    number: "02",
    title: "Compare",
    description: "Current facts, sources, dates, limitations, costs, and status side by side.",
  },
  {
    number: "03",
    title: "Communicate",
    description: "Accountable questions, roles, scheduling, reporting, and support.",
  },
  {
    number: "04",
    title: "View",
    description: "Remote or in-person with controlled address and participant details.",
  },
];

export function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Your Journey</Eyebrow>
            <SectionTitle>Every stage, in order</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-2">
            {stages.map((stage, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-transparent bg-[#F1E7DA] text-[#A85A34] hover:bg-[#EADCC7]"
                  }`}
                >
                  {index + 1}. {stage}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }) => (
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
