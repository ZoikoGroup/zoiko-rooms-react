"use client";

import { motion } from "framer-motion";
import { budgetOptions, stayLengthOptions } from "./data";

export type DraftFilters = {
  location: string;
  moveIn: string;
  budgetKey: string;
  stayLengthKey: string;
};

type SearchFiltersBarProps = {
  draft: DraftFilters;
  onDraftChange: (next: DraftFilters) => void;
  onSubmit: () => void;
  locationInputRef: React.RefObject<HTMLInputElement | null>;
};

export function SearchFiltersBar({ draft, onDraftChange, onSubmit, locationInputRef }: SearchFiltersBarProps) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 rounded-2xl border border-[#D9C7B3] bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:flex-wrap"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">Location</span>
        <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
          <input
            ref={locationInputRef}
            type="text"
            value={draft.location}
            onChange={(event) => onDraftChange({ ...draft, location: event.target.value })}
            placeholder="City, neighborhood, or building"
            className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">Move-in</span>
        <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
          <input
            type="text"
            value={draft.moveIn}
            onChange={(event) => onDraftChange({ ...draft, moveIn: event.target.value })}
            placeholder="Date or flexible"
            className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">Monthly Budget</span>
        <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
          <select
            value={draft.budgetKey}
            onChange={(event) => onDraftChange({ ...draft, budgetKey: event.target.value })}
            className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none"
          >
            {budgetOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="px-1 text-xs font-medium uppercase tracking-wide text-neutral-500">Stay Length</span>
        <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
          <select
            value={draft.stayLengthKey}
            onChange={(event) => onDraftChange({ ...draft, stayLengthKey: event.target.value })}
            className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none"
          >
            {stayLengthOptions.map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
        className="h-10 shrink-0 rounded-lg bg-brand-navy px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
      >
        Update Search
      </motion.button>
    </motion.form>
  );
}
