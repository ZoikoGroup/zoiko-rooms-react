"use client";

import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Not started", "No draft exists; choose path"],
  ["Draft", "Private and incomplete; continue or delete"],
  ["Identity in progress", "Complete the approved identity step"],
  ["Authority in progress", "Provide current path-specific evidence"],
  ["Action required", "Correct a named field, document, content, cost, or policy issue"],
  ["Ready to preview", "Minimum provider-entered information complete; review may still be required"],
  ["Submitted", "Under current review; no automatic public exposure"],
];

export function PrivateDraftVerificationSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Private Draft and Verification")}</Eyebrow>
            <SectionTitle>{t("Save before you're public")}</SectionTitle>
          </div>

          <InfoTable columns={[t("Status"), t("Meaning / Next Action")]} rows={rows.map((row) => row.map((cell) => t(cell)))} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
