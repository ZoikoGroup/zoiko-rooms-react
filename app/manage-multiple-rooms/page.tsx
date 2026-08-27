import {
  HeroSection,
  ResultSection,
  HierarchySection,
  AvailabilitySection,
  BulkOperationsSection,
  TeamRolesSection,
  MigrationSection,
  OtherPathsSection,
  FaqSection,
} from "@/components/manage-multiple-rooms";

export default function ManageMultipleRoomsPage() {
  return (
    <main>
      <HeroSection />
      <ResultSection />
      <HierarchySection />
      <AvailabilitySection />
      <BulkOperationsSection />
      <TeamRolesSection />
      <MigrationSection />
      <OtherPathsSection />
      <FaqSection />
    </main>
  );
}
