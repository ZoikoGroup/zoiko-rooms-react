"use client";

import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { quickFilters } from "./data";

type FilterChipsRowProps = {
  activeFilters: string[];
  onRemove: (key: string) => void;
  searchSaved: boolean;
  onSaveSearch: () => void;
  alertCreated: boolean;
  onCreateAlert: () => void;
  linkCopied: boolean;
  onShareSearch: () => void;
};

export function FilterChipsRow({
  activeFilters,
  onRemove,
  searchSaved,
  onSaveSearch,
  alertCreated,
  onCreateAlert,
  linkCopied,
  onShareSearch,
}: FilterChipsRowProps) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <AnimatePresence initial={false}>
          {activeFilters.map((key) => {
            const filter = quickFilters.find((f) => f.key === key);
            if (!filter) return null;
            return (
              <motion.button
                key={key}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                onClick={() => onRemove(key)}
                className="flex items-center gap-1.5 rounded-full bg-[#F1E7DA] px-3 py-1.5 text-sm font-medium text-[#A85A34] transition-colors hover:bg-[#EADCC7]"
              >
                {t(filter.label)}
                <X className="h-3 w-3" />
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium">
        <button
          type="button"
          onClick={onSaveSearch}
          className="inline-flex items-center gap-1 text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
        >
          {searchSaved && <Check className="h-3.5 w-3.5" />}
          {searchSaved ? t("Search saved") : t("Save Search")}
        </button>
        <button
          type="button"
          onClick={onCreateAlert}
          className="inline-flex items-center gap-1 text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
        >
          {alertCreated && <Check className="h-3.5 w-3.5" />}
          {alertCreated ? t("Alert created") : t("Create Alert")}
        </button>
        <button
          type="button"
          onClick={onShareSearch}
          className="inline-flex items-center gap-1 text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
        >
          {linkCopied && <Check className="h-3.5 w-3.5" />}
          {linkCopied ? t("Link copied") : t("Share Search")}
        </button>
      </div>
    </div>
  );
}
