"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { tocItems } from "./data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function TableOfContentsSidebar() {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
        setActiveId(topMost.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  }

  return (
    <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-64 lg:self-start">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-400">
        {t("On this page")}
      </span>
      <div className="flex flex-col gap-1">
        {tocItems.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              className="relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
            >
              {isActive && (
                <motion.span
                  layoutId="fair-housing-toc-active"
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="absolute inset-0 rounded-lg border border-brand-red bg-white"
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  isActive ? "font-semibold text-brand-red" : "text-neutral-500 hover:text-brand-navy"
                }`}
              >
                {String(index + 1).padStart(2, "0")}. {t(item.label)}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
