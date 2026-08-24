"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Ask about room/home, household, access, dates, costs, terms, viewing, application, agreement, and payment — these are always safe questions.",
  "The exact address is disclosed only at an approved viewing stage, to named scheduled participants.",
  "Warn signs: unrelated protected-trait, health, immigration, password, financial-credential, or document requests.",
  "Report and block controls remain available in every message and viewing context.",
];

export function CommunicationViewingsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Communication and Viewings")}</Eyebrow>
            <SectionTitle>{t("Safe questions, controlled address disclosure")}</SectionTitle>
          </div>

          <BulletList items={points.map((point) => t(point))} />

          <Callout label={t("Safety boundary")}>
            {t(
              "No payment pressure, credential request, secret meeting, unauthorized recording, or access-code exposure. Use the mismatch report route for any room, media, access, cost, provider, or relationship difference.",
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
