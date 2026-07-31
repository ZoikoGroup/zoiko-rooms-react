"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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

const trustPoints = [
  "No protected-trait targeting, coded exclusion, demographic preference, or neighborhood stereotype.",
  "Every price and inventory signal states its source, definition, and review date.",
  "City pages never imply provider authority. Each listing carries its own current status.",
  "Users and authorized organizations can report inaccurate city, cost, transport, or relationship content.",
];

export default function TrustSafetySection() {
  return (
    <section className="w-full border-t border-stone-200 bg-white px-6 pb-16 pt-12 font-['Inter',sans-serif] md:px-24">
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
              TRUST, SAFETY AND FAIRNESS
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
              Neutral context, not a safety score
            </h2>
          </motion.div>

          <div className="relative my-1 h-56 w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 p-3.5 shadow-sm">
            <Image
              src="/images/rooms-by-city/Background (2).png"
              alt="Neutral context and trust representation"
              fill
              sizes="100vw"
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex w-full max-w-[720px] flex-col items-start justify-start gap-3 pt-3">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.25 + index * 0.08}
                variants={floatUpVariants}
                whileHover={{ x: 4 }}
                className="inline-flex w-full cursor-default items-center gap-2.5 transition-transform duration-200"
              >
                <div className="h-1.5 w-1.5 shrink-0 rounded-xs bg-amber-700" />
                <p className="text-sm font-normal leading-5 text-stone-500">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
