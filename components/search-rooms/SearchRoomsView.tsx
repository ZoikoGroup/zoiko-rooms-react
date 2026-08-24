"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Container, Reveal } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { rooms, budgetOptions } from "./data";
import { SearchFiltersBar, type DraftFilters } from "./SearchFiltersBar";
import { FilterChipsRow } from "./FilterChipsRow";
import { ResultsToolbar, type ViewMode } from "./ResultsToolbar";
import { RoomCard } from "./RoomCard";
import { MapView } from "./MapView";
import { SupportCallouts } from "./SupportCallouts";

const DEFAULT_DRAFT: DraftFilters = {
  location: "",
  moveIn: "",
  budgetKey: "800-1400",
  stayLengthKey: "3-6",
};

export function SearchRoomsView() {
  const { t } = useLanguage();
  const [draft, setDraft] = useState<DraftFilters>(DEFAULT_DRAFT);
  const [applied, setApplied] = useState<DraftFilters>(DEFAULT_DRAFT);
  const [activeFilters, setActiveFilters] = useState<string[]>([
    "furnished",
    "bills-included",
    "step-free",
    "live-in-provider",
    "near-transit",
  ]);
  const [accessibleOnly, setAccessibleOnly] = useState(false);
  const [sortKey, setSortKey] = useState("recommended");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [comparingIds, setComparingIds] = useState<Set<string>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const [searchSaved, setSearchSaved] = useState(false);
  const [alertCreated, setAlertCreated] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const locationInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!linkCopied) return;
    const id = setTimeout(() => setLinkCopied(false), 2000);
    return () => clearTimeout(id);
  }, [linkCopied]);

  const filteredRooms = useMemo(() => {
    const budgetRange = budgetOptions.find((option) => option.key === applied.budgetKey)?.range ?? null;
    const location = applied.location.trim().toLowerCase();

    return rooms.filter((room) => {
      if (location && !room.title.toLowerCase().includes(location) && !room.facts.toLowerCase().includes(location)) {
        return false;
      }
      if (budgetRange && (room.price < budgetRange[0] || room.price > budgetRange[1])) return false;
      if (applied.stayLengthKey !== "any" && room.stayLength !== applied.stayLengthKey) return false;
      if (accessibleOnly && !room.accessible) return false;
      if (activeFilters.length && !activeFilters.every((filter) => room.tags.includes(filter))) return false;
      return true;
    });
  }, [applied, accessibleOnly, activeFilters]);

  const sortedRooms = useMemo(() => {
    const list = [...filteredRooms];
    if (sortKey === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sortKey === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [filteredRooms, sortKey]);

  function toggleSaved(id: string) {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleComparing(id: string) {
    setComparingIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleQuickFilter(key: string) {
    setActiveFilters((prev) => (prev.includes(key) ? prev.filter((f) => f !== key) : [...prev, key]));
  }

  function handleEditSearch() {
    locationInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    locationInputRef.current?.focus();
  }

  async function handleShareSearch() {
    const params = new URLSearchParams();
    if (applied.location) params.set("location", applied.location);
    if (applied.moveIn) params.set("moveIn", applied.moveIn);
    if (applied.budgetKey !== "any") params.set("budget", applied.budgetKey);
    if (applied.stayLengthKey !== "any") params.set("stay", applied.stayLengthKey);
    if (activeFilters.length) params.set("filters", activeFilters.join(","));
    if (accessibleOnly) params.set("accessible", "1");

    const query = params.toString();
    const url = `${window.location.origin}/find-a-room/search-rooms${query ? `?${query}` : ""}`;

    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
    } catch {
      // Clipboard access can be denied by the browser — fail silently.
    }
  }

  return (
    <Container className="flex flex-col gap-6 py-8 sm:py-10">
      <h1 className="font-heading text-2xl font-semibold text-brand-navy">{t("Search Rooms")}</h1>

      <SearchFiltersBar
        draft={draft}
        onDraftChange={setDraft}
        onSubmit={() => setApplied(draft)}
        locationInputRef={locationInputRef}
      />

      <FilterChipsRow
        activeFilters={activeFilters}
        onRemove={toggleQuickFilter}
        searchSaved={searchSaved}
        onSaveSearch={() => setSearchSaved((v) => !v)}
        alertCreated={alertCreated}
        onCreateAlert={() => setAlertCreated((v) => !v)}
        linkCopied={linkCopied}
        onShareSearch={handleShareSearch}
      />

      <div className="border-b border-[#E9E0D3] pb-6">
        <ResultsToolbar
          resultCount={sortedRooms.length}
          activeFilters={activeFilters}
          onToggleFilter={toggleQuickFilter}
          accessibleOnly={accessibleOnly}
          onToggleAccessible={() => setAccessibleOnly((v) => !v)}
          sortKey={sortKey}
          onSortChange={setSortKey}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {sortedRooms.length === 0 ? (
        <div className="rounded-2xl border border-[#E9E0D3] bg-white p-10 text-center text-sm text-neutral-500">
          {t("No rooms match this search yet. Try removing a filter or widening your budget or stay length.")}
        </div>
      ) : (
        <div className={viewMode === "split" ? "grid grid-cols-1 gap-6 lg:grid-cols-2" : "flex flex-col gap-4"}>
          {viewMode !== "map" && (
            <Reveal className="flex flex-col gap-4">
              {sortedRooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  saved={savedIds.has(room.id)}
                  onToggleSaved={() => toggleSaved(room.id)}
                  comparing={comparingIds.has(room.id)}
                  onToggleComparing={() => toggleComparing(room.id)}
                />
              ))}
            </Reveal>
          )}
          {viewMode !== "list" && (
            <MapView roomsToShow={sortedRooms} hoveredId={hoveredId} onHover={setHoveredId} />
          )}
        </div>
      )}

      <SupportCallouts onEditSearch={handleEditSearch} onSaveSearch={() => setSearchSaved((v) => !v)} />
    </Container>
  );
}
