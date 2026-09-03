"use client";

import Link from "next/link";
import type { FooterColumnData } from "./footer-data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function FooterColumn({ title, links }: FooterColumnData) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{t(title)}</p>
      <div className="flex flex-col gap-3">
        {links.map((link) =>
          link.href ? (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs tracking-tight text-white transition-colors hover:text-[#D98C5F] sm:text-sm 2xl:whitespace-nowrap 2xl:text-[11px]"
            >
              {t(link.label)}
            </Link>
          ) : (
            <span key={link.label} className="text-xs tracking-tight text-white/40 sm:text-sm 2xl:whitespace-nowrap 2xl:text-[11px]">
              {t(link.label)}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
