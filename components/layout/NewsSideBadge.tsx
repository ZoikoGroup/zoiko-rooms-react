"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// A persistent, site-wide side tab (not part of the navbar or footer) that
// stays fixed to the left edge of the viewport while scrolling.
export function NewsSideBadge() {
  const { t } = useLanguage();

  return (
    <Link
      href="/news"
      aria-label={t("Read our latest news")}
      className="group fixed left-0 top-1/2 z-40 flex -translate-y-1/2 items-center gap-1.5 rounded-r-full border border-l-0 border-brand-red/20 bg-[#FBE9E9] py-2.5 pl-3 pr-4 text-xs font-semibold text-brand-red shadow-md transition-colors hover:bg-brand-red hover:text-white"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red transition-colors group-hover:bg-white" />
      {t("News")}
    </Link>
  );
}
