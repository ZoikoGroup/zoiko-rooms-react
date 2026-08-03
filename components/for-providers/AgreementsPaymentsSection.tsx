import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Correct parties", "Seeker, provider/legal party, principal/agent/organization role, and signature authority"],
  ["Money", "Rent, deposit, mandatory fees, bills, totals, due dates, recipient, receipts, refunds/cancellation"],
  ["Versions", "Draft, changes, unresolved items, accepted version, signatures, effective date"],
  ["Signature authority", "Only a current authorized party/role signs; revocation blocks signing"],
];

export function AgreementsPaymentsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Agreements and Payments</Eyebrow>
            <SectionTitle>Correct parties, complete costs, secure changes</SectionTitle>
          </div>

          <InfoTable columns={["Area", "Required Provider Control"]} rows={rows} />

          <Callout label="High-risk payment change">
            A new recipient or bank details requires secure reconfirmation through an approved
            channel, alerts affected parties, and blocks the action until resolved. Gift cards,
            cryptocurrency, or an unrelated recipient are warned, blocked where supported, and
            reported.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
