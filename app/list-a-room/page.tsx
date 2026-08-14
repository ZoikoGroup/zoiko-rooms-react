import type { Metadata } from "next";
import {
  ListARoomHero,
  WhoCanListSection,
  WhyListSection,
  ProviderAuthoritySection,
  RoomPassportSection,
  ProcessSection,
  RequirementsPricingSection,
  FAQSection,
  ReadyToListSection,
} from "@/components/list-a-room";

export const metadata: Metadata = { title: "List a Room — Zoiko Rooms" };

export default function ListARoomPage() {
  return (
    <main>
      <ListARoomHero />
      <WhoCanListSection />
      <WhyListSection />
      <ProviderAuthoritySection />
      <RoomPassportSection />
      <ProcessSection />
      <RequirementsPricingSection />
      <FAQSection />
      <ReadyToListSection />
    </main>
  );
}
