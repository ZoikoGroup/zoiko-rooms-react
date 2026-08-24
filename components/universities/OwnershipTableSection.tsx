"use client";

import { Check } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const Yes = <Check className="h-4 w-4 text-brand-navy" />;
const No = <span className="text-neutral-300">—</span>;
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-[#A85A34]">{children}</span>
);

const rowData = [
  { area: "Eligibility", university: Yes, provider: No, zoikoRooms: "Supports", participant: No },
  { area: "Room authority", university: No, provider: Yes, zoikoRooms: "Verifies", participant: No },
  { area: "Allocation", university: "Model-dependent", provider: No, zoikoRooms: "Facilitates", participant: No },
  { area: "Funding", university: "Model-dependent", provider: No, zoikoRooms: No, participant: "Model-dependent" },
  { area: "Agreement", university: No, provider: Yes, zoikoRooms: "Facilitates", participant: Yes },
  { area: "Support", university: "Model-dependent", provider: "Model-dependent", zoikoRooms: Yes, participant: No },
];

export function OwnershipTableSection() {
  const { t } = useLanguage();

  const renderCell = (value: React.ReactNode, key: string) =>
    typeof value === "string" ? <Label key={key}>{t(value)}</Label> : value;

  const rows = rowData.map(({ area, university, provider, zoikoRooms, participant }, index) => [
    t(area),
    renderCell(university, `u-${index}`),
    renderCell(provider, `p-${index}`),
    renderCell(zoikoRooms, `z-${index}`),
    renderCell(participant, `pa-${index}`),
  ]);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Ownership, Made Explicit")}</Eyebrow>
            <SectionTitle>{t("Who is responsible for what?")}</SectionTitle>
          </div>

          <div className="w-full overflow-x-auto">
            <InfoTable
              columns={[t("Area"), t("University"), t("Provider"), t("Zoiko Rooms"), t("Participant")]}
              rows={rows}
            />
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
