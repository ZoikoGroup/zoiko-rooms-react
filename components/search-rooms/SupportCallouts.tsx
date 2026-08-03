"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SupportCalloutsProps = {
  onEditSearch: () => void;
  onSaveSearch: () => void;
};

export function SupportCallouts({ onEditSearch, onSaveSearch }: SupportCalloutsProps) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-2 rounded-2xl bg-[#F6ECD4] p-6"
      >
        <h3 className="font-heading text-base font-medium text-brand-navy">
          Not finding the right room?
        </h3>
        <p className="text-sm text-neutral-600">
          Change dates, area, budget, stay length, or optional preferences. Keep essential
          accessibility and safety requirements.
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-medium text-brand-red">
          <button type="button" onClick={onEditSearch} className="transition-colors hover:text-brand-red-dark">
            Edit Search
          </button>
          <button type="button" onClick={onSaveSearch} className="transition-colors hover:text-brand-red-dark">
            Save Search
          </button>
          <a href="/rooms-by-city" className="transition-colors hover:text-brand-red-dark">
            View Nearby Areas
          </a>
          <a href="/resources" className="transition-colors hover:text-brand-red-dark">
            Get Help
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-2xl border border-[#E9E0D3] border-l-4 border-l-brand-red bg-white p-6"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-red">
          Understand status before inquiry or application
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Availability, provider identity, provider authority, room evidence, price completeness,
          payment route, and organization relationship are separate. Report any mismatch or
          pressure to pay.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-medium text-brand-red">
          <a href="/how-it-works" className="transition-colors hover:text-brand-red-dark">
            Verification & Authority
          </a>
          <a href="/resources" className="transition-colors hover:text-brand-red-dark">
            Safety & Scam Prevention
          </a>
          <a href="/resources" className="transition-colors hover:text-brand-red-dark">
            Get Support
          </a>
        </div>
      </motion.div>
    </div>
  );
}
