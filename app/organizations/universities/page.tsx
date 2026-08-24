import type { Metadata } from "next";
import {
  HeroSection,
  StartHereSection,
  ChooseModelSection,
  EveryAudienceSection,
  OperatingModelTimelineSection,
  OwnershipTableSection,
  CurrentSupplySection,
  BuiltAroundCalendarSection,
  EveryDollarSection,
  DataBoundariesSection,
  InstitutionalScaleSection,
  FaqSection,
  FinalCtaSection,
} from "@/components/universities";

export const metadata: Metadata = {
  title: "University Student Housing Platform | Zoiko Rooms",
  description:
    "Zoiko Rooms provides university student housing solutions for managing rooms, availability, applications, allocations, agreements, payments and support.",
};

export default function UniversitiesPage() {
  return (
    <>
      <HeroSection />
      <StartHereSection />
      <ChooseModelSection />
      <EveryAudienceSection />
      <OperatingModelTimelineSection />
      <OwnershipTableSection />
      <CurrentSupplySection />
      <BuiltAroundCalendarSection />
      <EveryDollarSection />
      <DataBoundariesSection />
      <InstitutionalScaleSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
