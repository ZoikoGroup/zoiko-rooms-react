"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

const intro = {
  question: "What is Zoiko Rooms?",
  answer:
    "Zoiko Rooms is a global platform dedicated to private individual rooms, generally rented for 30 consecutive nights or longer. It supports the journey from discovery and verification through agreement, payment and move-out where the relevant services are available.",
};

const faqs = [
  {
    question: "Is Zoiko Rooms a roommate-matching website?",
    answer:
      "No. Zoiko Rooms is a platform for private individual rooms rented from an authorized provider, not an informal roommate-matching or social board.",
  },
  {
    question: "Does Zoiko Rooms verify every room?",
    answer:
      "Every room carries an evidence level — provider declared, document verified or physically inspected — but not every room can practically be inspected. The platform is designed to make that distinction visible rather than implying uniform verification.",
  },
  {
    question: "Does identity verification mean the provider owns the property?",
    answer:
      "No. Identity verification confirms a person exists. Provider authority is a separate check that assesses ownership, agency, management or lawful subletting rights before a listing goes live.",
  },
  {
    question: "Can a tenant list a room?",
    answer:
      "A tenant may list a room only where they can demonstrate lawful authority to sublet, such as landlord consent. Zoiko Rooms checks authority before a listing is published.",
  },
  {
    question: "Does Zoiko Rooms physically inspect rooms?",
    answer:
      "Physical inspection is offered as a verification service where available and is clearly labeled as such. Many listings rely on document verification or provider declarations instead.",
  },
  {
    question: "Does Zoiko Rooms guarantee safety?",
    answer:
      "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition or future conduct.",
  },
  {
    question: "Does Zoiko Rooms provide agreements?",
    answer:
      "Zoiko Rooms supports agreement selection and signature appropriate to the rental arrangement and jurisdiction, but does not use one universal global tenancy agreement.",
  },
  {
    question: "Does Zoiko Rooms hold rent or deposits?",
    answer:
      "Where supported, rent, deposit, refund and protection services are handled through approved partner providers with visible terms, not held directly by Zoiko Rooms in every market.",
  },
  {
    question: "Is Zoiko Rooms free for room seekers?",
    answer:
      "Yes. Core access for room seekers is free. Revenue comes from provider fees, operator subscriptions, institutional contracts and partner-led services.",
  },
  {
    question: "Can professional operators use Zoiko Rooms?",
    answer:
      "Yes. Shared-housing, co-living, student-housing and portfolio operators can manage listings, compliance and applications through Zoiko Rooms Pro.",
  },
  {
    question: "Can universities and employers use Zoiko Rooms?",
    answer:
      "Yes. Organizations can manage referrals, relocation, placement, arrival, safeguarding and reporting through institutional workflows.",
  },
  {
    question: "Is Zoiko Rooms available worldwide?",
    answer:
      "Zoiko Rooms is designed for global scale but launches market by market, since availability, verification, agreements and payments vary by jurisdiction.",
  },
  {
    question: "How does Zoiko Rooms address discrimination?",
    answer:
      "Protected characteristics must not be used to target advertisements, rank access or determine fraud risk. Lawful compatibility factors are limited to matters such as smoking, pets or household routines.",
  },
  {
    question: "How does Zoiko Rooms make money?",
    answer:
      "Through provider success fees, optional listing promotion, operator subscriptions, institutional contracts, verification services, compliance software and partner-led payment and protection services.",
  },
  {
    question: "Who owns Zoiko Rooms?",
    answer: "Zoiko Rooms is a trading name of Zoiko Realty Group Inc., a Zoiko Group company.",
  },
];

export function AboutFaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-brand-navy sm:text-xl">
              {intro.question}
            </h3>
            <p className="mt-3 text-sm text-neutral-600 sm:text-base">{intro.answer}</p>
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
                      {faq.question}
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
                        <p className="pb-5 text-sm text-neutral-600 sm:text-base">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
