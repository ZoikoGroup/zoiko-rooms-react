"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { FormField } from "@/components/start-a-listing/FormField";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { locationOptions, costDisclosuresByLocation } from "./data";

export function PricingPrimaryObligationSection() {
  const { t } = useLanguage();
  const [location, setLocation] = useState(locationOptions[0]);
  const [confirmedLocation, setConfirmedLocation] = useState<string | null>(null);

  const rows = confirmedLocation ? costDisclosuresByLocation[confirmedLocation] ?? [] : [];

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Pricing and Primary Obligation")}</Eyebrow>
            <SectionTitle>{t("Rent, markup, and fees must stay inside your permission")}</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="relative h-[220px] w-full overflow-hidden rounded-2xl">
            <ImageFade
              src="/images/authorized-sublets/pricing-room-divider.png"
              alt={t("A subletted room space divided by a folding screen")}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                label={t("Provider type")}
                value="Authorized sublet"
                onChange={() => {}}
                as="select"
                options={[{ value: "Authorized sublet", label: t("Authorized sublet") }]}
              />
              <FormField
                label={t("Property location")}
                value={location}
                onChange={setLocation}
                as="select"
                options={locationOptions.map((option) => ({ value: option, label: t(option) }))}
              />
            </div>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setConfirmedLocation(location)}
              className="mt-5 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              {t("Check My Requirements")}
            </motion.button>
          </motion.div>

          <div className="overflow-hidden rounded-2xl border border-[#E9E0D3]">
            <div className="grid grid-cols-2 gap-4 bg-[#F7F2EA] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:px-6">
              <span>{t("Item")}</span>
              <span>{t("Illustrative display")}</span>
            </div>
            <AnimatePresence mode="wait">
              {confirmedLocation ? (
                <motion.div
                  key={confirmedLocation}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="divide-y divide-[#E9E0D3] bg-white"
                >
                  {rows.map((row) => (
                    <div key={row.item} className="grid grid-cols-2 gap-4 px-5 py-4 text-sm sm:px-6">
                      <span className="font-medium text-brand-navy">{t(row.item)}</span>
                      <span className="text-neutral-600">{t(row.display)}</span>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="bg-white px-5 py-6 text-sm text-neutral-500 sm:px-6"
                >
                  {t("Choose your property location above and select \"Check My Requirements\" to see the disclosure structure.")}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="text-xs text-neutral-400">
            {t(
              "These USD amounts illustrate disclosure structure only. They are not Zoiko Rooms fees, a market benchmark, legal limits, or a recommendation to charge a markup.",
            )}
          </p>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
