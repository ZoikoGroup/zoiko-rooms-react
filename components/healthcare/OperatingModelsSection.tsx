"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const models = [
  { title: "Independent", description: "No formal relationship. Standard search, standard seeker journey." },
  { title: "Healthcare-referred", description: "Organization invites a worker in — with no guarantee of room or outcome." },
  { title: "Healthcare-distributed", description: "Approved inventory opened to a specific workforce group." },
  { title: "Healthcare-managed", description: "Organization or partner handles named operational tasks." },
  { title: "Healthcare-allocated", description: "A room is proposed under current criteria — with a real decline option." },
  { title: "Allowance / stipend", description: "A fixed or calculated contribution, with worker responsibility shown plainly." },
  { title: "Reimbursement", description: "Approved costs repaid on evidence, with timing and limits made clear." },
  { title: "Direct billed", description: "Approved charges billed to the organization — excluded items still visible." },
  { title: "Support-only", description: "Guidance and escalation, with no control over supply or decisions." },
];

export function OperatingModelsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider id="healthcare-models">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Operating Models")}</Eyebrow>
            <SectionTitle>{t("Choose the relationship that fits your role")}</SectionTitle>
            <Paragraph className="mx-auto">
              {t(
                "An organization can refer, distribute, manage, allocate, subsidize, reimburse, bill directly, or simply support — never imply clinical approval or control it doesn't have."
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
