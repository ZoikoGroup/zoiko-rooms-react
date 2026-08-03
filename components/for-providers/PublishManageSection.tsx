import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, InfoTable, SectionDivider } from "./shared";

const rows = [
  ["Published", "Current room visible with scoped statuses"],
  ["Changes under review", "Material edit pending; previous safe facts may remain or listing pauses"],
  ["Paused / unavailable", "Removed from default search/action"],
  ["Restricted / removed", "Unsafe details/actions suppressed"],
  ["Expired / reconfirmation due", "Reconfirm before republishing"],
  ["Closed / archived", "Current search off; controlled record retained by purpose"],
];

export function PublishManageSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Publish and Manage</Eyebrow>
            <SectionTitle>Status, changes, pause, removal, and relist</SectionTitle>
          </div>

          <InfoTable columns={["State", "Public / Action Effect"]} rows={rows} />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
