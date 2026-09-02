"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const floatUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
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

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-stone-200 bg-white px-3 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition focus:border-sky-900 focus:ring-2 focus:ring-sky-900/15"
      />
    </label>
  );
}

export default function RoomsByCitySection() {
  const router = useRouter();
  const [locating, setLocating] = useState(false);

  function handleUseCurrentLocation() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      router.push("/find-a-room/search-rooms");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      () => {
        // We don't reverse-geocode coordinates to a supported city yet, so
        // hand off to search with location access granted rather than
        // guessing or leaving the button inert.
        setLocating(false);
        router.push("/find-a-room/search-rooms");
      },
      () => {
        setLocating(false);
        router.push("/find-a-room/search-rooms");
      },
    );
  }

  return (
    <section className="w-full max-w-[1176px] mx-auto px-4 sm:px-6 lg:px-18 pt-14 pb-14 font-['Inter',sans-serif]">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:items-stretch">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={floatUpVariants}
          className="flex flex-col gap-2.5"
        >
          <span className="text-sky-950 text-xs font-semibold uppercase leading-5 tracking-wide">
            ROOMS BY CITY
          </span>

          <div className="max-w-[560px]">
            <h2 className="text-gray-800 text-3xl font-semibold font-['Fraunces',serif] leading-10">
              Explore cities with current rooms and practical renting context.
            </h2>
          </div>

          <div className="max-w-[620px] pt-[5px] pb-[1px]">
            <p className="text-gray-800 text-base font-normal leading-6">
              Choose a city, compare current inventory signals, review dated cost and transport
              context, then continue to room search with your location applied.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.1}
            variants={floatUpVariants}
            className="mt-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <Field label="City or region" placeholder="e.g. Boston, MA" />
              <Field label="Move-in" placeholder="Optional" />
              <Field label="Monthly budget" placeholder="Optional" />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <motion.a
                href="#cities"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-sky-900 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-sky-950"
              >
                Explore Cities
              </motion.a>

              
            </div>
            
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={0.2}
          variants={floatUpVariants}
          className="relative min-h-[360px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 via-stone-800 to-slate-900 shadow-inner"
        >
          <Image
            src="/images/rooms-by-city/Paragraph+Background.png"
            alt="A bright room with layered textiles, plants, and warm decor"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

          
        </motion.div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  disabled={locating}
                  className="text-xs font-normal leading-5 text-stone-500 underline transition hover:text-stone-900 disabled:opacity-60"
                >
                  {locating ? "Locating…" : "Use current location"}
                </button>
                <a
                  href="#cities"
                  className="text-xs font-normal leading-5 text-stone-500 underline transition hover:text-stone-900"
                >
                  Browse all supported cities
                </a>
              </div>
      </div>
    </section>
  );
}
