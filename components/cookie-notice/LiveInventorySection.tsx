"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { inventoryGroups } from "./data";

const columns = ["Technology", "Provider", "Domain/Owner", "Purpose", "Type", "Party", "Duration", "Trigger", "Control"];

export function LiveInventorySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Live Cookie &amp; Tracker Inventory</Eyebrow>
            <SectionTitle>What&apos;s actually deployed — not a static list.</SectionTitle>
            <Paragraph>
              This table is generated from our production tag registry, grouped by category. If a
              provider is removed, its historic entry stays available in the version that was
              active during its deployment.
            </Paragraph>
            <p className="text-xs text-neutral-400">
              Inventory version: INV-2026-08-12 · Effective date shown to users: 20 Apr 2026
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {inventoryGroups.map(({ category, items }) => (
              <motion.div key={category} variants={fadeUp} className="flex flex-col gap-3">
                <h3 className="font-heading text-base font-medium text-brand-navy">
                  {category} · {items.length} {items.length === 1 ? "technology" : "technologies"}
                </h3>
                <div className="overflow-x-auto">
                  <div className="min-w-[920px] overflow-hidden rounded-2xl border border-[#E9E0D3]">
                    <div
                      className="grid gap-3 bg-[#F7F2EA] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-neutral-500"
                      style={{ gridTemplateColumns: "1.3fr 1fr 1fr 1.6fr 0.8fr 0.6fr 0.8fr 0.9fr 1.2fr" }}
                    >
                      {columns.map((column) => (
                        <span key={column}>{column}</span>
                      ))}
                    </div>
                    <div className="divide-y divide-[#E9E0D3] bg-white">
                      {items.map((item) => (
                        <div
                          key={item.technology}
                          className="grid items-center gap-3 px-5 py-3 text-sm"
                          style={{ gridTemplateColumns: "1.3fr 1fr 1fr 1.6fr 0.8fr 0.6fr 0.8fr 0.9fr 1.2fr" }}
                        >
                          <span className="font-medium text-brand-navy">{item.technology}</span>
                          <span className="text-neutral-600">{item.provider}</span>
                          <span className="text-neutral-500">{item.domain}</span>
                          <span className="text-neutral-600">{item.purpose}</span>
                          <span className="text-neutral-500">{item.type}</span>
                          <span className={item.party === "First" ? "text-emerald-700" : "text-amber-700"}>{item.party}</span>
                          <span className="text-neutral-500">{item.duration}</span>
                          <span className="text-neutral-500">{item.trigger}</span>
                          <span className="text-neutral-500">{item.control}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs italic text-neutral-400">
            *Last inventory scan* is an internal operational field and isn&apos;t shown here as a
            public trust badge — the effective date above is what governs this notice.
          </p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
