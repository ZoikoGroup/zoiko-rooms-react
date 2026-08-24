"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const rows = [
  ["Search, account, save, compare, report", "Zoiko Rooms Help Center", "Platform function only"],
  ["Listing facts and availability", "Provider", "Zoiko Rooms does not guarantee provider-supplied facts"],
  ["Application decision", "Provider / agent / institution-managed owner", "Zoiko Rooms role limited unless separately authorized"],
  ["University referral / program", "Named university support route where authorized", "No implied support for independent listings"],
  ["Safety or scam concern", "Report, block, Trust & Safety, emergency services where needed", "Zoiko Rooms is not an emergency service"],
];

export function SeekerSupportSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("University and Seeker Support")}</Eyebrow>
            <SectionTitle>{t("Who's responsible for what")}</SectionTitle>
          </div>

          <InfoTable
            columns={[t("Issue"), t("Primary Owner"), t("Boundary")]}
            rows={rows.map(([issue, owner, boundary]) => [t(issue), t(owner), t(boundary)])}
          />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
