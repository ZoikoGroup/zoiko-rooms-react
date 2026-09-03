"use client";

import { Container, Reveal } from "@/components/ui";
import { regionOptions, languageOptions, currencyOptions } from "@/lib/nav-data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { footerColumns } from "./footer-data";
import { FooterBrand } from "./FooterBrand";
import { FooterPillDropdown } from "./FooterPillDropdown";
import { FooterColumn } from "./FooterColumn";
import { FooterTrustBadges } from "./FooterTrustBadges";
import { FooterOffices } from "./FooterOffices";
import { FooterBottomBar } from "./FooterBottomBar";

export function Footer() {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="mt-auto bg-[#1B2438]">
      <Container className="flex flex-col gap-10 py-14">
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <FooterBrand />
            <div className="flex flex-wrap items-center gap-2">
              <FooterPillDropdown storageKey="zoiko-region" ariaLabel="Select region" options={regionOptions} />
              <FooterPillDropdown
                storageKey="zoiko-language"
                ariaLabel="Select language"
                options={languageOptions}
                value={language}
                onSelect={setLanguage}
              />
              <FooterPillDropdown
                storageKey="zoiko-currency"
                ariaLabel="Select currency"
                options={currencyOptions}
                showCode
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 xl:grid-cols-7">
            {footerColumns.map((column) => (
              <FooterColumn key={column.title} title={column.title} links={column.links} />
            ))}
          </div>

          <div className="border-t border-white/10 pt-10">
            <FooterTrustBadges />
          </div>

          <div className="border-t border-white/10 pt-10">
            <FooterOffices />
          </div>
        </Reveal>

        <FooterBottomBar />
      </Container>
    </footer>
  );
}
