import type { Metadata } from "next";
import {
  AboutHeroSection,
  ScopeSection,
  MissionSection,
  ProblemSection,
  FeatureGridSection,
  TrustAssetSection,
  WhoWeServeSection,
  TrustStandardSection,
  GovernanceSection,
  GeographicSection,
  InfrastructureSection,
  BusinessModelSection,
  CorporateInfoSection,
  AboutFaqSection,
  AboutFinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us — Zoiko Rooms",
  description:
    "Zoiko Rooms is a global technology platform dedicated exclusively to individual rooms for rent, supporting the journey from discovery and verification through agreement, payment and move-out.",
};

const capabilities = [
  {
    title: "Search and discovery",
    description:
      "Search by location, move-in date, price, room characteristics, household information, accessibility requirements and other lawful preferences.",
  },
  {
    title: "Provider authority",
    description:
      "Request and evaluate ownership, agency, management, institutional or subletting evidence according to the provider and jurisdiction.",
  },
  {
    title: "Room evidence",
    description:
      "Present a structured Room Passport containing room details and the evidence level supporting them.",
  },
  {
    title: "Applications and agreements",
    description:
      "Support applications, disclosures, approval, agreement selection, signature and a clear acceptance record.",
  },
  {
    title: "Payments and records",
    description:
      "Where available, connect rent, deposit, refund and protection services through approved providers with visible terms and records.",
  },
  {
    title: "Occupancy support",
    description:
      "Maintain move-in evidence, rent schedules, notices, renewals, disputes and move-out records where supported.",
  },
];

const differentiators = [
  {
    title: "Room-exclusive focus",
    description:
      "The platform is built around the specific risks, workflows and economics of one private room rather than treating rooms as a secondary category.",
  },
  {
    title: "Authority, not only identity",
    description:
      "Confirming that a person exists does not prove that the person is entitled to offer a particular room. Zoiko Rooms treats these as separate decisions.",
  },
  {
    title: "Evidence-specific trust",
    description:
      "Users see the checks performed, the evidence level, the review date and any material limitation instead of relying on a vague verification badge.",
  },
  {
    title: "Jurisdiction-aware workflows",
    description:
      "The platform is designed to distinguish lodgers, tenants, subtenants, institutional occupants and professional shared-housing arrangements.",
  },
  {
    title: "Lifecycle continuity",
    description:
      "The platform remains useful after an introduction by supporting the application, agreement, payment, occupancy and move-out record.",
  },
  {
    title: "Institutional accountability",
    description:
      "Organizations can manage referrals, approved supply, safeguarding, placement status and measurable accommodation outcomes.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <ScopeSection />
      <MissionSection />
      <ProblemSection />
      <FeatureGridSection eyebrow="Capability" title="What Zoiko Rooms Does" features={capabilities} />
      <TrustAssetSection />
      <FeatureGridSection
        eyebrow="Differentiation"
        title="What Makes Zoiko Rooms Different"
        features={differentiators}
      />
      <WhoWeServeSection />
      <TrustStandardSection />
      <GovernanceSection />
      <GeographicSection />
      <InfrastructureSection />
      <BusinessModelSection />
      <CorporateInfoSection />
      <AboutFaqSection />
      <AboutFinalCtaSection />
    </>
  );
}
