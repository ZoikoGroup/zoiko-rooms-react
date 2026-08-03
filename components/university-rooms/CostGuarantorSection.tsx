import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Monthly rent", "$1,050 per month"],
  ["Security deposit", "$1,050 due after agreement signing"],
  ["Required provider fee", "$0"],
  ["Bills", "Internet included; electricity estimated at $45–$70/month; water included"],
  ["Known amount due before move-in", "$2,100 plus any disclosed variable utility amount"],
  ["Guarantor", "Local guarantor requested; alternative arrangement may be considered by the provider"],
];

export function CostGuarantorSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Cost and Guarantor Guidance</Eyebrow>
            <SectionTitle>Total cost and guarantor terms before commitment</SectionTitle>
          </div>

          <InfoTable columns={["Item", "Illustrative Display"]} rows={rows} />

          <Callout label="Example limitation">
            This learning block demonstrates cost composition only. It is not a university, city,
            or market average and must not be reused as pricing evidence.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
