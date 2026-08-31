"use client";

import { Container } from "@/components/ui";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { documentMeta } from "./data";

export function DocMetaFooterSection() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[#E9E0D3] bg-[#FFFDF8] py-4">
      <Container className="flex flex-col items-center justify-between gap-3 text-xs text-neutral-500 sm:flex-row">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>
            {t("Title:")} {t(documentMeta.title)}
          </span>
          <span>
            {t("Effective:")} {documentMeta.effective}
          </span>
          <span>
            {t("Last updated:")} {documentMeta.lastUpdated}
          </span>
          <span>
            {t("Version:")} {documentMeta.version}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="font-medium text-brand-navy hover:text-brand-red">
            {t("Previous versions")}
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="font-medium text-brand-navy hover:text-brand-red"
          >
            {t("Print / Save as PDF")}
          </button>
        </div>
      </Container>
    </section>
  );
}
