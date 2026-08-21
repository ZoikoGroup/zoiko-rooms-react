"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { Paragraph, Callout } from "./shared";
import { regionOptions, regionProfiles, type RegionKey } from "./data";

type HeroSectionProps = {
  region: RegionKey;
  onRegionChange: (region: RegionKey) => void;
};

export function HeroSection({ region, onRegionChange }: HeroSectionProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(rootRef, () => setOpen(false));

  const activeLabel = regionOptions.find((option) => option.key === region)?.label ?? regionOptions[0].label;
  const effectiveDate = regionProfiles[region].effectiveDate;

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
            — Legal · Fair Housing &amp; Anti-Discrimination
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl font-medium text-brand-navy sm:text-5xl">
            Everyone deserves a fair chance to find a home.
          </motion.h1>
          <Paragraph>
            Zoiko Rooms prohibits discrimination in listings, searches, messages, applications,
            screening, pricing, payments and housing decisions based on protected characteristics
            or other statuses covered by our policy.
          </Paragraph>
          <motion.p variants={fadeUp} className="text-xs text-neutral-400">
            Applies globally. Local legal rules and permitted exceptions vary.
          </motion.p>

          <motion.div variants={fadeUp} ref={rootRef} className="relative flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              className="flex items-center gap-2 rounded-full border border-[#E9E0D3] bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-brand-navy"
            >
              Your region: {activeLabel}
              <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            <span className="text-xs text-neutral-400">Effective: {effectiveDate}</span>

            {open && (
              <div className="absolute left-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-xl border border-[#E9E0D3] bg-[#FFFDF8] shadow-lg">
                {regionOptions.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => {
                      onRegionChange(option.key);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-cream ${
                      option.key === region ? "font-semibold text-brand-red" : "text-brand-navy"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <Callout label="Important distinction" className="max-w-3xl">
            &quot;Protected by Zoiko Rooms policy&quot; is not the same statement as &quot;protected
            by every local statute.&quot; Our platform baseline is deliberately broader than many
            local laws — regional rules may add protections; they never quietly narrow this one.
          </Callout>
        </Reveal>
      </Container>
    </section>
  );
}
