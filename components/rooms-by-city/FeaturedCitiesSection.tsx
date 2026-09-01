"use client";

import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { cityData, type CityCardProps } from "./data";

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

const categories = [
  "All Cities",
  "University Cities",
  "Work & Healthcare Hubs",
  "International Destinations",
];

interface FeaturedCitiesSectionProps {
  selectedCities: string[];
  onToggleCompare: (name: string) => void;
}

export default function FeaturedCitiesSection({ selectedCities, onToggleCompare }: FeaturedCitiesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All Cities");

  // Dynamic filtering logic
  const filteredCities = cityData.filter((city) =>
    activeCategory === "All Cities" ? true : city.category === activeCategory,
  );

  return (
    <section id="cities" className="w-full border-t border-stone-200 bg-white px-6 py-12 font-['Inter',sans-serif] md:px-24">
      <div className="w-full max-w-7xl md:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0}
              variants={floatUpVariants}
            >
              <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-red-600">
                FEATURED CITIES
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.1}
              variants={floatUpVariants}
            >
              <h2 className="font-['Fraunces',serif] text-xl font-semibold leading-9 text-gray-800">
                Current destinations, not fabricated popularity
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.2}
            variants={floatUpVariants}
            className="flex flex-wrap items-center justify-start gap-2 pt-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-gray-800 bg-gray-800 text-white shadow-sm"
                      : "border-stone-200 bg-white text-stone-500 hover:border-stone-400 hover:text-stone-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2 lg:grid-cols-4">
            {filteredCities.map((city, index) => (
              <motion.div
                key={city.name}
                layout // Smooth transition when grid items shift/change
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={index * 0.05}
                variants={floatUpVariants}
              >
                <CityCard
                  city={city}
                  compared={selectedCities.includes(city.name)}
                  onToggleCompare={() => onToggleCompare(city.name)}
                />
              </motion.div>
            ))}
          </div>

          {filteredCities.length === 0 && (
            <div className="py-12 text-center text-sm text-stone-500">
              No cities found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface CityCardComponentProps {
  city: CityCardProps;
  compared: boolean;
  onToggleCompare: () => void;
}

function CityCard({ city, compared, onToggleCompare }: CityCardComponentProps) {
  const [alertSaved, setAlertSaved] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(`zoiko-city-alert:${city.name}`) === "1";
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from localStorage on mount, not a render loop
      setAlertSaved(true);
    }
  }, [city.name]);

  function toggleAlert() {
    setAlertSaved((prev) => {
      const next = !prev;
      window.localStorage.setItem(`zoiko-city-alert:${city.name}`, next ? "1" : "0");
      return next;
    });
  }

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 12px 24px -6px rgba(0, 0, 0, 0.08)" }}
      transition={{ duration: 0.2 }}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white"
    >
      <label className="absolute left-3 top-3 z-10 flex cursor-pointer items-center gap-2 rounded-lg bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-colors hover:bg-white">
        <input
          type="checkbox"
          checked={compared}
          onChange={onToggleCompare}
          className="h-3.5 w-3.5 cursor-pointer rounded border-neutral-400 accent-sky-900"
        />
        <span>Compare</span>
      </label>

      <div className="relative h-44 w-full overflow-hidden p-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={city.imageUrl}
          alt={city.name}
          className="h-full w-full rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-0.5 p-4">
        <div>
          <h3 className="font-['Fraunces',serif] text-base font-semibold leading-7 text-gray-800">
            {city.name}
          </h3>

          <div className="mt-0.5 flex min-h-[24px] items-center">
            {city.badgeText ? (
              <span className="rounded-full border border-yellow-800/30 bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-yellow-800">
                {city.badgeText}
              </span>
            ) : (
              <span className="text-xs font-normal leading-5 text-stone-500">
                {city.roomsCount}
              </span>
            )}
          </div>

          <div className="pt-1.5 text-sm font-semibold leading-5 text-gray-800">
            {city.priceRange}
          </div>

          <div className="pt-0.5 text-xs font-normal leading-5 text-stone-500">
            {city.reviewedDate}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-stone-100 pt-3.5">
          <a
            href="/find-a-room/search-rooms"
            className="text-xs font-semibold text-sky-900 transition-colors hover:underline hover:text-sky-950"
          >
            Explore Rooms
          </a>
          <button
            type="button"
            onClick={toggleAlert}
            aria-pressed={alertSaved}
            className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
              alertSaved ? "text-emerald-700" : "text-stone-500 hover:text-stone-800"
            }`}
          >
            {alertSaved && <Check className="h-3.5 w-3.5" />}
            {alertSaved ? "Alert saved" : "Save alert"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
