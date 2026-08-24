"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const criteria = [
  {
    title: "Student status",
    description: "Whether required, why, acceptable evidence, who receives it, and alternatives where applicable.",
  },
  {
    title: "Identity / right-to-rent",
    description: "Exact purpose, legal basis, responsible party, secure route, and limitations.",
  },
  {
    title: "Income / funding",
    description: "What's required, why, acceptable alternatives, and who decides.",
  },
  {
    title: "Guarantor / sponsor",
    description: "Criteria, documents, liability period, and alternatives with privacy role separation.",
  },
  {
    title: "References",
    description: "Purpose, contact permission, minimum data, recipient, retention, and correction.",
  },
  {
    title: "Accessibility / accommodation",
    description: "Separated from eligibility unless legally necessary; sensitive detail minimized.",
  },
];

export function ApplicationDocumentsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Application and Document Readiness")}</Eyebrow>
            <SectionTitle>{t("Criteria and documents, explained before you submit")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {criteria.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>

          <Paragraph>
            {t(
              "No sensitive document goes through public forms, email links without approved security, URL parameters, or analytics."
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
