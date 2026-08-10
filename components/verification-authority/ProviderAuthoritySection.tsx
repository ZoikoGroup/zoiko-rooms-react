import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Live-in provider", "Identity → current residence/occupation or control → permission where required → joint authority where applicable"],
  ["Landlord", "Identity → current ownership or lawful control → exact property/room authority"],
  ["Authorized agent", "Agent identity → organization identity → current principal authority → written instruction/delegation"],
  ["Authorized subletter", "Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions"],
  ["Organization provider", "Representative identity → organization identity → role → inventory/provider relationship → distribution authority"],
];

export function ProviderAuthoritySection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Provider Authority</Eyebrow>
            <SectionTitle>Every provider path has its own evidence chain</SectionTitle>
          </div>

          <InfoTable columns={["Provider Path", "Minimum Authority Chain"]} rows={rows} />

          <Callout label="Separation of duties" className="max-w-3xl">
            Where risk warrants it, the person who edits listing facts or payment instructions
            should not be able to approve their own high-risk change, issue a refund, or expand
            their own permissions without an independent authorized review.
          </Callout>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
