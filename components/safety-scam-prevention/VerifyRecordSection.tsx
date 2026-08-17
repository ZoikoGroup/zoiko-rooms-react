"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VerifyRecordSection() {
  const ctaHref = "#"; // Dynamic link for button

  const verificationCards = [
    {
      title: "Room Passport",
      description:
        "Canonical room ID, source, version, and current public fields \u2014 a screenshot is not the current record.",
    },
    {
      title: "Provider authority",
      description:
        "Current scoped authority over the exact room, its source, and effective period.",
    },
    {
      title: "Payment recipient",
      description:
        "The verified recipient in your authenticated payment record, not a name in a message.",
    },
    {
      title: "Agreement version",
      description:
        "Current parties, room, dates, and costs \u2014 compare against what you were told verbally.",
    },
    {
      title: "Organization relationship",
      description:
        "Whether an institution is actually referring, distributing, or managing this \u2014 not just named in a message.",
    },
    {
      title: "Support identity",
      description:
        "Verified Zoiko Rooms support channel and case reference \u2014 never a payment or credential request from unverified support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Verify the current record before you act
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            An educational page can&apos;t confirm a person, room, or payment
            &mdash; only your current authenticated records can.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {verificationCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#EAE6DF] space-y-2 hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
            >
              <h3 className="text-base font-bold text-[#14213D] leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-[#555E68] leading-relaxed font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm active:scale-95 text-center whitespace-nowrap"
          >
            Check Room Passport
          </a>
        </div>
      </div>
    </section>
  );
}
