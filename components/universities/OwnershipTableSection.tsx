import { Check } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const Yes = <Check className="h-4 w-4 text-brand-navy" />;
const No = <span className="text-neutral-300">—</span>;
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-medium text-[#A85A34]">{children}</span>
);

const rows = [
  ["Eligibility", Yes, No, <Label key="a">Supports</Label>, No],
  ["Room authority", No, Yes, <Label key="b">Verifies</Label>, No],
  ["Allocation", <Label key="c">Model-dependent</Label>, No, <Label key="d">Facilitates</Label>, No],
  ["Funding", <Label key="e">Model-dependent</Label>, No, No, <Label key="f">Model-dependent</Label>],
  ["Agreement", No, Yes, <Label key="g">Facilitates</Label>, Yes],
  ["Support", <Label key="h">Model-dependent</Label>, <Label key="i">Model-dependent</Label>, Yes, No],
];

export function OwnershipTableSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Ownership, Made Explicit</Eyebrow>
            <SectionTitle>Who is responsible for what?</SectionTitle>
          </div>

          <div className="w-full overflow-x-auto">
            <InfoTable columns={["Area", "University", "Provider", "Zoiko Rooms", "Participant"]} rows={rows} />
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
