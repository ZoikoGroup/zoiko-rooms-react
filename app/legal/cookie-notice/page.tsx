import type { Metadata } from "next";
import {
  HeroSection,
  CategoriesSection,
  LiveInventorySection,
  ThirdPartyProvidersSection,
  GpcSignalSection,
  RegionalRulesSection,
  MarketPacksSection,
} from "@/components/cookie-notice";

export const metadata: Metadata = {
  title: "Cookie Notice — Zoiko Rooms",
  description:
    "Learn how Zoiko Rooms uses cookies and similar technologies, why we use them, which providers are involved, and how you can control optional technologies.",
};

export default function CookieNoticePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <LiveInventorySection />
      <ThirdPartyProvidersSection />
      <GpcSignalSection />
      <RegionalRulesSection />
      <MarketPacksSection />
    </>
  );
}
