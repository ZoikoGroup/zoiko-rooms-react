"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const happeningMeta: Record<string, { tag: string; phrase: string }> = {
  "A listing or room looks suspicious": {
    tag: "Listing integrity concern",
    phrase: "a listing that looks suspicious",
  },
  "Communication moved off-platform": {
    tag: "Off-platform contact risk",
    phrase: "communication that moved off-platform",
  },
  "Identity details feel inconsistent": {
    tag: "Identity verification concern",
    phrase: "identity details that feel inconsistent",
  },
  "Asking for sensitive documents": {
    tag: "Sensitive data request",
    phrase: "a request for sensitive documents",
  },
  "Pressure to commit quickly": {
    tag: "Urgency pressure tactic",
    phrase: "pressure to commit quickly",
  },
};

const askedToDoMeta: Record<
  string,
  { phrase: string; stopAction: string; verify: string[] }
> = {
  "Send a payment": {
    phrase: "sending a payment",
    stopAction:
      "Pause the payment until you've verified the recipient, the purpose, and the payment route.",
    verify: [
      "Recipient identity and payment account details",
      "Official payment channel matches Zoiko Rooms guidance",
    ],
  },
  "Share passwords or verification codes": {
    phrase: "sharing passwords or verification codes",
    stopAction:
      "Pause, and never share passwords or one-time verification codes with anyone.",
    verify: [
      "Who is asking, and through which channel",
      "Whether Zoiko Rooms or any legitimate provider would ever request this",
    ],
  },
  "Upload personal ID or bank details": {
    phrase: "uploading personal ID or bank details",
    stopAction:
      "Pause the upload until you've confirmed the purpose, recipient, and secure route.",
    verify: [
      "Provider identity and Room Passport before sharing",
      "Purpose of the request and where the file will be stored",
    ],
  },
  "Meet in person before agreement": {
    phrase: "meeting in person before an agreement",
    stopAction:
      "Pause the meeting until you've verified identity and arranged a safe, public location.",
    verify: [
      "Provider identity and Room Passport before scheduling",
      "Expected attendees and access method",
    ],
  },
  "Sign external lease agreement": {
    phrase: "signing an external lease agreement",
    stopAction:
      "Pause before signing until the lease terms and landlord identity are verified.",
    verify: [
      "Landlord identity and property ownership records",
      "Lease terms match what was listed on Zoiko Rooms",
    ],
  },
};

const preserveEvidence = [
  "Messages and their timestamps",
  "Any links, URLs, or account names involved",
  "Receipts or payment references",
  "Screenshots, taken without exposing them publicly",
];

export default function RiskCheckerSection() {
  const [happening, setHappening] = useState(
    "A listing or room looks suspicious",
  );
  const [askedToDo, setAskedToDo] = useState("Send a payment");
  const [result, setResult] = useState<{
    tag: string;
    phrase: string;
    askedToDoPhrase: string;
    stopAction: string;
    verify: string[];
  } | null>(null);

  const happeningOptions = Object.keys(happeningMeta);
  const askedToDoOptions = Object.keys(askedToDoMeta);

  function handleCheckRisk() {
    const happeningInfo = happeningMeta[happening];
    const askedToDoInfo = askedToDoMeta[askedToDo];
    setResult({
      tag: happeningInfo.tag,
      phrase: happeningInfo.phrase,
      askedToDoPhrase: askedToDoInfo.phrase,
      stopAction: askedToDoInfo.stopAction,
      verify: askedToDoInfo.verify,
    });
  }

  return (
    <section id="risk-checker" className="w-full scroll-mt-24 text-[#1E2022] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <span className="text-[13px] font-bold tracking-widest text-[#1A2E6E] uppercase block">
            RISK CHECKER
          </span>
          <h2 className="text-2xl lg:text-[24px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Choose what happened and what you&apos;re being asked to do
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            We won&apos;t produce a fraud score or tell you a person is safe or
            guilty &mdash; only a severity band, a stop action, records to
            verify, and where to report.
          </p>
        </div>

        {/* Interactive Selector Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#EAE6DF]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
            {/* Input 1: WHAT'S HAPPENING? */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                WHAT&apos;S HAPPENING?
              </label>
              <div className="relative">
                <select
                  value={happening}
                  onChange={(e) => setHappening(e.target.value)}
                  className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14213D]"
                >
                  {happeningOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Input 2: WHAT ARE YOU BEING ASKED TO DO? */}
            <div className="md:col-span-4 space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                WHAT ARE YOU BEING ASKED TO DO?
              </label>
              <div className="relative">
                <select
                  value={askedToDo}
                  onChange={(e) => setAskedToDo(e.target.value)}
                  className="w-full bg-[#EFEFEF] border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14213D]"
                >
                  {askedToDoOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Submit / Check Risk CTA Button */}
            <div className="md:col-span-3">
              <button
                type="button"
                onClick={handleCheckRisk}
                className="w-full inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full transition-all duration-200 shadow-sm active:scale-95 text-center whitespace-nowrap cursor-pointer"
              >
                Check the Risk
              </button>
            </div>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-7 border-t border-[#E9E0D3] pt-7 space-y-5"
            >
              <span className="inline-flex items-center rounded-full bg-[#F6ECD4] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#8A6A26]">
                {result.tag}
              </span>

              <p className="text-sm sm:text-base text-[#14213D]">
                You selected <strong>{result.phrase}</strong> involving{" "}
                <strong>{result.askedToDoPhrase}</strong>.
              </p>

              <div className="rounded-xl border-l-4 border-[#A85A34] bg-[#F6ECD4] px-6 py-5">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-[#8A4626] mb-1">
                  Stop action
                </span>
                <p className="text-sm text-[#14213D]">{result.stopAction}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wide text-[#7A838E] mb-2">
                    Verify before acting
                  </span>
                  <ul>
                    {result.verify.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[#E9E0D3] py-2.5 text-sm text-[#14213D] first:border-t-0 first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wide text-[#7A838E] mb-2">
                    Preserve this evidence
                  </span>
                  <ul>
                    {preserveEvidence.map((item) => (
                      <li
                        key={item}
                        className="border-t border-[#E9E0D3] py-2.5 text-sm text-[#14213D] first:border-t-0 first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-[#7A838E] leading-relaxed">
                This is a general severity band, not a fraud determination
                &mdash; Zoiko Rooms cannot confirm whether a specific person,
                room, or payment is safe from this checker alone.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#report-safety-issue"
                  className="inline-flex items-center justify-center rounded-full bg-[#A85A34] hover:bg-[#8A4626] text-white text-xs sm:text-sm font-bold py-3 px-6 transition-colors duration-200"
                >
                  Report This
                </a>
                <a
                  href="#recovery-playbooks"
                  className="inline-flex items-center justify-center rounded-full border border-[#E9E0D3] hover:border-[#14213D] text-[#14213D] text-xs sm:text-sm font-bold py-3 px-6 transition-colors duration-200"
                >
                  See full guidance for this risk
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
