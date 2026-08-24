"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

export function ActionSpecificAuthoritySection() {
  const { t } = useLanguage();

  const rows = [
    [t("Publish/unpublish listing"), t("Block publication or keep private")],
    [t("Read applicant data"), t("Deny access")],
    [t("Approve/decline applicant"), t("No decision; route to authorized owner")],
    [t("Sign agreement"), t("Block signature")],
    [t("Receive payment"), t("Block or hold payment")],
    [t("Change payment instructions"), t("Block, alert, and review")],
    [t("Invite/manage team"), t("Block and route to admin")],
  ];

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Action-Specific Authority")}</Eyebrow>
            <SectionTitle>{t("Publishing a listing doesn't authorize everything else")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Action"), t("Default If Authority Is Unclear")]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
