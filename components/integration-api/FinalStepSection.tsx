"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface TagItem {
  label: string;
  href: string;
}

const tags: TagItem[] = [
  { label: "Patterns", href: "#patterns" },
  { label: "Authorization", href: "#authorization" },
  { label: "Data & Events", href: "#data-events" },
  { label: "Security", href: "#security" },
  { label: "Implementation", href: "#implementation" },
];

export default function FinalStepSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased border-t border-[#EAE6DF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl overflow-hidden bg-[#0D131C] text-white p-8 sm:p-12 lg:p-16 border border-[#1E2A3A] shadow-2xl"
        >
          {/* Background Image with Dark Overlay */}
          <div className="bg-gradient-to-r from-[#0F0B08F0] to-[#0F0B088C] absolute inset-0 z-0 select-none pointer-events-none">
            <Image
              src="/images/integration/final.png"
              alt={t("Background overlay")}
              fill
              className="object-cover object-center opacity-25 mix-blend-luminosity"
              priority
            />
            {/* Additional gradient overlay for ideal contrast */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0D131C] via-[#0D131C]/90 to-transparent" /> */}
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-2xl space-y-8">
            {/* Header Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#F8A182]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#F8A182] uppercase">
                  {t("FINAL STEP")}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-medium leading-tight text-white">
                {t(
                  "Design the connection around explicit authority — not around convenience.",
                )}
              </h2>
              <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed font-normal max-w-xl">
                {t(
                  "Choose an integration pattern, review authorization and data governance, examine event and failure behavior, or start a controlled technical discovery with our team.",
                )}
              </p>
            </div>

            {/* Pill/Tag Options */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {tags.map((tag) => (
                <a
                  key={tag.label}
                  href={tag.href}
                  className="px-4 py-1.5 rounded-full border border-[#2D3748] hover:bg-[#2D3748] hover:border-[#4A5568] transition-colors text-xs font-mono text-[#E2E8F0]"
                >
                  {t(tag.label)}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-[#1E3A8A] hover:bg-[#2563EB] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
              >
                {t("Talk to Zoiko Rooms")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
