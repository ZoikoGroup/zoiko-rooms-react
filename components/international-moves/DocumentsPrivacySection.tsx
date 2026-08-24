"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const documents = [
  {
    title: "Identity evidence",
    description: "Confirms applicant/provider identity where necessary. Minimum fields, secure collection, no public upload.",
  },
  {
    title: "Study evidence",
    description: "Confirms current program eligibility where required. Student ID is never exposed publicly.",
  },
  {
    title: "Employment / assignment evidence",
    description: "Confirms income or organization program eligibility using the minimum necessary evidence.",
  },
  {
    title: "Guarantor evidence",
    description: "Assessed under stated criteria, with alternatives offered where available.",
  },
  {
    title: "Right-to-rent / local eligibility",
    description: "Named jurisdiction and source; Zoiko Rooms does not reach its own legal conclusion.",
  },
  {
    title: "Payment information",
    description: "Handled through the approved payment provider — never requested in messages.",
  },
];

export function DocumentsPrivacySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Documents and Privacy")}</Eyebrow>
            <SectionTitle>{t("Share only what's needed, with the right party, at the right time")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {documents.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>

          <Paragraph>
            {t(
              "Every request answers: who requests it, why it's needed, whether it's required, who can access it, how long it's retained, and how you can correct or challenge it."
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
