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
  title: "Cookie Notice and Preferences | Zoiko Rooms",
  description:
    "Discover how Zoiko Rooms uses essential and optional cookies, their purposes, providers involved, and how you can review or change your cookie preferences.",
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
