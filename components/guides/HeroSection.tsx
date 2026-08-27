"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, Paragraph } from "./shared";
import { guides } from "./data";

export function HeroSection() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(boxRef, () => setFocused(false));

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return guides.filter(
      (guide) =>
        guide.title.toLowerCase().includes(q) ||
        guide.description.toLowerCase().includes(q) ||
        guide.role.toLowerCase().includes(q) ||
        guide.stage.toLowerCase().includes(q),
    );
  }, [query]);

  const showResults = focused && query.trim().length > 0;

  function handleSearch() {
    document.getElementById("featured-guides")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setFocused(false);
  }

  return (
    <section id="search-guides" className="scroll-mt-24 border-b border-[#E9E0D3] py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>{t("Guides")}</Eyebrow>
          <motion.h1 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-[42px] sm:leading-[1.15]">
            {t("Follow the right steps for your role and stage of the room journey.")}
          </motion.h1>

          <motion.div ref={boxRef} variants={fadeUp} className="relative w-full max-w-xl">
            <div className="flex items-center gap-2 rounded-full border border-[#E9E0D3] bg-white p-2 shadow-[0_10px_30px_rgba(20,20,30,0.06)]">
              <Search className="ml-3 h-4 w-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={query}
                onFocus={() => setFocused(true)}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleSearch()}
                placeholder={t('Search guides — e.g. "review a room agreement"')}
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="shrink-0 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
              >
                {t("Search")}
              </button>
            </div>

            {showResults && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white text-left shadow-[0_14px_34px_rgba(20,20,30,0.08)]">
                {matches.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-neutral-400">
                    {t("No guide matches")} &quot;{query}&quot; {t("yet. Try browsing featured guides below.")}
                  </p>
                ) : (
                  matches.map((guide) => (
                    <a
                      key={guide.key}
                      href="#featured-guides"
                      onClick={() => setFocused(false)}
                      className="flex w-full items-center justify-between gap-3 border-b border-[#E9E0D3] px-5 py-3 text-left text-sm transition-colors last:border-b-0 hover:bg-brand-cream"
                    >
                      <span className="font-semibold text-brand-navy">{t(guide.title)}</span>
                      <span className="shrink-0 text-xs text-neutral-400">{guide.duration}</span>
                    </a>
                  ))
                )}
              </div>
            )}
          </motion.div>

          <Paragraph className="mx-auto max-w-xl text-center text-xs text-neutral-400">
            {t(
              "Don't enter passwords, one-time codes, exact addresses, payment credentials, documents, or sensitive case details here.",
            )}
          </Paragraph>
        </Reveal>
      </Container>
    </section>
  );
}
