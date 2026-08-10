import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ['"Fake landlord"', '"Listing authority is disputed and publication is paused while evidence is reviewed."'],
  ['"Fraudulent document"', '"The document could not support the current status and requires further review."'],
  ['"Unsafe provider"', '"Specific communication, viewing, payment, or account actions are restricted during review."'],
  ['"Failed verification"', '"Verification could not be completed with the current evidence. Update information or contact support."'],
  ['"Blacklisted"', '"The account or action is restricted under the current policy and review process."'],
];

export function DisputesRevocationSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Disputes, Revocation and Correction</Eyebrow>
            <SectionTitle>Neutral language, not public accusation</SectionTitle>
          </div>

          <InfoTable columns={["Avoid", "Use Instead"]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
