import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  {
    label: "Available for stated arrival",
    value: "Provider confirmed availability for the selected date/range within the freshness threshold",
  },
  {
    label: "Flexible arrival possible",
    value: "Provider indicated an approved flexibility window",
  },
  {
    label: "Partial date match",
    value: "Room covers only part of the requested stay",
  },
  {
    label: "Availability to confirm",
    value: "No sufficiently recent confirmation for the selected arrival",
  },
  {
    label: "Arrival date changed",
    value: "Seeker updated timing after inquiry — recheck availability, price, and agreement",
  },
  {
    label: "Travel/entry uncertain",
    value: "Arrival depends on an external condition — use flexible dates, no visa or entry assumption",
  },
];

export function AvailabilityTimingSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Availability and Timing</Eyebrow>
            <SectionTitle>Arrival is a range, not a promise</SectionTitle>
          </div>

          <InfoTable columns={["State", "Meaning"]} rows={rows} />

          <Callout label="No travel or entry prediction">
            Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival,
            enrollment, or employment start. We use your declared dates and clear uncertainty
            states instead.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
