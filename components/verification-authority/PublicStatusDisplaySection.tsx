"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, Paragraph, SectionDivider } from "./shared";

export function PublicStatusDisplaySection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Public Status Display")}</Eyebrow>
            <SectionTitle>{t("Enough to understand, not enough to expose")}</SectionTitle>
          </div>

          <Callout label={t("Example")} className="max-w-3xl">
            {t(
              "\"Listing authority: Confirmed for this room through March 31, 2027. Source reviewed July 28, 2026. This status confirms current authority to advertise the room; it does not confirm the room's condition, future availability, legal compliance, provider behavior, or payment outcome.\""
            )}
          </Callout>

          <Paragraph>
            {t(
              "Documents and sensitive evidence remain private. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document."
            )}
          </Paragraph>

          <a
            href="/how-it-works/room-passport"
            className="w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
          >
            {t("Explore Room Passport")}
          </a>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
