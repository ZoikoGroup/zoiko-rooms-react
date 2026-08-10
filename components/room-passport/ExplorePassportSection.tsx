"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Reveal, EvidenceBadge, ImageFade } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow } from "./shared";

// Explicit bento placement: address is a tall tile spanning column 1's first
// two rows, furnishings sits below it, and dimensions spans both remaining
// columns across the top row.
const placement: Record<string, string> = {
  address: "col-start-1 row-start-1 row-span-2",
  dimensions: "col-start-2 col-span-2 row-start-1",
  lockability: "col-start-2 row-start-2",
  bathroom: "col-start-3 row-start-2",
  furnishings: "col-start-1 row-start-3",
  internet: "col-start-2 row-start-3",
  household: "col-start-3 row-start-3",
};

const fields = [
  {
    key: "address",
    label: "Address & location",
    tier: "Inspected",
    tone: "green" as const,
    source: "Confirmed via in-person visit, reviewed Jun 2026.",
    image: "/images/room-passport/field-address-location.png",
  },
  {
    key: "dimensions",
    label: "Room dimensions",
    tier: "Documented",
    tone: "amber" as const,
    source: "Confirmed against the floor plan document, reviewed Jun 2026.",
    image: "/images/room-passport/field-room-dimensions.png",
  },
  {
    key: "lockability",
    label: "Lockability",
    tier: "Inspected",
    tone: "green" as const,
    source: "Confirmed via in-person visit, reviewed Jun 2026.",
    image: "/images/room-passport/field-lockability.png",
  },
  {
    key: "bathroom",
    label: "Bathroom arrangement",
    tier: "Documented",
    tone: "amber" as const,
    source: "Confirmed against the listing document, reviewed May 2026.",
    image: "/images/room-passport/field-bathroom-arrangement.png",
  },
  {
    key: "furnishings",
    label: "Furnishings",
    tier: "Declared",
    tone: "gray" as const,
    source: "Entered by the provider, not independently checked.",
    image: "/images/room-passport/field-furnishings.png",
  },
  {
    key: "internet",
    label: "Internet speed",
    tier: "Declared",
    tone: "gray" as const,
    source: "Entered by the provider, not independently checked.",
    image: "/images/room-passport/field-internet-speed.png",
  },
  {
    key: "household",
    label: "Household composition",
    tier: "Inspected",
    tone: "green" as const,
    source: "Confirmed via live remote walkthrough, reviewed Jun 2026.",
    image: "/images/room-passport/field-household-composition.png",
  },
];

export function ExplorePassportSection() {
  const [selectedKey, setSelectedKey] = useState(fields[0].key);
  const selected = fields.find((field) => field.key === selectedKey) ?? fields[0];

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Explore a Real Passport</Eyebrow>
            <h2 className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              Click any field to see its evidence level and source
            </h2>
          </div>

          <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 [grid-auto-rows:140px] sm:[grid-auto-rows:180px]">
            {fields.map(({ key, label, image }) => {
              const isSelected = selectedKey === key;
              return (
                <motion.button
                  key={key}
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  onClick={() => setSelectedKey(key)}
                  aria-label={label}
                  className={`relative overflow-hidden  transition-shadow ${
                    isSelected ? "ring-brand-navy" : "ring-transparent"
                  } ${placement[key]}`}
                >
                  <ImageFade
                    src={image}
                    alt={label}
                    fill
                  />
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-2  p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-heading text-base font-medium text-brand-navy">{selected.label}</span>
                <EvidenceBadge label={selected.tier} tone={selected.tone} variant="outline" />
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">{selected.source}</p>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </section>
  );
}
