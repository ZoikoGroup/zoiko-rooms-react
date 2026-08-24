"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const steps = [
  {
    number: "01",
    title: "Define authority",
    description: "Program purpose, public body, geography, and funding.",
  },
  {
    number: "02",
    title: "Confirm roles",
    description: "Sponsor, eligibility, provider, and support owners.",
  },
  {
    number: "03",
    title: "Connect supply",
    description: "Approved providers, current rooms, and complete costs.",
  },
  {
    number: "04",
    title: "Guide participants",
    description: "Search or allocation, agreement, funding, and support.",
  },
];

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <Eyebrow>{t("How It Works")}</Eyebrow>
            <SectionTitle>{t("From program authority to move-in")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "A governed path from confirming authority to supporting a participant through their stay — closed out cleanly at review or exit."
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-1.5">
                <span className="font-heading text-sm font-semibold text-brand-red">{number}</span>
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
