"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";

const models = [
  { title: "Independent", description: "No formal relationship. Standard search, standard worker journey." },
  { title: "Employer-referred", description: "Employer invites a worker in — no room or outcome guarantee." },
  { title: "Employer-distributed", description: "Approved inventory opened to a specific workforce group." },
  { title: "Employer-managed", description: "Employer or partner handles named operational tasks." },
  { title: "Employer-allocated", description: "A room is proposed under current criteria — decline stays real." },
  { title: "Allowance / stipend", description: "A fixed or calculated contribution, with worker responsibility shown plainly." },
  { title: "Reimbursement", description: "Approved costs repaid on evidence, with timing and limits made clear." },
  { title: "Direct billed", description: "Approved charges billed to the employer — excluded items still visible." },
  { title: "Relocation support / support-only", description: "Guidance and escalation, with no control over supply or decisions." },
];

export function OperatingModelsSection() {
  const { t } = useLanguage();
  return (
    <SectionDivider id="employer-models">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Operating Models")}</Eyebrow>
            <SectionTitle>{t("Choose the relationship that fits the role")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t("An employer can refer, distribute, manage, allocate, subsidize, reimburse, bill directly, support relocation, or simply support — never imply official employer housing.")}
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
