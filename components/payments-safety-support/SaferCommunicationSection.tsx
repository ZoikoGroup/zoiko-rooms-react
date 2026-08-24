"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, Callout, SectionDivider } from "./shared";

const points = [
  "Never share passwords, one-time codes, card PINs, full bank/card credentials, or remote-access software — no legitimate request needs these.",
  "The exact address is disclosed only at an approved viewing stage, to named scheduled participants.",
  "Pressure to pay immediately, requests to move off-platform, or a new recipient appearing in a message are all red flags.",
  "Report and block controls remain available in every message and viewing context.",
];

export function SaferCommunicationSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Safer Communication and Viewing")}</Eyebrow>
            <SectionTitle>{t("Roles, addresses, and suspicious-request controls")}</SectionTitle>
          </div>

          <BulletList items={points.map((point) => t(point))} />

          <Callout label={t("Not an emergency service")}>
            {t(
              "If safe to do so, leave or stop an in-person interaction that feels wrong, use the appropriate local emergency service if there's immediate danger, then report to Zoiko Rooms."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
