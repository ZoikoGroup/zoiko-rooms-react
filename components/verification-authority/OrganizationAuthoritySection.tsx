"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

export function OrganizationAuthoritySection() {
  const { t } = useLanguage();

  const relationships = [
    {
      title: t("Referred"),
      description: t(
        "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment."
      ),
    },
    {
      title: t("Distributed"),
      description: t(
        "The organization makes approved inventory discoverable; provider authority and room evidence remain separate."
      ),
    },
    {
      title: t("Managed"),
      description: t(
        "The organization or partner performs named listing/support operations; exact decisions and data access are shown."
      ),
    },
    {
      title: t("Allocated"),
      description: t("A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit."),
    },
    {
      title: t("Subsidized"),
      description: t("The organization contributes under current eligibility and limits; uncovered costs remain visible."),
    },
    {
      title: t("Direct billed"),
      description: t("Approved costs are billed to the organization; covered/excluded items and disputes are explicit."),
    },
  ];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Organization Authority")}</Eyebrow>
            <SectionTitle>{t("What a relationship means — and doesn't")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relationships.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
