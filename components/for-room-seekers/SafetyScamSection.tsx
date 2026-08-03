import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Provider cannot explain authority or room relationship", "Review scoped status; do not pay; report/support"],
  ["Pressure to pay before viewing, agreement, or cost disclosure", "Do not pay; review the approved stage and route"],
  ["False employer/university/healthcare affiliation", "Check organization relationship state; report impersonation"],
  ["Secret, isolated, or unscheduled viewing", "Use controlled scheduling, participants, and address disclosure"],
  ["Fake urgency, competing offers, or countdown", "Treat as unverified unless based on a current explainable process"],
];

export function SafetyScamSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Safety and Scam Prevention</Eyebrow>
            <SectionTitle>Know the warning signs</SectionTitle>
          </div>

          <InfoTable columns={["Risk Indicator", "Required Response"]} rows={rows} />

          <Callout label="Not an emergency service">
            Zoiko Rooms surfaces current urgent safety and support routes and can restrict risky
            actions. It does not replace emergency services, shelter, healthcare, law enforcement,
            or legal advice.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
