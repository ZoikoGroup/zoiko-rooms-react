"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { toggleChoices, defaultToggles, TOGGLE_STORAGE_KEY, type ToggleKey } from "./data";

export function QuickPrivacyChoicesSection() {
  const [toggles, setToggles] = useState(defaultToggles);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(TOGGLE_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
        setToggles((prev) => ({ ...prev, ...parsed }));
      } catch {
        // Ignore malformed stored state — fall back to defaults.
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(TOGGLE_STORAGE_KEY, JSON.stringify(toggles));
  }, [toggles, hydrated]);

  function toggleChoice(key: ToggleKey) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <SectionDivider id="quick-privacy-choices">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Quick Privacy Choices</Eyebrow>
            <SectionTitle>Resolve the common ones in one step.</SectionTitle>
            <Paragraph>
              These controls apply immediately — no request form, no waiting period. Each one
              shows exactly what it covers and who it applies to.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {toggleChoices.map(({ key, title, description, scope, onLabel, offLabel }) => {
              const isOn = toggles[key];
              return (
                <motion.div key={key} variants={fadeUp} className="flex flex-col gap-4 rounded-2xl border border-[#E9E0D3] bg-white p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isOn}
                      aria-label={title}
                      onClick={() => toggleChoice(key)}
                      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
                        isOn ? "bg-brand-red" : "bg-neutral-300"
                      }`}
                    >
                      <motion.span
                        layout
                        transition={{ duration: 0.18, ease: easeOut }}
                        className="absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm"
                        style={{ left: isOn ? "22px" : "2px" }}
                      />
                    </button>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                  <p className="text-xs text-neutral-400">{scope}</p>
                  <div className="flex items-center justify-between border-t border-[#E9E0D3] pt-3">
                    <span className={`text-sm font-semibold ${isOn ? "text-brand-red" : "text-neutral-500"}`}>
                      {isOn ? onLabel : offLabel}
                    </span>
                    <span className="text-sm font-semibold text-brand-red">What does this mean?</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
