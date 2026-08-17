"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ActionCalloutSection() {
  const [activeAction, setActiveAction] = useState("Find a Room");

  const actions = [
    { id: "Find a Room", label: "Find a Room", isPrimary: true },
    { id: "List a Room", label: "List a Room", isPrimary: false },
    { id: "Open Guides", label: "Open Guides", isPrimary: false },
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#14213D] rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6"
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-[26px] font-serif font-bold text-white leading-tight max-w-2xl mx-auto">
            Definitions explain language &mdash; live records control the
            current outcome.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#A0AEC0] font-normal leading-relaxed max-w-xl mx-auto">
            Route to room search, listing setup, guides, or Help Center based on
            what you just read.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
            {actions.map((action) => {
              const isSelected = activeAction === action.id;
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => setActiveAction(action.id)}
                  className={`text-xs sm:text-sm font-bold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer ${
                    action.isPrimary
                      ? "bg-white text-[#14213D] hover:bg-[#FAF6F0] shadow-xs active:scale-95"
                      : "bg-transparent text-white border border-[#2D3A58] hover:border-white hover:bg-white/5"
                  }`}
                >
                  {action.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
