"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "./shared";
import { roleOptions } from "./data";

export function RoleSelectorSection() {
  const { t } = useLanguage();
  const [selectedValue, setSelectedValue] = useState(roleOptions[3].value);
  const selected = roleOptions.find((role) => role.value === selectedValue) ?? roleOptions[0];

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{t("Which role applies?")}</Eyebrow>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {roleOptions.map((role) => {
              const isSelected = role.value === selectedValue;
              return (
                <motion.button
                  key={role.value}
                  type="button"
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  onClick={() => setSelectedValue(role.value)}
                  className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:border-brand-navy/40"
                  }`}
                >
                  {t(role.label)}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.value}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="flex flex-col gap-3 rounded-2xl border-l-4 border-brand-red bg-[#F6ECD4] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
            >
              <p className="text-sm leading-relaxed text-brand-navy">{t(selected.message)}</p>
              {selected.linkHref && (
                <a
                  href={selected.linkHref}
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                >
                  {selected.linkLabel && t(selected.linkLabel)}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </Container>
    </section>
  );
}
