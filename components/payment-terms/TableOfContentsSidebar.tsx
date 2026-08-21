"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { tocItems, helpLinks } from "./data";

export function TableOfContentsSidebar() {
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
    <div className="w-full shrink-0 lg:sticky lg:top-24 lg:w-60 lg:self-start">
      <div className="flex flex-col gap-6">
        <div className="relative flex flex-col gap-1">
          <span className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">On this page</span>
          {tocItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleClick(event, item.id)}
                className="relative py-1.5 pl-3 text-sm"
              >
                {isActive && (
                  <motion.span
                    layoutId="toc-active-indicator"
                    transition={{ duration: 0.25, ease: easeOut }}
                    className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-brand-red"
                  />
                )}
                <span
                  className={`block transition-colors duration-200 hover:text-brand-navy ${
                    isActive ? "font-semibold text-brand-navy" : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        <div className="rounded-2xl border border-[#E9E0D3] bg-[#FFFDF8] p-5">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-wide text-neutral-400">
            Help &amp; escalation
          </span>
          <div className="flex flex-col divide-y divide-[#E9E0D3]">
            {helpLinks.map((label) => (
              <a
                key={label}
                href="/resources"
                className="py-2.5 text-sm font-medium text-brand-navy transition-colors first:pt-0 last:pb-0 hover:text-brand-red"
              >
                {label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
