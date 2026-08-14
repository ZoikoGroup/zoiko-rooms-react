"use client";

import { useMemo, useState } from "react";
import { HeroSection } from "./HeroSection";
import { BoundarySection } from "./BoundarySection";
import { FeaturedGuidesSection } from "./FeaturedGuidesSection";
import { DirectorySection } from "./DirectorySection";
import { CoverageSection } from "./CoverageSection";
import { RolePathwaysSection, roleToAudience, type RoleValue } from "./RolePathwaysSection";
import { SafetyBannerSection } from "./SafetyBannerSection";
import { CostsSection } from "./CostsSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";
import { CityDetailModal } from "./CityDetailModal";
import { SafetyModal } from "./SafetyModal";
import { cities, type Audience, type CityKey, type CityStatus, type CityTabKey } from "./data";

export function CityGuidesView() {
  const [audienceFilter, setAudienceFilter] = useState<Audience | "all">("all");
  const [statusFilter, setStatusFilter] = useState<CityStatus | "all">("all");
  const [sortRecent, setSortRecent] = useState(false);
  const [activeRole, setActiveRole] = useState<RoleValue | null>(null);
  const [activeQuickFilter, setActiveQuickFilter] = useState<Audience | "all" | "recent">("all");

  const [activeCityKey, setActiveCityKey] = useState<CityKey | null>(null);
  const [activeTab, setActiveTab] = useState<CityTabKey>("overview");
  const [safetyOpen, setSafetyOpen] = useState(false);

  const activeCity = useMemo(() => cities.find((c) => c.key === activeCityKey) ?? null, [activeCityKey]);

  const filteredCities = useMemo(() => {
    const list = cities.filter((city) => {
      const audienceOk = audienceFilter === "all" || city.audiences.includes(audienceFilter);
      const statusOk = statusFilter === "all" || city.status === statusFilter;
      return audienceOk && statusOk;
    });
    if (sortRecent) return [...list].sort((a, b) => a.reviewedRank - b.reviewedRank);
    return list;
  }, [audienceFilter, statusFilter, sortRecent]);

  function scrollToDirectory() {
    document.getElementById("city-directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openCity(key: CityKey, tab: CityTabKey = "overview") {
    setActiveCityKey(key);
    setActiveTab(tab);
  }

  function closeCityModal() {
    setActiveCityKey(null);
  }

  function handleQuickFilter(value: Audience | "all" | "recent") {
    setActiveQuickFilter(value);
    setActiveRole(null);
    if (value === "recent") {
      setAudienceFilter("all");
      setStatusFilter("all");
      setSortRecent(true);
    } else {
      setAudienceFilter(value);
      setSortRecent(false);
    }
    scrollToDirectory();
  }

  function handleAudienceChange(value: Audience | "all") {
    setAudienceFilter(value);
    setSortRecent(false);
    setActiveRole(null);
    setActiveQuickFilter(value);
  }

  function handleStatusChange(value: CityStatus | "all") {
    setStatusFilter(value);
  }

  function handleReset() {
    setAudienceFilter("all");
    setStatusFilter("all");
    setSortRecent(false);
    setActiveRole(null);
    setActiveQuickFilter("all");
    scrollToDirectory();
  }

  function handleSelectRole(value: RoleValue) {
    setActiveRole(value);
    const mapped = roleToAudience(value);
    setAudienceFilter(mapped);
    setSortRecent(false);
    setActiveQuickFilter(mapped);
    scrollToDirectory();
  }

  return (
    <>
      <HeroSection activeQuickFilter={activeQuickFilter} onQuickFilter={handleQuickFilter} onOpenCity={openCity} />
      <BoundarySection />
      <FeaturedGuidesSection onOpenCity={openCity} />
      <DirectorySection
        filteredCities={filteredCities}
        audienceFilter={audienceFilter}
        statusFilter={statusFilter}
        onAudienceChange={handleAudienceChange}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
        onOpenCity={openCity}
      />
      <CoverageSection onOpenTopic={(tab) => openCity("berlin", tab)} />
      <RolePathwaysSection activeRole={activeRole} onSelectRole={handleSelectRole} />
      <SafetyBannerSection onOpenSafety={() => setSafetyOpen(true)} />
      <CostsSection />
      <FaqSection />
      <CtaSection onOpenSafety={() => setSafetyOpen(true)} />

      <CityDetailModal
        city={activeCity}
        tab={activeTab}
        onTabChange={setActiveTab}
        onClose={closeCityModal}
        onOpenSafety={() => setSafetyOpen(true)}
      />
      <SafetyModal isOpen={safetyOpen} onClose={() => setSafetyOpen(false)} />
    </>
  );
}
