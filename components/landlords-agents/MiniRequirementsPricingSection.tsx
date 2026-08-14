"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { FormField } from "@/components/start-a-listing/FormField";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { calculatorProviderTypes, calculatorLocations, buildRequirementsMessage, requirementCards, platformCostRows } from "./data";

function renderMessage(message: string) {
  return message.split("**").map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function MiniRequirementsPricingSection() {
  const [providerType, setProviderType] = useState(calculatorProviderTypes[0]);
  const [location, setLocation] = useState(calculatorLocations[0]);
  const [resultKey, setResultKey] = useState(`${calculatorProviderTypes[0]}|${calculatorLocations[0]}`);

  const [resultProviderType, resultLocation] = resultKey.split("|");
  const message = buildRequirementsMessage(resultProviderType, resultLocation);

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Requirements &amp; Pricing</Eyebrow>
            <SectionTitle>What&apos;s required, and what it costs</SectionTitle>
            <Paragraph>
              Requirements depend on your role, property, and local rules. All platform fees are
              shown before you commit — nothing is charged silently.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                label="Provider type"
                value={providerType}
                onChange={setProviderType}
                as="select"
                options={calculatorProviderTypes.map((option) => ({ value: option, label: option }))}
              />
              <FormField
                label="Property location"
                value={location}
                onChange={setLocation}
                as="select"
                options={calculatorLocations.map((option) => ({ value: option, label: option }))}
              />
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setResultKey(`${providerType}|${location}`)}
              className="mt-5 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
            >
              Check My Requirements
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={resultKey}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="mt-5 rounded-xl border-l-4 border-brand-red bg-[#F6ECD4] p-5 text-sm leading-relaxed text-brand-navy"
              >
                {renderMessage(message)}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {requirementCards.map(({ title, description }) => (
              <motion.div key={title} variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </motion.div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>Item</span>
              <span>Illustrative cost</span>
            </div>
            <div className="divide-y divide-[#E9E0D3] bg-white">
              {platformCostRows.map((row) => (
                <div key={row.item} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
                  <span className="font-medium text-brand-navy">{row.item}</span>
                  <span className="text-neutral-600">{row.display}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-neutral-400">
            These figures illustrate disclosure structure only. They are not confirmed Zoiko Rooms
            charges, market averages, or recommended pricing.
          </p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
