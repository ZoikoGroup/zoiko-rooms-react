"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function HelpAnswerExampleSection() {
  const [selectedPersona, setSelectedPersona] = useState("Room Seeker");

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
            Who are you helping today?
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {personas.map((persona) => {
              const isActive = selectedPersona === persona;
              return (
                <button
                  key={persona}
                  type="button"
                  onClick={() => setSelectedPersona(persona)}
                  className={`text-xs font-semibold py-2 px-4 rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1A2E6E] text-white border-[#1A2E6E] shadow-xs"
                      : "bg-white text-[#14213D] border-[#EAE6DF] hover:border-[#1A2E6E]"
                  }`}
                >
                  {persona}
                </button>
              );
            })}
          </div>
        </div>

        {/* Middle Section: Current answer example */}
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-[28px] font-serif font-bold text-[#14213D] leading-tight">
              Current answer example
            </h2>
            <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
              This is what a real Help Center answer looks like &mdash; source,
              owner, date, applicability, and limitation always visible.
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
                How do I verify where a payment should go?
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#7A838E]">
                <span>
                  Applies to:{" "}
                  <strong className="text-[#14213D] font-semibold">
                    Room Seeker &middot; Pay stage
                  </strong>
                </span>
                <span>
                  Source:{" "}
                  <strong className="text-[#14213D] font-semibold">
                    Payments Support
                  </strong>
                </span>
                <span>
                  Reviewed:{" "}
                  <strong className="text-[#14213D] font-semibold">
                    Jul 20, 2026
                  </strong>
                </span>
              </div>
            </div>

            {/* Answer Body */}
            <div className="space-y-4 text-xs sm:text-sm text-[#14213D] leading-relaxed">
              <p className="font-normal text-[#555E68]">
                Use the current authenticated payment request and verified
                recipient in your account. Do not pay from a message that
                conflicts with that record.
              </p>

              <ol className="list-decimal list-inside space-y-2 text-[#14213D] font-medium pl-1">
                <li>
                  Open your current agreement and payment request in your
                  account.
                </li>
                <li>
                  Compare the recipient name and account against any message you
                  received.
                </li>
                <li>
                  If they don&apos;t match, stop &mdash; don&apos;t pay, and
                  report the mismatch.
                </li>
                <li>
                  If they match, pay only through the approved route shown in
                  your account.
                </li>
              </ol>
            </div>

            {/* Limitation Callout Box */}
            <div className="bg-[#FAF7F2] border border-[#EAE6DF] rounded-xl p-3.5 sm:p-4 text-xs">
              <p className="text-[#A05E2B] font-medium leading-relaxed">
                <strong className="font-bold">Limitation:</strong> This answer
                explains the process. It cannot confirm today&apos;s specific
                recipient or amount &mdash; only your live account record can.
              </p>
            </div>

            {/* Links / Footer Actions */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm font-bold">
              <a href="#" className="text-[#A05E2B] hover:underline">
                Open my payment record
              </a>
              <span className="text-[#A05E2B]">
                Related: Payments, Safety &amp; Support
              </span>
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
              Sign in to view your payment, application, agreement, or case
              record.
            </h4>
            <p className="text-sm text-[#555E68] max-w-120 leading-relaxed font-normal">
              Public help stays open without an account &mdash; we only ask you
              to sign in when opening or changing something private.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-7 rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
          >
            Sign In Securely
          </a>
        </motion.div>
      </div>
    </section>
  );
}
