"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { FormField } from "@/components/start-a-listing/FormField";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { costDisclosures, providerTypeOptions, locationOptions } from "./data";

export function PricingTermsSection() {
  const [providerType, setProviderType] = useState(providerTypeOptions[0]);
  const [location, setLocation] = useState(locationOptions[0]);
  const [confirmedKey, setConfirmedKey] = useState(`${providerTypeOptions[0]}|${locationOptions[0]}`);

  const rows = costDisclosures[providerType]?.[location] ?? [];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Pricing and Terms</Eyebrow>
            <SectionTitle>Complete cost disclosure</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/live-in-providers/pricing-consultation.png"
              alt="A provider reviewing pricing terms with an agent"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                label="Provider type"
                value={providerType}
                onChange={setProviderType}
                as="select"
                options={providerTypeOptions.map((option) => ({ value: option, label: option }))}
              />
              <FormField
                label="Property location"
                value={location}
                onChange={setLocation}
                as="select"
                options={locationOptions.map((option) => ({ value: option, label: option }))}
              />
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setConfirmedKey(`${providerType}|${location}`)}
              className="mt-5 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
            >
              Check My Requirements
            </motion.button>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>Item</span>
              <span>Illustrative display</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={confirmedKey}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="divide-y divide-[#E9E0D3] bg-white"
              >
                {rows.map((row) => (
                  <div key={row.item} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
                    <span className="font-medium text-brand-navy">{row.item}</span>
                    <span className="text-neutral-600">{row.display}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="text-xs text-neutral-400">
            These USD amounts illustrate disclosure structure only. They are not Zoiko Rooms
            charges, local market averages, or a promised return.
          </p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
