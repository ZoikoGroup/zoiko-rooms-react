"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui";
import { useSearchModal } from "@/components/search";

export function NavActions() {
  const { open } = useSearchModal();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={open}
        aria-label="Open search"
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-navy/5"
      >
        <Search className="h-5 w-5" />
      </button>

      <Button href="#" variant="secondary" size="sm" className="hidden sm:inline-flex">
        Sign in
      </Button>

      <div className="hidden items-center gap-1 xl:flex">
        <span className="rounded-full px-2.5 py-1 text-xs font-medium text-neutral-500">
          EN
        </span>
        <span className="rounded-full px-2.5 py-1 text-xs font-medium text-neutral-500">
          USD
        </span>
      </div>
    </div>
  );
}
