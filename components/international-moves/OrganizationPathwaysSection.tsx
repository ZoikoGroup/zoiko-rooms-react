"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const pathways = [
  {
    title: "Independent marketplace",
    description: "No documented organization referral or management relationship — no logo or implied support.",
  },
  {
    title: "Organization-referred",
    description: "You arrived through a current authorized referral. Program name shown only when authorized.",
  },
  {
    title: "Organization-distributed",
    description: "An organization distributes an independently provided room. Distribution does not equal ownership or guarantee.",
  },
  {
    title: "Organization-managed",
    description: "An organization or appointed operator manages the accommodation within a documented scope.",
  },
  {
    title: "Allowance / subsidy eligible",
    description: "A current program may contribute to costs, with eligibility, amount, and expiry shown.",
  },
  {
    title: "Relocation-provider supported",
    description: "An authorized relocation provider supports a defined part of the move — not a broader guarantee.",
  },
];

const links = [
  { label: "Universities", href: "/find-a-room/university-rooms" },
  { label: "Employers", href: "/organizations/employers" },
  { label: "Healthcare", href: "/organizations/healthcare" },
  { label: "Relocation & Mobility", href: "/organizations/relocation-mobility" },
  { label: "Government", href: "/organizations/government-public-sector" },
];

export function OrganizationPathwaysSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-[#fff]">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Organization Pathways")}</Eyebrow>
            <SectionTitle>{t("Referral, distribution, and management are separate relationships")}</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pathways.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-red transition-colors hover:text-brand-red-dark"
              >
                {t(link.label)}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
