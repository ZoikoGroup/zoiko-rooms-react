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
  title: "Universities — Zoiko Rooms",
  description:
    "Coordinate room access for university communities through clear eligibility, supply, funding, data, and support responsibilities.",
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
