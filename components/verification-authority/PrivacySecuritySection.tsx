"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";

export function PrivacySecuritySection() {
  const { t } = useLanguage();

  const points = [
    t("No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors."),
    t(
      "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose."
    ),
    t("Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions."),
    t(
      'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."'
    ),
  ];

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Privacy and Security")}</Eyebrow>
            <SectionTitle>{t("Documents stay controlled, always")}</SectionTitle>
          </div>

          <BulletList items={points} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
