"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SmallestAccountableRequestSection() {
  const [issueCategory, setIssueCategory] = useState("Account & Identity");
  const [yourRole, setYourRole] = useState("Room Seeker");
  const [currentImpact, setCurrentImpact] = useState("Cannot access");
  const [urgency, setUrgency] = useState("Standard");
  const [description, setDescription] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left space-y-3 w-full">
          <h2 className="text-2xl lg:text-[28px] font-serif font-bold text-[#14213D] leading-tight max-w-2xl">
            Still need help? Start the smallest accountable request.
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed max-w-2xl font-normal">
            Choose the issue and affected journey, review what will be shared,
            and attach only necessary evidence.
          </p>
        </div>

        {/* Form Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#EAE6DF]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Field 1: Issue Category */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  ISSUE CATEGORY
                </label>
                <div className="relative">
                  <select
                    value={issueCategory}
                    onChange={(e) => setIssueCategory(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Account & Identity">
                      Account & Identity
                    </option>
                    <option value="Find a Room">Find a Room</option>
                    <option value="List a Room">List a Room</option>
                    <option value="Payments & Refunds">
                      Payments & Refunds
                    </option>
                    <option value="Organizations & Pro">
                      Organizations & Pro
                    </option>
                    <option value="Safety & Trust">Safety & Trust</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Your Role */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  YOUR ROLE
                </label>
                <div className="relative">
                  <select
                    value={yourRole}
                    onChange={(e) => setYourRole(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Room Seeker">Room Seeker</option>
                    <option value="Provider">Provider</option>
                    <option value="Organization Participant">
                      Organization Participant
                    </option>
                    <option value="Pro Operator">Pro Operator</option>
                    <option value="Representative / Advocate">
                      Representative / Advocate
                    </option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 2: Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Field 3: Current Impact */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  CURRENT IMPACT
                </label>
                <div className="relative">
                  <select
                    value={currentImpact}
                    onChange={(e) => setCurrentImpact(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Cannot access">Cannot access</option>
                    <option value="Delayed action">Delayed action</option>
                    <option value="Incorrect information">
                      Incorrect information
                    </option>
                    <option value="Security concerns">Security concerns</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Field 4: Urgency */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                  URGENCY
                </label>
                <div className="relative">
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-[#EFEFEF] border border-[#E9E0D3] text-[#14213D] text-xs sm:text-sm font-medium rounded-xl py-3.5 pl-4 pr-10 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
                  >
                    <option value="Standard">Standard</option>
                    <option value="High / Time-Sensitive">
                      High / Time-Sensitive
                    </option>
                    <option value="Urgent Safety">Urgent Safety</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#555E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Field 5: Describe the Issue */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                DESCRIBE THE ISSUE
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What happened, and what outcome are you looking for?"
                className="w-full bg-white border border-[#EAE6DF] text-[#14213D] placeholder-[#A0AEC0] text-xs sm:text-sm font-medium rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1A2E6E] resize-none"
              />
              <p className="text-[11px] sm:text-xs text-[#1A2E6E] font-medium pt-0.5">
                Don&apos;t include passwords, one-time codes, full card details,
                or unrelated sensitive documents. We&apos;ll ask for evidence
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
                className="w-full bg-white border border-[#EAE6DF] text-[#14213D] placeholder-[#A0AEC0] text-xs sm:text-sm font-medium rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-[#1A2E6E]"
              />
              <p className="text-[11px] sm:text-xs text-[#7A838E] font-normal pt-0.5">
                By submitting, you agree that this information is shared with
                the accountable team for your issue only, retained only as long
                as necessary, and not used for unrelated purposes.
              </p>
            </div>

            {/* Submit CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs sm:text-sm font-bold py-3.5 px-8 rounded-full transition-all duration-200 shadow-sm active:scale-95 text-center whitespace-nowrap"
              >
                Start Support Request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
