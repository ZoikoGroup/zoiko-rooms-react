"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui";
import { useSearchModal } from "@/components/search";
import { currencyOptions, languageOptions } from "@/lib/nav-data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { NavPillDropdown } from "./NavPillDropdown";

export function NavActions() {
  const { open } = useSearchModal();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={open}
        aria-label="Open search"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-brand-navy transition-colors hover:bg-brand-navy/5"
      >
        <Search className="h-5 w-5" />
      </button>

      <Button href="/login" variant="secondary" size="sm" className="hidden sm:inline-flex">
        {t("Sign in")}
      </Button>

      <div className="hidden items-center gap-1 2xl:flex">
        <NavPillDropdown
          storageKey="zoiko-language"
          ariaLabel="Select language"
          options={languageOptions}
          value={language}
          onSelect={setLanguage}
        />
        <NavPillDropdown storageKey="zoiko-currency" ariaLabel="Select currency" options={currencyOptions} />
      </div>
    </div>
  );
}
