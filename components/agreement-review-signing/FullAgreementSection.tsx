"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, Card, Tag } from "./shared";
import { clauses } from "./data";

export function FullAgreementSection({ searchQuery }: { searchQuery: string }) {
  const [openNumber, setOpenNumber] = useState<number | null>(1);

  const visibleClauses = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return clauses;
    return clauses.filter((clause) => clause.title.toLowerCase().includes(q) || clause.body.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <Card id="full-agreement">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Full Agreement</Eyebrow>
          <SectionTitle>Room Agreement — current version v3</SectionTitle>
          <Paragraph>Read every section below. Defined terms and cross-references stay linked to their source clause.</Paragraph>
        </div>

        {visibleClauses.length === 0 ? (
          <p className="rounded-2xl border border-[#E9E0D3] bg-white px-5 py-6 text-center text-sm text-neutral-400">
            No clause matches &quot;{searchQuery}&quot;.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-[#E9E0D3]">
            {visibleClauses.map((clause) => {
              const isOpen = openNumber === clause.number;
              return (
                <div key={clause.number} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenNumber(isOpen ? null : clause.number)}
                    className="flex w-full items-center justify-between gap-4 py-3.5 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-neutral-400">{clause.number}</span>
                      <span className="text-sm font-semibold text-brand-navy">{clause.title}</span>
                      {clause.tag && <Tag label={clause.tag.label} tone={clause.tag.tone} />}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-red"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pl-6 text-sm leading-relaxed text-neutral-600">{clause.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </Reveal>
    </Card>
  );
}
