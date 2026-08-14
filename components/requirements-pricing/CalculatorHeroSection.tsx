"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { FormField } from "@/components/start-a-listing/FormField";
import { Eyebrow, Callout } from "./shared";
import { providerTypeOptions, accountTypeOptions, locationOptions, locationToCountry } from "./data";

export type CalculatorState = {
  providerType: string;
  location: string;
  activeRooms: string;
  accountType: string;
  billingCountry: string;
};

type CalculatorHeroSectionProps = {
  draft: CalculatorState;
  onDraftChange: (next: CalculatorState) => void;
  onSubmit: () => void;
};

export function CalculatorHeroSection({ draft, onDraftChange, onSubmit }: CalculatorHeroSectionProps) {
  function updateField<K extends keyof CalculatorState>(key: K, value: CalculatorState[K]) {
    if (key === "location") {
      onDraftChange({ ...draft, location: value, billingCountry: locationToCountry[value] ?? draft.billingCountry });
      return;
    }
    onDraftChange({ ...draft, [key]: value });
  }

  return (
    <section className="pt-10 pb-16 sm:pt-14 sm:pb-24">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Requirements &amp; Pricing</Eyebrow>
            <motion.h1 variants={fadeUp} className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              See what your provider path requires and every current Zoiko Rooms charge before you
              start.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-2xl text-[15px] leading-relaxed text-[#7A7266]">
              Select how you are offering the room, listing location, expected number of active
              rooms, and billing context. We&apos;ll show the applicable evidence, review stages,
              platform pricing, taxes, optional services, and refund terms.
            </motion.p>
          </div>

          <Callout label="Pricing integrity notice" tone="rose" className="max-w-3xl">
            This page defines the fields and states a real pricing service must populate. Every
            number below is a labeled illustrative example for review purposes — production must
            never present a placeholder value as current pricing.
          </Callout>

          <motion.div variants={fadeUp} className="rounded-3xl border border-[#E9E0D3] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <FormField
                label="Provider type"
                value={draft.providerType}
                onChange={(value) => updateField("providerType", value)}
                as="select"
                options={providerTypeOptions.map((option) => ({ value: option, label: option }))}
              />
              <FormField
                label="Room location"
                value={draft.location}
                onChange={(value) => updateField("location", value)}
                as="select"
                options={locationOptions.map((option) => ({ value: option, label: option }))}
              />
              <FormField
                label="Active-room range"
                type="number"
                value={draft.activeRooms}
                onChange={(value) => updateField("activeRooms", value)}
              />
              <FormField
                label="Account type"
                value={draft.accountType}
                onChange={(value) => updateField("accountType", value)}
                as="select"
                options={accountTypeOptions.map((option) => ({ value: option, label: option }))}
              />
              <FormField
                label="Billing country"
                value={draft.billingCountry}
                onChange={(value) => updateField("billingCountry", value)}
              />
              <div className="flex items-end">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onSubmit}
                  className="w-full rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
                >
                  Check My Requirements &amp; Price
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
