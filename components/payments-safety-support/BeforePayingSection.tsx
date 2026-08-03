import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Room and provider", "Exact current Room Passport, provider path, and listing authority"],
  ["Recipient", "Named person/entity and relationship to provider/agreement"],
  ["Route/method", "Zoiko Rooms-supported or provider-managed route; method category and secure destination"],
  ["Fees and totals", "Every mandatory platform/provider/processing/banking/government amount and known total"],
  ["Cancellation/refund", "Conditions, calculation, timing, route, exclusions, and dispute route"],
  ["Protection limitation", "What the exact route supports and what it does not"],
];

export function BeforePayingSection() {
  return (
    <SectionDivider id="before-paying">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Before Paying</Eyebrow>
            <SectionTitle>Confirm every item before you authorize anything</SectionTitle>
          </div>

          <InfoTable columns={["Check", "Required Answer Before Authorization"]} rows={rows} />

          <Callout label="Payment authorization boundary" className="max-w-3xl">
            Do not authorize payment because a message, screenshot, logo, urgency claim,
            organization name, identity badge, or bank-account image appears convincing. Use the
            current Room Passport, agreement, named recipient, and approved route.
          </Callout>

          <a
            href="/how-it-works"
            className="w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
          >
            Open Room Passport
          </a>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
