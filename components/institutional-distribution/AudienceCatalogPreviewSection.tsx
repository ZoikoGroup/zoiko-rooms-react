"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface CatalogItem {
  imageSrc: string;
  imageAlt: string;
  price: string;
  subtitle: string;
  badgeText: string;
  badgeStyle: string; // Tailwind colors for badge background and text
}

const catalogItems: CatalogItem[] = [
  {
    imageSrc: "/images/institutional-distribution/room.png",
    imageAlt: "Bright living room with gray couch",
    price: "$980/mo",
    subtitle: "University cohort catalog \u00B7 avail. now",
    badgeText: "Physical inspection",
    badgeStyle: "bg-[#EBF6EE] text-[#287042] border-[#D4EAD9]",
  },
  {
    imageSrc: "/images/institutional-distribution/building.png",
    imageAlt: "Modern glass skyscraper building",
    price: "$860/mo",
    subtitle: "Employer distribution channel \u00B7 avail. 1 Sep",
    badgeText: "Document verified",
    badgeStyle: "bg-[#FCF6E5] text-[#8A6A24] border-[#F5E8C7]",
  },
  {
    imageSrc: "/images/institutional-distribution/packing.png",
    imageAlt: "Luggage packing with laptop",
    price: "$790/mo",
    subtitle: "Nominated / allocated \u00B7 avail. now",
    badgeText: "Nomination pending",
    badgeStyle: "bg-[#EEF2FC] text-[#2C4A8E] border-[#D9E2F7]",
  },
];

export default function AudienceCatalogPreviewSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("AUDIENCE CATALOG PREVIEW")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Scoped supply, evidence attached")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            {t(
              "Every catalog entry carries provider authority, current availability, and complete costs — labeled by exactly how it was verified.",
            )}
          </p>
        </div>

        {/* 3 Grid Catalog Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {catalogItems.map((item, idx) => (
            <motion.div
              key={item.price + idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden bg-[#F5F2EC]">
                <img
                  src={item.imageSrc}
                  alt={t(item.imageAlt)}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text & Badge Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-[#14213D]">
                    {item.price}
                  </h3>
                  <p className="text-xs text-[#7A838E] font-medium">
                    {t(item.subtitle)}
                  </p>
                </div>

                {/* Status Badge */}
                <div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium border ${item.badgeStyle}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {t(item.badgeText)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
