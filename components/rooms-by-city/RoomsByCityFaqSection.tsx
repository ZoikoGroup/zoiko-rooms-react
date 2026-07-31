"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

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

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Which cities have rooms on Zoiko Rooms?",
    answer:
      "Rooms by City shows supported city pages and current Zoiko Rooms inventory states. Counts and availability change and do not represent the entire local market.",
  },
  {
    question: "How are city room-price ranges calculated?",
    answer:
      "Price ranges reflect active room listings and recent verified agreements within that municipality, calculated based on median distributions to avoid outlier distortion.",
  },
  {
    question: "Does a city page mean rooms are available?",
    answer:
      "A city page indicates an active coverage zone. Room availability fluctuates in real time and is updated constantly as inventory opens or fills.",
  },
  {
    question: "Are neighborhoods on Zoiko Rooms safe?",
    answer:
      "We provide neutral, objective context regarding transit access and proximity to landmarks rather than subjective or unsourced safety scores.",
  },
  {
    question: "Are university or employer city pages official?",
    answer:
      "City pages organized around universities or work hubs provide geographical context for seekers and are independent unless explicitly stated otherwise.",
  },
  {
    question: "What if my city has no rooms?",
    answer:
      "If a destination currently has low or zero inventory, you can save a destination alert to be notified as soon as eligible rooms are listed.",
  },
  {
    question: "Can I compare cities?",
    answer:
      "Yes, you can select up to three city cards to compare room counts, price ranges, and review dates side-by-side.",
  },
];

export default function RoomsByCityFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full border-t border-stone-200 bg-white px-6 py-12 font-['Inter',sans-serif] md:px-32 lg:px-80">
      <div className="mx-auto flex w-full max-w-[760px] flex-col items-start px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0}
          variants={floatUpVariants}
          className="flex w-full flex-col items-start justify-start"
        >
          <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-amber-700">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.1}
          variants={floatUpVariants}
          className="flex w-full flex-col items-start justify-start pb-6 pt-2"
        >
          <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
            Rooms by City FAQ
          </h2>
        </motion.div>

        <div className="flex w-full flex-col items-start justify-start">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={0.15 + index * 0.05}
                variants={floatUpVariants}
                className="w-full border-b border-stone-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="group flex w-full cursor-pointer items-center justify-between py-4 text-left transition-colors"
                >
                  <span className="pr-4 text-base font-semibold leading-6 text-gray-800 transition-colors group-hover:text-amber-700">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="select-none text-xl font-semibold text-amber-700"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-sm font-normal leading-6 text-stone-500">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
