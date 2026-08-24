"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, Callout, SectionDivider } from "./shared";

const steps = [
  {
    number: "01",
    title: "Choose path",
    description: "Match the actual relationship to the room.",
  },
  {
    number: "02",
    title: "Start private draft",
    description: "Save facts before public exposure.",
  },
  {
    number: "03",
    title: "Confirm identity and authority",
    description: "Prove the exact room, dates, and actions covered.",
  },
  {
    number: "04",
    title: "Describe and disclose",
    description: "Room, home, media, availability, costs, terms, payment.",
  },
];

export function BindingBoundarySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Binding Boundary")}</Eyebrow>
            <SectionTitle>{t("Identity is not authority")}</SectionTitle>
            <Paragraph>
              {t(
                "Confirming who a provider is does not prove ownership, agency instruction, lawful occupation, sublet permission, organization authority, payment authority, or the right to make every later decision.",
              )}
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, title, description }) => (
              <Card key={number} className="flex flex-col gap-2">
                <span className="font-heading text-3xl font-semibold text-brand-red/40">{number}</span>
                <h3 className="font-heading text-lg font-medium text-brand-navy">{t(title)}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>

          <Callout label={t("Authority is action specific")} className="max-w-3xl">
            {t(
              "The person allowed to publish a listing may not be allowed to access applicant documents, decide an application, sign an agreement, change payment details, issue a refund, add team members, or export data. Each consequential action requires its own authorized role.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
