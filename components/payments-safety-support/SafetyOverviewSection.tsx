import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  {
    title: "Complete costs",
    description: "Rent, deposit, mandatory fees, bills, totals, recipient, timing, cancellation, and refund before commitment.",
  },
  {
    title: "Authorized route",
    description: "Named recipient, payment authority, method category, current instruction, and protection limitations.",
  },
  {
    title: "Safer communication",
    description: "Accountable messages, roles, secure links, no credential requests, report and block.",
  },
  {
    title: "Safer viewings",
    description: "Controlled address, confirmed participants, remote option, accessibility, cancellation, mismatch reporting.",
  },
  {
    title: "Fraud prevention",
    description: "Impersonation, copied listings, document theft, payment redirection, fake urgency, account takeover controls.",
  },
  {
    title: "Refunds & disputes",
    description: "Request, eligibility, evidence, calculation, status, review, completion, and charge-dispute coordination.",
  },
];

export function SafetyOverviewSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Safety Overview</Eyebrow>
            <SectionTitle>Everything that protects you, in one place</SectionTitle>
          </div>

          <Callout label="Emergency boundary" className="max-w-3xl">
            Zoiko Rooms is not an emergency service. Where there is immediate danger or urgent
            medical, fire, law-enforcement, shelter, legal, or crisis need, use the appropriate
            current local service. Zoiko Rooms can preserve evidence, restrict platform actions,
            and support the room-related case.
          </Callout>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
