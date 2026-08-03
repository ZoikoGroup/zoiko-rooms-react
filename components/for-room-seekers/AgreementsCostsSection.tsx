import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Monthly rent", "$1,250 per month"],
  ["Security deposit", "$1,250 due after the agreement is signed"],
  ["Required move-in fee", "$75 one time"],
  ["Bills", "Internet included; electricity estimated at $65/month; water estimated at $35/month"],
  ["Known amount before move-in", "$2,575 plus any disclosed variable utility amount"],
  ["Known monthly amount", "$1,350 estimated, including listed utilities"],
];

export function AgreementsCostsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Agreements and Costs</Eyebrow>
            <SectionTitle>Know exactly what you&apos;re accepting</SectionTitle>
          </div>

          <InfoTable columns={["Item", "Illustrative Display"]} rows={rows} />

          <Callout label="Example boundary">
            These USD amounts demonstrate cost disclosure only. They are not Zoiko Rooms fees,
            market averages, affordability advice, or a promise of payment protection or refund.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
