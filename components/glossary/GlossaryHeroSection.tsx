"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function GlossaryHeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const popularQuestions = [
    "What is a Room Passport?",
    "What is the difference between rent and a deposit?",
    'What does "bills included" mean?',
    "What is an authorized sublet?",
    "What is a reservation or hold?",
    "What is direct billing?",
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="w-full text-[#1E2022] py-12 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased overflow-x-clip">
      <div className="max-w-6xl mx-auto">
        {/* Removed overflow-hidden from main container to let card float outside */}
        <div className="relative bg-gradient-to-b from-[#FBF6ED] to-[#F3E9DA] rounded-[28px] grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: Content & Search */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6">
            {/* Eyebrow Header */}
            <span className="text-[13px] font-bold tracking-widest text-[#C8202C] uppercase block">
              ROOM RENTAL GLOSSARY
            </span>

            {/* Main Title */}
            <h1 className="text-3xl lg:text-[36px] font-serif font-bold text-[#14213D] leading-[1.15]">
              Understand room-rental language before you search, apply, agree,
              pay, move, or operate.
            </h1>

            {/* Subtext */}
            <p className="text-sm text-[#6B6F76] font-normal leading-relaxed max-w-110">
              Search plain-language definitions, compare related terms, see
              local or program-specific limitations, and open the live record
              that controls the current room journey.
            </p>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="pt-2 max-w-md">
              <div className="bg-white rounded-full p-4 pl-5 flex items-center shadow-xs border border-[#E6DFD3]">
                <Search className="w-4 h-4 text-[#7A838E] mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search a term, phrase, abbreviation, or misspelling"
                  className="w-full bg-transparent text-[#14213D] placeholder-[#A0AEC0] text-xs font-medium focus:outline-none"
                />
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                className="bg-[#1A2E6E] hover:bg-[#0D1629] text-white text-xs font-bold py-3 px-7 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
              >
                Browse A&ndash;Z
              </button>
              <button
                type="button"
                className="bg-transparent hover:bg-[#EAE2D7] text-[#14213D] text-xs font-bold py-3 px-6 rounded-full border border-[#E6DFD3] transition-all duration-200 cursor-pointer"
              >
                Browse by topic
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image & Overlay Card */}
          <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
            {/* Background Image Container with rounded right corners */}
            <div className="absolute inset-0 w-full h-full rounded-b-[28px] lg:rounded-b-none lg:rounded-r-[28px] overflow-hidden">
              <Image
                src="/images/glossary/hero.png"
                alt="Signing room rental contract"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Popular Questions Floating Card - Positioned to extend outside */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -right-4 sm:-right-8 lg:-right-42 top-6 bottom-6 lg:top-8 lg:bottom-8 w-[240px] sm:w-[270px] bg-white rounded-2xl p-6 shadow-2xl z-20 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <span className="text-[11px] font-extrabold tracking-wider text-[#94A3B8] uppercase block mb-4">
                  POPULAR QUESTIONS
                </span>

                <div className="divide-y divide-[#E2E8F0]/60">
                  {popularQuestions.map((question) => (
                    <a
                      key={question}
                      href="#"
                      className="block py-3 text-[12px] font-extrabold text-[#1E293B] hover:text-[#1A2E6E] transition-colors leading-snug first:pt-0 last:pb-0"
                    >
                      {question}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
