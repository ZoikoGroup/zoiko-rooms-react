import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Who receives payment?", "Named entity/person and current authority"],
  ["Who covers each cost?", "User, provider, organization, or shared responsibility, including uncovered amounts"],
  ["Who decides eligibility/allocation?", "Named organization/provider role and current criteria/process"],
  ["Who handles refund/dispute?", "Payment route owner, provider/organization role, and Zoiko Rooms support boundary"],
  ["Who sees case/payment data?", "Minimum authorized roles by purpose, scope, and duration"],
];

export function OrganizationProSupportSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Organization and Pro Support</Eyebrow>
            <SectionTitle>Who pays, who decides, who escalates</SectionTitle>
          </div>

          <InfoTable columns={["Question", "Required Answer"]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
