"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const floatUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay,
    },
  }),
};

const previewFeatures = [
  "City hero with search applied and current coverage",
  "Current inventory summary and freshness definitions",
  "Search / featured current rooms",
  "Neighborhood navigation with neutral practical context",
  "Cost and terms context, sourced and dated",
  "Transport and key destinations with limitations",
  "Zero-inventory recovery and FAQ",
];

export default function CityPagePreviewSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full border-t border-stone-200 bg-white px-6 py-12 font-['Inter',sans-serif] md:px-32">
      <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.3}
          variants={floatUpVariants}
          whileHover={{ y: -4 }}
          className="relative h-80 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-3.5 shadow-sm transition-all duration-300 lg:h-96"
        >
          <Image
            src="/images/rooms-by-city/Background (1).png"
            alt={t("City page preview interface")}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="rounded-xl object-cover"
          />
        </motion.div>
        <div className="flex w-full flex-col items-start justify-start gap-2.5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="w-full"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-amber-700">
              {t("CITY-PAGE PREVIEW")}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="w-full"
          >
            <h2 className="font-['Fraunces',serif] text-xl font-semibold leading-8 text-gray-800">
              {t("What an individual city page contains")}
            </h2>
          </motion.div>

          <div className="flex w-full flex-col items-start justify-start pt-1">
            {previewFeatures.map((item, index) => {
              const isLast = index === previewFeatures.length - 1;

              return (
                <motion.div
                  key={item}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.15 + index * 0.05}
                  variants={floatUpVariants}
                  whileHover={{ x: 4 }}
                  className={`flex min-h-[40px] w-full cursor-default items-center gap-3.5 py-2 transition-transform duration-200 ${
                    !isLast ? "border-b border-stone-200" : ""
                  }`}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200">
                    <div className="h-2 w-2 rounded-full bg-stone-500" />
                  </div>
                  <span className="text-sm font-normal leading-5 text-gray-800">{t(item)}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}
