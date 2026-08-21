"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { easeOut } from "@/lib/motion";
import { tocGroups } from "./data";

type TableOfContentsSidebarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const allIds = tocGroups.flatMap((group) => group.items.map((item) => item.id));

export function TableOfContentsSidebar({ searchQuery, onSearchChange }: TableOfContentsSidebarProps) {
  const [activeId, setActiveId] = useState(allIds[0]);

  useEffect(() => {
    const sections = allIds.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
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
    <div className="w-full shrink-0 rounded-3xl border border-[#E9E0D3] bg-[#FFFDF8] p-5 lg:sticky lg:top-24 lg:w-72 lg:self-start">
      <div className="relative mb-5">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search this agreement"
          className="w-full rounded-full border border-[#E9E0D3] bg-white py-2.5 pl-10 pr-4 text-sm text-brand-ink outline-none placeholder:text-neutral-400 focus:border-brand-navy"
        />
      </div>

      <div className="flex flex-col gap-6">
        {tocGroups.map((group) => (
          <div key={group.title} className="flex flex-col gap-1">
            <span className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">{group.title}</span>
            {group.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleClick(event, item.id)}
                  className="relative flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm"
                >
                  {isActive && (
                    <motion.span
                      layoutId="agreement-toc-active"
                      transition={{ duration: 0.25, ease: easeOut }}
                      className="absolute inset-0 rounded-xl bg-[#F1E7DA]"
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? "font-semibold text-brand-red" : "text-brand-navy"}`}>{item.label}</span>
                  {item.hasDot && <span className="relative z-10 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />}
                </a>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
