"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const pathways = [
  {
    number: "01",
    title: "Search Before Arrival",
    description:
      "Destination, expected arrival, budget, stay, furnishing, and remote-viewing needs.",
  },
  {
    number: "02",
    title: "Understand Costs",
    description:
      "Original currency stays visible — rent, deposit, required fees, bills, and known upfront total.",
  },
  {
    number: "03",
    title: "Prepare Documents",
    description: "What may be requested, why, by whom, when, and how it's protected.",
  },
  {
    number: "04",
    title: "Move Safely",
    description: "Provider authority, room evidence, agreement, payment route, support, and arrival plan.",
  },
];

export function PathwaysSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b bg-[#fff] border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Move-Planning Pathways")}</Eyebrow>
            <SectionTitle>{t("Four things to get right before you commit")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
