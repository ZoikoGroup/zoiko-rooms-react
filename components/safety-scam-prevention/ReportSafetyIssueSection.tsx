"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ReportSafetyIssueSection() {
  const [immediateDanger, setImmediateDanger] = useState("No");
  const [riskCategory, setRiskCategory] = useState("Listing / Room");
  const [youAre, setYouAre] = useState("Room Seeker");
  const [requestedAction, setRequestedAction] = useState("Stop a payment");
  const [whatHappened, setWhatHappened] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section
      id="report-safety-issue"
      className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Report a safety issue
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            Your report stays confidential and role-based. It never becomes a
            public record, and reporting in good faith is protected from
            retaliation.
          </p>
        </div>

        {/* Interactive Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E9E0D3]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Field 1: Immediate Danger */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  IS THERE IMMEDIATE DANGER RIGHT NOW?
                </label>
                <div className="relative">
                  <select
                    value={immediateDanger}
                    onChange={(e) => setImmediateDanger(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Risk Category */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  RISK CATEGORY
                </label>
                <div className="relative">
                  <select
                    value={riskCategory}
                    onChange={(e) => setRiskCategory(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Listing / Room">Listing / Room</option>
                    <option value="Identity / Provider">
                      Identity / Provider
                    </option>
                    <option value="Payment / Fee">Payment / Fee</option>
                    <option value="Communication / Off-platform">
                      Communication / Off-platform
                    </option>
                    <option value="Physical / Viewing Safety">
                      Physical / Viewing Safety
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Field 3: You Are */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  YOU ARE
                </label>
                <div className="relative">
                  <select
                    value={youAre}
                    onChange={(e) => setYouAre(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Room Seeker">Room Seeker</option>
                    <option value="Room Provider">Room Provider</option>
                    <option value="Authorized Representative">
                      Authorized Representative
                    </option>
                    <option value="Third-party / Other">
                      Third-party / Other
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 4: Requested Protective Action */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  REQUESTED PROTECTIVE ACTION
                </label>
                <div className="relative">
                  <select
                    value={requestedAction}
                    onChange={(e) => setRequestedAction(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Stop a payment">Stop a payment</option>
                    <option value="Pause listing visibility">
                      Pause listing visibility
                    </option>
                    <option value="Review provider authority">
                      Review provider authority
                    </option>
                    <option value="Account security check">
                      Account security check
                    </option>
                    <option value="General safety review">
                      General safety review
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Field 5: What Happened Textarea */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                WHAT HAPPENED
              </label>
              <textarea
                rows={4}
                value={whatHappened}
                onChange={(e) => setWhatHappened(e.target.value)}
                placeholder="Describe what happened and what outcome you're looking for."
                className="w-full bg-white border border-[#E9E0D3] text-[#14213D] placeholder-[#A0AEC0] text-xs sm:text-sm font-medium rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1A2E6E] resize-none"
              />
              <p className="text-[11px] sm:text-xs text-[#1A2E6E] font-medium pt-0.5">
                Don&apos;t include passwords, one-time codes, full card details,
                or unrelated sensitive documents. We&apos;ll request evidence
                securely if it&apos;s needed.
              </p>
            </div>

            {/* Field 6: Safe Contact Method */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                SAFE CONTACT METHOD
              </label>
              <input
                type="text"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
                placeholder="Email or phone"
                className="w-full bg-white border border-[#E9E0D3] text-[#14213D] placeholder-[#A0AEC0] text-xs sm:text-sm font-medium rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
              />
              <p className="text-[11px] sm:text-xs text-[#7A838E] font-normal pt-0.5">
                Your report is shared only with the accountable team for this
                issue, kept confidential from the person or listing you&apos;re
                reporting, and never used to penalize a good-faith report.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm active:scale-95 text-center whitespace-nowrap"
              >
                Report a Safety Issue
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
