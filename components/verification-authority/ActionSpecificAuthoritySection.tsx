import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Publish/unpublish listing", "Block publication or keep private"],
  ["Read applicant data", "Deny access"],
  ["Approve/decline applicant", "No decision; route to authorized owner"],
  ["Sign agreement", "Block signature"],
  ["Receive payment", "Block or hold payment"],
  ["Change payment instructions", "Block, alert, and review"],
  ["Invite/manage team", "Block and route to admin"],
];

export function ActionSpecificAuthoritySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Action-Specific Authority</Eyebrow>
            <SectionTitle>Publishing a listing doesn&apos;t authorize everything else</SectionTitle>
          </div>

          <InfoTable columns={["Action", "Default If Authority Is Unclear"]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
