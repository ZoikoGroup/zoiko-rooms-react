"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function ListARoomHero() {
  const { t } = useLanguage();
  const [offeringType, setOfferingType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="relative w-full text-[#1E2022] py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased overflow-hidden">
      {/* Container constrained to max-w-6xl */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
        {/* Left Column: Typography & Quick Input Card */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#F1E7DA] px-3 py-1.5 text-[11px] font-semibold text-[#8C6D46]">
            <ShieldCheck className="h-3.5 w-3.5" />
            {t("Verified listings. High-intent renters.")}
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif font-bold text-[#14213D] leading-[1.15] tracking-tight">
            {t("List your room on Zoiko Rooms.")}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-sm sm:text-base text-[#555E68] font-normal leading-relaxed max-w-lg">
            {t(
              "Join the platform where verified rooms attract quality tenants. Start your listing in minutes — no upfront costs, no commitments.",
            )}
          </p>

          {/* White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#EAE6DF] space-y-4"
          >
            {/* Offering Select */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[11px] font-semibold text-[#1A2E6E] tracking-wide">
                {t("Your relationship to the property")}
              </label>
              <div className="relative">
                <select
                  value={offeringType}
                  onChange={(e) => setOfferingType(e.target.value)}
                  className="w-full appearance-none bg-[#FDFBF7] border border-[#E5E2DC] rounded-xl py-3 pl-4 pr-9 text-sm font-medium text-[#2B364B] focus:outline-none focus:ring-2 focus:ring-[#14213D]/20 transition-all cursor-pointer truncate"
                >
                  <option value="" disabled>
                    {t("Select relationship")}
                  </option>
                  <option value="I own and live here">
                    {t("I own and live here")}
                  </option>
                  <option value="I own but live elsewhere">
                    {t("I own but live elsewhere")}
                  </option>
                  <option value="I rent and have permission">
                    {t("I rent and have permission")}
                  </option>
                  <option value="I manage or represent the property">
                    {t("I manage or represent the property")}
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Location Input */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-[11px] font-semibold text-[#1A2E6E] tracking-wide">
                {t("Room location")}
              </label>
              <input
                type="text"
                placeholder={t("City, neighborhood, postal code, or address")}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#FDFBF7] border border-[#E5E2DC] rounded-xl py-3 px-4 text-sm font-medium text-[#2B364B] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#14213D]/20 transition-all"
              />
            </div>

            {/* Submit CTA */}
            <a
              href="/list-a-room/start-a-listing"
              className="flex w-full items-center justify-center bg-[#1A2E6E] hover:bg-[#122250] text-white font-semibold text-sm py-3.5 px-3 rounded-full transition-all duration-200 shadow-sm active:scale-[0.98]"
            >
              {t("Start a listing")}
            </a>

            {/* Sub-text note */}
            <p className="text-center text-xs text-[#7A838E] font-normal">
              {t("No account, ID, or payment details needed to get started.")}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px] aspect-[4/3] lg:max-w-none lg:aspect-auto lg:h-full lg:min-h-[420px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/images/list-a-room/hero-1.webp"
              alt={t("Cozy well-lit room for rent")}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
