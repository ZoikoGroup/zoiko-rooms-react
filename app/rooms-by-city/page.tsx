import {
    BrowseMethodsSection,
    BrowseByRegionSection,
    CityComparisonSection,
    CityPagePreviewSection,
    CityGuidesSection,
    CoverageAssuranceSection,
    FeaturedCitiesSection,
    FinalCtaSection,
    LowInventorySection,
    RoomsByCitySection,
    RoomsByCityFaqSection,
    TrustSafetySection,
} from "@/components/rooms-by-city";

export default function Page() {
    return (
        <main>
            <RoomsByCitySection />
            <CoverageAssuranceSection />
            <FeaturedCitiesSection />
            <BrowseMethodsSection />
            <CityComparisonSection />
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
