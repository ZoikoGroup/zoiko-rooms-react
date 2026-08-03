import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Estimated 22–35 min by transit at 7:00 AM", "Model/data estimate for the selected time window; not guaranteed"],
  ["Night service information unavailable", "Do not assume daytime travel data applies to night shifts"],
  ["Step-free route data available", "A source indicates accessible route elements; confirm current conditions"],
  ["Parking listed by provider", "Provider-supplied space/permit information; confirm availability and cost"],
  ["Travel estimate changed", "Material route/service change; saved-search users are notified where approved"],
];

export function TravelShiftFitSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Travel and Shift Fit</Eyebrow>
            <SectionTitle>Estimates by mode and time window, never a guarantee</SectionTitle>
          </div>

          <InfoTable columns={["Label", "Meaning"]} rows={rows} />

          <Callout label="Commute Claim Boundary">
            We never use &quot;easy commute,&quot; &quot;safe walk,&quot; &quot;guaranteed
            arrival,&quot; or &quot;ideal for night shifts.&quot; Every travel claim is replaced
            with current, sourced, scoped facts and limitations.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
