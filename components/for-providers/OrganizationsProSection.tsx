import { Container, Reveal, Button } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["University-linked rooms", "Organizations → Universities; Pro where portfolio/compliance is needed"],
  ["Employer-linked rooms", "Organizations → Employers"],
  ["Healthcare-linked rooms", "Organizations → Healthcare"],
  ["Multiple rooms / team workflow", "Zoiko Rooms Pro → Portfolio & Availability"],
  ["Compliance / verification operations", "Zoiko Rooms Pro → Compliance & Verification"],
  ["Institutional distribution", "Zoiko Rooms Pro → Institutional Distribution"],
];

export function OrganizationsProSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Organizations and Zoiko Rooms Pro</Eyebrow>
            <SectionTitle>Route governed professional workflows correctly</SectionTitle>
          </div>

          <InfoTable columns={["Situation", "Route"]} rows={rows} />

          <Button href="/pro" variant="outline" size="md" className="w-fit">
            Explore Zoiko Rooms Pro
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
