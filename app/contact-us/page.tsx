import type { Metadata } from "next";
import {
  HeroSection,
  ChooseTeamSection,
  MessageFormSection,
  TrustSafetyBannerSection,
  WhyDifferentSection,
  MarketsSection,
  FaqCtaSection,
} from "@/components/contact-us";

export const metadata: Metadata = {
  title: "Contact Us | Zoiko Rooms",
  description:
    "Get in touch with Zoiko Rooms — room seeker support, provider help, trust & safety reports, organization partnerships, Pro & integrations, and press inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      <HeroSection />
      <ChooseTeamSection />
      <MessageFormSection />
      <TrustSafetyBannerSection />
      <WhyDifferentSection />
      <MarketsSection />
      <FaqCtaSection />
    </>
  );
}
