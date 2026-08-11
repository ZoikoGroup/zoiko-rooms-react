"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const models = [
  {
    key: "independent",
    label: "Independent",
    description: "Students and staff search and apply directly, with no formal university relationship. The university is not shown as a participant in the transaction.",
  },
  {
    key: "referred",
    label: "University Referred",
    description: "The university directs or invites students and staff to Zoiko Rooms — no eligibility or outcome guarantee.",
  },
  {
    key: "distributed",
    label: "University Distributed",
    description: "The university makes approved inventory discoverable to its community; provider authority and room evidence remain separate.",
  },
  {
    key: "managed",
    label: "University Managed",
    description: "The university or an appointed operator manages the accommodation within a documented scope.",
  },
  {
    key: "allocated",
    label: "University Allocated",
    description: "The university proposes or assigns rooms under current criteria and dates — decline stays real.",
  },
  {
    key: "subsidized",
    label: "Subsidized",
    description: "The university contributes toward cost under current eligibility and limits; uncovered costs remain visible.",
  },
  {
    key: "direct-billed",
    label: "Direct Billed",
    description: "Approved costs are billed directly to the university; covered and excluded items are explicit.",
  },
  {
    key: "support-only",
    label: "Support Only",
    description: "The university offers guidance and advocacy only — no control over rooms or decisions.",
  },
];

export function ChooseModelSection() {
  const [selectedKey, setSelectedKey] = useState(models[0].key);
  const selected = models.find((model) => model.key === selectedKey) ?? models[0];

  return (
    <SectionDivider className="bg-white" id="choose-your-model">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>Choose Your Model</Eyebrow>
            <SectionTitle>Choose the right university relationship</SectionTitle>
          </div>

          <div className="flex flex-wrap gap-2">
            {models.map((model) => {
              const isSelected = selectedKey === model.key;
              return (
                <button
                  key={model.key}
                  type="button"
                  onClick={() => setSelectedKey(model.key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {model.label}
                </button>
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
              className="rounded-2xl border border-[#E9E0D3] bg-white p-6"
            >
              <h3 className="font-heading text-lg font-medium text-brand-navy">{selected.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{selected.description}</p>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
