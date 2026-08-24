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

export const metadata: Metadata = {
  title: "List a Room for Rent | Zoiko Rooms",
  description:
    "List a room for rent with Zoiko Rooms. Share room details, availability, pricing, authority, conditions and evidence to create a trusted rental listing.",
};

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
