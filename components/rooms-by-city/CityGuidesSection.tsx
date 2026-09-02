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

const guideCategories = [
  { id: "guides", label: "City Guides", href: "/resources/guides" },
  { id: "safety", label: "Safety & Scam Prevention", href: "/resources/safety-scam-prevention" },
  { id: "verification", label: "Verification & Authority", href: "/how-it-works/verification-authority" },
];

export default function CityGuidesSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full border-t border-stone-200 px-6 py-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-[1240px] md:px-8">
        <div className="flex flex-col items-start justify-start gap-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-amber-700">
              {t("CITY GUIDES AND SEEKER GUIDANCE")}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start pt-px"
          >
            <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
              {t("Practical resources, separate from inventory")}
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            whileHover={{ scale: 1.005 }}
            className="my-1 h-56 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 p-3.5 shadow-sm transition-all duration-300"
          >
            <Image
              src="/images/rooms-by-city/Background (3).png"
              alt={t("Practical city guidance and resources")}
              width={1200}
              height={560}
              className="h-full w-full rounded-xl object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.3}
            variants={floatUpVariants}
            className="flex w-full flex-wrap items-center gap-6 border-b border-stone-200 pt-2 md:gap-8"
          >
            {guideCategories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                className="group relative pb-3 text-base font-semibold text-stone-500 transition-all duration-200 hover:text-amber-700"
              >
                {t(category.label)}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 rounded-full bg-amber-700 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
