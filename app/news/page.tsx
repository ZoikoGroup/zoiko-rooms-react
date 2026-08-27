import type { Metadata } from "next";
import { HeroSection, ArticleBodySection } from "@/components/news";

export const metadata: Metadata = {
  title: "Zoiko Rooms Introduces a Global Marketplace Built for Trusted Room Rentals | Zoiko Rooms News",
  description:
    "Zoiko Realty Group Inc. announces Zoiko Rooms, a global room rental marketplace designed to make finding, securing and managing rooms more structured, transparent and accountable.",
};

export default function NewsPage() {
  return (
    <>
      <HeroSection />
      <ArticleBodySection />
    </>
  );
}
