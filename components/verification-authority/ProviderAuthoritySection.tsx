"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

export function ProviderAuthoritySection() {
  const { t } = useLanguage();

  const rows = [
    [
      t("Live-in provider"),
      t("Identity → current residence/occupation or control → permission where required → joint authority where applicable"),
    ],
    [t("Landlord"), t("Identity → current ownership or lawful control → exact property/room authority")],
    [
      t("Authorized agent"),
      t("Agent identity → organization identity → current principal authority → written instruction/delegation"),
    ],
    [
      t("Authorized subletter"),
      t("Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions"),
    ],
    [
      t("Organization provider"),
      t("Representative identity → organization identity → role → inventory/provider relationship → distribution authority"),
    ],
  ];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Provider Authority")}</Eyebrow>
            <SectionTitle>{t("Every provider path has its own evidence chain")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Provider Path"), t("Minimum Authority Chain")]} rows={rows} />

          <Callout label={t("Separation of duties")} className="max-w-3xl">
            {t(
              "Where risk warrants it, the person who edits listing facts or payment instructions should not be able to approve their own high-risk change, issue a refund, or expand their own permissions without an independent authorized review."
            )}
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
