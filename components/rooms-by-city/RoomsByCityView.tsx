"use client";

import { useState } from "react";
import RoomsByCitySection from "./RoomsByCitySection";
import CoverageAssuranceSection from "./CoverageAssuranceSection";
import FeaturedCitiesSection from "./FeaturedCitiesSection";
import BrowseMethodsSection from "./BrowseMethodsSection";
import CityComparisonSection from "./CityComparisonSection";
import BrowseByRegionSection from "./BrowseByRegionSection";
import CityPagePreviewSection from "./CityPagePreviewSection";
import LowInventorySection from "./LowInventorySection";
import TrustSafetySection from "./TrustSafetySection";
import CityGuidesSection from "./CityGuidesSection";
import RoomsByCityFaqSection from "./RoomsByCityFaqSection";
import FinalCtaSection from "./FinalCtaSection";
import { cityData } from "./data";

const MAX_COMPARE = 3;

export default function RoomsByCityView() {
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  function toggleCompare(name: string) {
    setSelectedCities((prev) => {
      if (prev.includes(name)) return prev.filter((city) => city !== name);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, name];
    });
  }

  const selectedCityObjects = cityData.filter((city) => selectedCities.includes(city.name));

  return (
    <main>
      <RoomsByCitySection />
      <CoverageAssuranceSection />
      <FeaturedCitiesSection selectedCities={selectedCities} onToggleCompare={toggleCompare} />
      <BrowseMethodsSection />
      <CityComparisonSection selectedCities={selectedCityObjects} />
      <BrowseByRegionSection />
      <CityPagePreviewSection />
      <LowInventorySection />
      <TrustSafetySection />
      <CityGuidesSection />
      <RoomsByCityFaqSection />
      <FinalCtaSection />
    </main>
  );
}
