"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const models = [
  { title: "Referral", description: "Invites a participant in — no room or outcome guarantee." },
  { title: "Room sourcing", description: "Actively searches and proposes options against declared needs." },
  { title: "Shortlist management", description: "Curates and compares options with transparent criteria." },
  { title: "Managed case", description: "Coordinates the full journey end to end for the participant." },
  { title: "Destination service", description: "Local, on-the-ground support for arrival and settling in." },
  { title: "Allocation", description: "Proposes a specific room under current criteria — decline stays real." },
  { title: "Allowance / reimbursement", description: "Contributes a fixed amount or repays approved costs on evidence." },
  { title: "Direct billing", description: "Accepts approved charges under current billing authority." },
  { title: "Integration / distribution / support-only", description: "Connects systems or offers guidance — without controlling decisions." },
];

export function OperatingModelsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider id="relocation-models">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Operating Models")}</Eyebrow>
            <SectionTitle>{t("Choose the model, never assume the case")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "Referral, sourcing, shortlist management, managed case, destination service, allocation, allowance, direct billing, integration, or support-only — each stays distinct."
              )}
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {models.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
