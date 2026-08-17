"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NextStepsCalloutSection() {
  const [activeStep, setActiveStep] = useState("Search Help");

  const steps = [
    { id: "Search Help", label: "Search Help" },
    { id: "Contact Support", label: "Contact Support" },
    { id: "Check Case Status", label: "Check Case Status" },
    { id: "Safety Help", label: "Safety Help" },
  ];

  return (
    <section className="w-full text-[#1E2022] pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-[#F2EADF] rounded-3xl p-8 sm:p-12 text-center space-y-6"
        >
          {/* Section Heading */}
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#14213D] leading-tight">
            Still need help? Choose your next step.
          </h2>

          {/* Button Group */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`text-xs sm:text-sm font-semibold py-3 px-6 rounded-full border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#142550] text-white border-[#142550] shadow-xs"
                      : "bg-transparent text-[#555E68] border-[#DCD3C7] hover:border-[#142550] hover:text-[#14213D]"
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
