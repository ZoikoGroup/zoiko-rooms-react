"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface HelpAnswerExampleSectionProps {
  selectedPersona: string;
  onSelectPersona: (persona: string) => void;
}

export default function HelpAnswerExampleSection({
  selectedPersona,
  onSelectPersona,
}: HelpAnswerExampleSectionProps) {
  const { t } = useLanguage();

  const personas = [
    "Room Seeker",
    "Provider",
    "Organization Participant",
    "Pro Operator",
    "Representative / Advocate",
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Section: Who are you helping today? */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
            {t("Who are you helping today?")}
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {personas.map((persona) => {
              const isActive = selectedPersona === persona;
              return (
                <a
                  key={persona}
                  href="#support-request"
                  onClick={() => onSelectPersona(persona)}
                  className={`text-xs font-semibold py-2 px-4 rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1A2E6E] text-white border-[#1A2E6E] shadow-xs"
                      : "bg-white text-[#14213D] border-[#EAE6DF] hover:border-[#1A2E6E]"
                  }`}
                >
                  {t(persona)}
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle Section: Current answer example */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
              {t("Current answer example")}
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              {t(
                "This is what a real Help Center answer looks like — source, owner, date, applicability, and limitation always visible.",
              )}
            </p>
          </div>

          {/* Answer Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EAE6DF] space-y-6"
          >
            {/* Answer Header & Metadata */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#14213D]">
                {t("How do I verify where a payment should go?")}
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#7A838E]">
                <span>
                  {t("Applies to:")}{" "}
                  <strong className="text-[#14213D] font-semibold">
                    {t("Room Seeker · Pay stage")}
                  </strong>
                </span>
                <span>
                  {t("Source:")}{" "}
                  <strong className="text-[#14213D] font-semibold">
                    {t("Payments Support")}
                  </strong>
                </span>
                <span>
                  {t("Reviewed:")}{" "}
                  <strong className="text-[#14213D] font-semibold">
                    Jul 20, 2026
                  </strong>
                </span>
              </div>
            </div>

            {/* Answer Body */}
            <div className="space-y-4 text-xs sm:text-sm text-[#14213D] leading-relaxed">
              <p className="font-normal text-[#555E68]">
                {t(
                  "Use the current authenticated payment request and verified recipient in your account. Do not pay from a message that conflicts with that record.",
                )}
              </p>

              <ol className="list-decimal list-inside space-y-2 text-[#14213D] font-medium pl-1">
                <li>
                  {t("Open your current agreement and payment request in your account.")}
                </li>
                <li>
                  {t("Compare the recipient name and account against any message you received.")}
                </li>
                <li>
                  {t("If they don't match, stop — don't pay, and report the mismatch.")}
                </li>
                <li>
                  {t("If they match, pay only through the approved route shown in your account.")}
                </li>
              </ol>
            </div>

            {/* Limitation Callout Box */}
            <div className="bg-[#FAF7F2] border border-[#EAE6DF] rounded-xl p-3.5 sm:p-4 text-xs">
              <p className="text-[#A05E2B] font-medium leading-relaxed">
                <strong className="font-bold">{t("Limitation:")}</strong>{" "}
                {t(
                  "This answer explains the process. It cannot confirm today's specific recipient or amount — only your live account record can.",
                )}
              </p>
            </div>

            {/* Links / Footer Actions */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm font-bold">
              <a href="/login" className="text-[#A05E2B] hover:underline">
                {t("Open my payment record")}
              </a>
              <a href="/how-it-works/payments-safety-support" className="text-[#A05E2B] hover:underline">
                {t("Related: Payments, Safety & Support")}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#F1E7DA] border border-[#E9E0D3] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#14213D]">
              {t("Sign in to view your payment, application, agreement, or case record.")}
            </h4>
            <p className="text-sm text-[#555E68] max-w-120 leading-relaxed font-normal">
              {t(
                "Public help stays open without an account — we only ask you to sign in when opening or changing something private.",
              )}
            </p>
          </div>

          <a
            href="/login"
            className="inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
          >
            {t("Sign In Securely")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
