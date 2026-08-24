"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const intro = {
  question: "What is Zoiko Rooms?",
  answer:
    "Zoiko Rooms is a global platform exclusively for private individual rooms rented for 30 nights or longer. It helps room seekers review evidence-specific room information, confirm who is authorized to offer the room, communicate safely, complete the appropriate rental process and maintain a clear transaction record through move-out.",
};

const faqs = [
  {
    question: "What accommodation is available?",
    answer:
      "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.",
  },
  {
    question: "What does verified mean?",
    answer:
      "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.",
  },
  {
    question: "Can I list a spare room?",
    answer:
      "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.",
  },
  {
    question: "What is the minimum stay?",
    answer: "Zoiko Rooms is built for stays of 30 nights or longer.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-brand-navy sm:text-xl">
              {t(intro.question)}
            </h3>
            <p className="mt-3 text-sm text-neutral-600 sm:text-base">{t(intro.answer)}</p>
          </div>

          <div className="flex flex-col divide-y divide-black/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-heading text-base font-medium text-brand-navy sm:text-lg">
                      {t(faq.question)}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center text-brand-red"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: easeOut }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm text-neutral-600 sm:text-base">{t(faq.answer)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
