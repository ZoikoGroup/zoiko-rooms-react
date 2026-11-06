"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Plus, X } from "lucide-react";

const FAQS = [
  {
    question: "How do I claim the Black Friday discount?",
    answer: (
      <>
        Simply select any eligible room or plan during November 27–30, and the
        20% discount will be automatically applied at checkout or via code{" "}
        <strong className="font-bold text-white">BF20</strong>.
      </>
    ),
  },
  {
    question: 'What does "verified room" mean?',
    answer:
      "A verified room has had its provider authority checked and its declared details inspected or physically verified before the listing goes live.",
  },
  {
    question: "What is the minimum stay requirement?",
    answer:
      "Minimum stay varies by listing and is shown on each room passport before you apply.",
  },
  {
    question: "Are utility bills included in the monthly price?",
    answer:
      "Whether utilities are included is stated on each listing. Check the room passport for the exact terms.",
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:
      "Cancellation and modification terms are set out in your agreement and shown clearly before you confirm a booking.",
  },
] as const;

const ACTIONS = [
  {
    label: "Claim 20% Off Rooms →",
    href: "#deals",
    primary: true,
  },
  {
    label: "View Host Plans",
    href: "https://app.zoikorooms.com/account",
    primary: false,
  },
] as const;

export default function RoomFaqCta() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-x-hidden bg-[#0a0e17] px-6 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* FAQ */}
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#d9473f]">
            Support &amp; Clarity
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <ul className="mx-auto mt-8 max-w-[720px] space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <li
                key={faq.question}
                className="rounded-xl border border-white/10 bg-[#161d30]"
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold"
                >
                  {faq.question}
                  {isOpen ? (
                    <X
                      className="h-4 w-4 shrink-0 text-[#e0b062]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Plus
                      className="h-4 w-4 shrink-0 text-[#d9473f]"
                      aria-hidden="true"
                    />
                  )}
                </button>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 pb-4 text-sm leading-6 text-white/60"
                  >
                    {faq.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="relative mx-auto mt-20 max-w-[1100px] overflow-hidden rounded-2xl border border-[#c9a25a]/40 bg-[#14183a] px-6 py-14 text-center shadow-[0_0_60px_rgba(217,71,63,0.25)] sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(217,71,63,0.45),transparent_55%),radial-gradient(ellipse_at_100%_100%,rgba(90,10,20,0.8),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(30,36,110,0.6),transparent_55%)]"
          />

          <div className="relative flex flex-col items-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d9473f]/60 bg-[#d9473f]/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.08em] text-[#f0807a]">
              <Flame className="h-4 w-4" aria-hidden="true" />
              Black Friday Sale Ends Soon
            </p>

            <h2 className="mt-6 max-w-[760px] font-serif text-3xl font-bold leading-tight tracking-tight text-[#f7e0dc] sm:text-4xl">
              Secure Your Room Before Black Friday Closes
            </h2>

            <p className="mt-4 max-w-[460px] text-base leading-6 text-white/70">
              Save 20% on verified mid-term housing across major European hubs.
              Claim your promotional rate now before allocations fill up.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex items-center justify-center rounded-lg bg-[#e0392d] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0392d]/30"
                      : "inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3.5 text-sm font-semibold text-white"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/50">
              Valid for bookings confirmed through November 30, 2026. Subject to
              partner availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
