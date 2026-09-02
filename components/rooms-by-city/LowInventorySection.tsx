"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const floatUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay,
    },
  }),
};

export default function LowInventorySection() {
  const router = useRouter();
  const [alertSaved, setAlertSaved] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("zoiko-low-inventory-alert") === "1";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setAlertSaved(true);
    }
  }, []);

  function toggleAlert() {
    setAlertSaved((prev) => {
      const next = !prev;
      window.localStorage.setItem("zoiko-low-inventory-alert", next ? "1" : "0");
      return next;
    });
  }
  return (
    <section className="w-full border-t border-stone-200 px-6 py-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-[1240px] md:px-8">
        <div className="flex flex-col items-start justify-start gap-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-amber-700">
              NO CITY YET?
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="flex w-full flex-col items-start justify-start"
          >
            <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800">
              Search broadly or save a destination alert
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            className="my-2 flex w-full max-w-[720px] flex-col items-start justify-start gap-[4.9px] rounded-[10px] border-l-4 border-amber-700 bg-orange-100/80 px-6 pb-5 pt-8 shadow-sm"
          >
            <span className="text-xs font-bold uppercase leading-4 tracking-wide text-yellow-800">
              HONEST RECOVERY
            </span>
            <p className="text-sm font-normal leading-6 text-gray-800">
              Unsupported and low-inventory destinations remain honest. This does not mean no
              rooms exist outside Zoiko Rooms. It means we do not currently show enough eligible
              current listings to make a useful page.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.3}
            variants={floatUpVariants}
            className="flex w-full flex-wrap items-center gap-3.5 pt-3"
          >
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: "#b45309",
                boxShadow: "0 8px 20px -4px rgba(180, 83, 9, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={()=>router.push("/find-a-room/search-rooms")}
              className="flex cursor-pointer items-center justify-center rounded-full bg-amber-700 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200"
            >
              Search Rooms
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4", borderColor: "#a8a29e" }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleAlert}
              aria-pressed={alertSaved}
              className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-full border px-7 py-3.5 text-base font-semibold transition-colors duration-200 ${
                alertSaved
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-stone-200 bg-white text-gray-800"
              }`}
            >
              {alertSaved && <Check className="h-4 w-4" />}
              {alertSaved ? "City Alert Saved" : "Save City Alert"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f5f5f4", borderColor: "#a8a29e" }}
              whileTap={{ scale: 0.98 }}
              onClick={()=>router.push("/resources/help-center")}
              className="flex cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition-colors duration-200"
            >
              Get Help
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
