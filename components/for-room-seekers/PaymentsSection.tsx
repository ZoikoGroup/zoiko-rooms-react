import { Container, Reveal, Button } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["New recipient or bank details in a message", "Block or warn; reconfirm through an approved route; notify affected parties"],
  ["Gift card, cryptocurrency, or unrelated recipient", "Warn, report/block, do not pay through that instruction"],
  ["Amount differs from listing/agreement", "Block until costs and agreement are corrected and reconfirmed"],
  ["Payment requested before viewing/application/agreement stage", "Explain the required current stage and safety boundary"],
];

export function PaymentsSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Payments</Eyebrow>
            <SectionTitle>Confirm recipient, route, and refund terms before paying</SectionTitle>
          </div>

          <InfoTable columns={["Warning Sign", "Required Response"]} rows={rows} />

          <Button href="/how-it-works/payments-safety-support" variant="outline" size="md" className="w-fit">
            Payments, Safety & Support
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
