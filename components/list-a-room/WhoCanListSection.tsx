"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function WhoCanListSection() {
  const { t } = useLanguage();
  const cards = [
    {
      id: "1",
      imgSrc: "/images/list-a-room/1.png",
      tag: "RESIDENT PROVIDER",
      title: "Live-in Providers",
      description:
        "You live in the home and are renting a room within it \u2014 your household disclosures and fair-access boundaries apply.",
      cta: "Live-in Providers \u2192",
      href: "/list-a-room/live-in-providers", // Update link here
    },
    {
      id: "2",
      imgSrc: "/images/list-a-room/2.png",
      tag: "OWNERSHIP OR MANDATE",
      title: "Landlords & Agents",
      description:
        "You own the property, manage it, or hold an agency mandate \u2014 this path covers portfolio and professional workflows.",
      cta: "Landlords & Agents \u2192",
      href: "/list-a-room/landlords-agents", // Update link here
    },
    {
      id: "3",
      imgSrc: "/images/list-a-room/3.png",
      tag: "PERMISSION-LED",
      title: "Authorized Sublets",
      description:
        "You're a tenant with lease or landlord consent to sublet or arrange a replacement \u2014 a distinct permission and classification path.",
      cta: "Authorized Sublets \u2192",
      href: "/list-a-room/authorized-sublets", // Update link here
    },
  ];

  // Dynamic link for the bottom Zoiko Rooms Pro CTA
  const proHref = "/pro/overview";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" } as const,
    },
  };

  return (
    <section className="w-full bg-[#EFE6D8] text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header (Centered without max-w constraint) */}
        <div className="flex flex-col items-center text-center space-y-3 w-full">
          <span className="text-[11px] font-bold tracking-widest text-[#C0272D] uppercase block">
            {t("WHO CAN LIST")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] max-w-4xl font-serif font-bold text-[#14213D] leading-tight">
            {t("Choose the path that matches how you are offering the room.")}
          </h2>
          <p className="text-xs max-w-140 sm:text-sm text-[#555E68] leading-relaxed">
            {t(
              "Each path has its own authority basis and journey — pick the one that reflects your actual relationship to the room.",
            )}
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between border border-[#EAE6DF] hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Card Image */}
                <div className="w-full h-44 sm:h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    src={card.imgSrc}
                    alt={t(card.title)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#C0272D] uppercase block">
                    {t(card.tag)}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#14213D]">
                    {t(card.title)}
                  </h3>
                  <p className="text-xs text-[#555E68] leading-relaxed font-normal">
                    {t(card.description)}
                  </p>
                </div>
              </div>

              {/* Card CTA Link */}
              <div className="px-6 pb-6">
                <a
                  href={card.href}
                  className="text-xs font-bold text-[#14213D] hover:text-[#C0272D] transition-colors inline-flex items-center"
                >
                  {t(card.cta)}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Dashed Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 border-2 border-dashed border-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-serif font-bold text-[#14213D]">
              {t("Managing several rooms or a portfolio?")}
            </h4>
            <p className="text-xs text-[#555E68]">
              {t(
                "Providers with multiple rooms, teams or institutional needs can use Zoiko Rooms Pro.",
              )}
            </p>
          </div>

          <a
            href={proHref}
            className="px-5 py-2.5 rounded-full border border-[#14213D] text-[#1B2A4A] hover:bg-[#14213D] hover:text-white transition-all text-xs font-medium whitespace-nowrap active:scale-95"
          >
            {t("Explore Zoiko Rooms Pro")} &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
