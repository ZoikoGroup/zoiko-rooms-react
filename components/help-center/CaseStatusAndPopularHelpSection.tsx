"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface HelpTopic {
  id: string;
  question: string;
  category: string;
  badgeText: "Current" | "Updated";
  badgeVariant: "green" | "gold";
}

export default function CaseStatusAndPopularHelpSection() {
  const { t } = useLanguage();
  const [caseReference, setCaseReference] = useState("");

  const popularTopics: HelpTopic[] = [
    {
      id: "review-agreement",
      question: "How do I review a room agreement before signing?",
      category: "Room Seeker \u00B7 Agree",
      badgeText: "Current",
      badgeVariant: "green",
    },
    {
      id: "verify-payment",
      question: "How do I verify where a payment should go?",
      category: "Room Seeker \u00B7 Pay",
      badgeText: "Current",
      badgeVariant: "green",
    },
    {
      id: "prepare-room-passport",
      question: "How do I prepare my Room Passport for publication?",
      category: "Provider \u00B7 Prepare",
      badgeText: "Updated",
      badgeVariant: "gold",
    },
    {
      id: "ask-for-password-code",
      question: "What if someone asks for my password or a code?",
      category: "Account & Identity \u00B7 Safety",
      badgeText: "Current",
      badgeVariant: "green",
    },
  ];

  const handleStatusCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle case status lookup logic
  };

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Block: Check Case Status */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
            {t("Check case status")}
          </h2>

          <form onSubmit={handleStatusCheck} className="w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <input
                type="text"
                value={caseReference}
                onChange={(e) => setCaseReference(e.target.value)}
                placeholder={t("Case reference, e.g. ZR-482913")}
                className="w-full bg-white border border-[#EAE6DF] text-[#14213D] placeholder-[#A0AEC0] text-xs sm:text-sm font-medium rounded-xl py-3.5 px-5 focus:outline-none focus:ring-2 focus:ring-[#1A2E6E] transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#142550] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-xs active:scale-95 whitespace-nowrap cursor-pointer"
              >
                {t("Check Status")}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Block: Popular Help Right Now */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
            {t("Popular help right now")}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="w-full divide-y divide-[#EAE6DF] border-t border-b border-[#EAE6DF]"
          >
            {popularTopics.map((topic) => (
              <a
                key={topic.id}
                href="#"
                className="group flex items-center justify-between py-5 px-1 hover:bg-white/40 transition-colors duration-150"
              >
                <div className="space-y-1 pr-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#14213D] group-hover:text-[#1A2E6E] transition-colors duration-150">
                    {t(topic.question)}
                  </h3>
                  <p className="text-xs text-[#7A838E] font-normal">
                    {t(topic.category)}
                  </p>
                </div>

                <div className="flex-shrink-0 ml-4">
                  {topic.badgeVariant === "green" ? (
                    <span className="inline-block bg-[#E8F3EE] text-[#1D6042] text-[11px] font-semibold py-1 px-3.5 rounded-full">
                      {t(topic.badgeText)}
                    </span>
                  ) : (
                    <span className="inline-block bg-[#F5EFEB] text-[#8C6D46] text-[11px] font-semibold py-1 px-3.5 rounded-full">
                      {t(topic.badgeText)}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
