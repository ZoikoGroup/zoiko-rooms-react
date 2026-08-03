"use client";

import { useState } from "react";
import { ChevronDown, List, Map, Columns2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { quickFilters, sortOptions } from "./data";

export type ViewMode = "list" | "map" | "split";

type ResultsToolbarProps = {
  resultCount: number;
  activeFilters: string[];
  onToggleFilter: (key: string) => void;
  accessibleOnly: boolean;
  onToggleAccessible: () => void;
  sortKey: string;
  onSortChange: (key: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
};

const viewOptions: { mode: ViewMode; label: string; icon: typeof List }[] = [
  { mode: "list", label: "List", icon: List },
  { mode: "map", label: "Map", icon: Map },
  { mode: "split", label: "Split", icon: Columns2 },
];

export function ResultsToolbar({
  resultCount,
  activeFilters,
  onToggleFilter,
  accessibleOnly,
  onToggleAccessible,
  sortKey,
  onSortChange,
  viewMode,
  onViewModeChange,
}: ResultsToolbarProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-brand-navy">
          {resultCount} {resultCount === 1 ? "room matches" : "rooms match"} this search
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFiltersOpen((open) => !open)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              filtersOpen
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
            }`}
          >
            Filters ({activeFilters.length})
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${filtersOpen ? "rotate-180" : ""}`} />
          </button>

          <button
            type="button"
            onClick={onToggleAccessible}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
              accessibleOnly
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
            }`}
          >
            Accessible features
          </button>

          <div className="flex h-8 items-center rounded-full border border-[#E9E0D3] px-3">
            <select
              value={sortKey}
              onChange={(event) => onSortChange(event.target.value)}
              className="bg-transparent text-sm font-medium text-brand-navy outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1 rounded-full border border-[#E9E0D3] p-1">
            {viewOptions.map(({ mode, label, icon: Icon }) => (
              <button
                key={mode}
                type="button"
                onClick={() => onViewModeChange(mode)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  viewMode === mode ? "bg-brand-navy text-white" : "text-brand-navy hover:bg-brand-navy/5"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {filtersOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-3 rounded-2xl border border-[#E9E0D3] bg-white p-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickFilters.map((filter) => {
                const checked = activeFilters.includes(filter.key);
                return (
                  <label
                    key={filter.key}
                    className="flex cursor-pointer items-center gap-2.5 text-sm text-brand-ink"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleFilter(filter.key)}
                      className="h-4 w-4 rounded border-neutral-300 accent-brand-navy"
                    />
                    {filter.label}
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
