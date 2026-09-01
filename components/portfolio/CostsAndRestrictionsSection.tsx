"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

interface CostRow {
  item: string;
  value: string;
  emphasis?: string;
  rest?: string;
  isFooter?: boolean;
}

const costTableRows: CostRow[] = [
  { item: "Monthly room rent", value: "$1,450 per month" },
  { item: "Security deposit", value: "$1,450" },
  { item: "Required move-in fee", value: "$80" },
  { item: "Estimated utilities", value: "$120 per month" },
  { item: "Known recurring total", value: "$1,570 per month" },
  {
    item: "Known upfront total",
    value:
      "$1,530 before move-in, excluding first month's rent if collected separately",
  },
  {
    item: "Effective date",
    value: "",
    emphasis: "Illustrative values effective August 1, 2026",
    rest: "a later change must not silently rewrite an earlier accepted agreement",
    isFooter: true,
  },
];

interface FeatureCard {
  title: string;
  description: string;
  iconSrc: string;
  bgColor: string;
}

const featureCards: FeatureCard[] = [
  {
    title: "Occupancy & capacity",
    description:
      "Approved maximum and room/bed model, with source and date \u2014 no hidden extra occupant.",
    iconSrc: "/icons/vector (10).png",
    bgColor: "bg-[#EEF2FC]",
  },
  {
    title: "Stay dates",
    description:
      "Minimum/maximum stay, notice, renewal, extension, early termination and turnover.",
    iconSrc: "/icons/vector (11).png",
    bgColor: "bg-[#EBF6EE]",
  },
  {
    title: "Household & shared living",
    description:
      "Private/shared spaces, current occupancy facts and household rules.",
    iconSrc: "/icons/vector (12).png",
    bgColor: "bg-[#FAF0D9]",
  },
  {
    title: "Age & eligibility",
    description:
      "Only where lawful and necessary, with exact rule, source and alternatives.",
    iconSrc: "/icons/vector (13).png",
    bgColor: "bg-[#FDE8E8]",
  },
  {
    title: "Pets & assistance animals",
    description:
      "Separate pet preference/rule from assistance-animal process; no disability inference.",
    iconSrc: "/icons/vector (14).png",
    bgColor: "bg-[#EEF2FC]",
  },
  {
    title: "Protected traits",
    description:
      "Never used for ranking, matching, filtering or eligibility outside a narrowly authorized lawful program.",
    iconSrc: "/icons/vector (15).png",
    bgColor: "bg-[#EBF6EE]",
  },
];

export default function CostsAndRestrictionsSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full text-[#14213D] py-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("Costs & Restrictions")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-serif font-bold text-[#14213D] leading-tight">
            {t("Complete cost before commitment.")}
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed max-w-xl mx-auto">
            {t(
              "Rent, deposit, required fees, bills, taxes, discounts, participant contribution, period and effective date are visible together — not disclosed one at a time.",
            )}
          </p>
        </div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl border border-[#EAE6DF] shadow-xs overflow-hidden max-w-6xl mx-auto"
        >
          {/* Table Header */}
          <div className="bg-[#1C2C5E] text-white px-6 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-4 text-[11px] font-bold tracking-wider uppercase">
            <div className="sm:col-span-4">{t("Cost Item")}</div>
            <div className="sm:col-span-8">{t("Illustrative Current Value")}</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#EAE6DF]">
            {costTableRows.map((row) => (
              <div
                key={row.item}
                className={`px-6 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center text-xs ${
                  row.isFooter
                    ? "bg-[#FAF6F0] font-normal text-[#14213D]"
                    : "text-[#555E68]"
                }`}
              >
                <div className="sm:col-span-4 font-bold text-[#14213D]">
                  {t(row.item)}
                </div>
                <div className="sm:col-span-8">
                  {row.isFooter ? (
                    <span>
                      <strong>{t(row.emphasis!)}</strong> &mdash; {t(row.rest!)}
                    </span>
                  ) : (
                    t(row.value)
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Example Boundary Rule Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE6DF] border-l-4 border-l-[#C8202C] shadow-xs space-y-2 max-w-6xl mx-auto"
        >
          <span className="text-[11px] font-bold tracking-widest text-[#C8202C] uppercase block">
            {t("Example Boundary")}
          </span>
          <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
            {t(
              "These USD values demonstrate complete-cost presentation and effective dating. They are not Zoiko Rooms prices, market averages, provider quotes, taxes, affordability guidance, investment advice, or a guarantee of future cost.",
            )}
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto pt-2">
          {featureCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 border border-[#EAE6DF] shadow-xs space-y-3 flex flex-col justify-start"
            >
              {/* Icon Bubble */}
              <div
                className={`w-8 h-8 rounded-full ${card.bgColor} flex items-center justify-center shrink-0`}
              >
                <img
                  src={card.iconSrc}
                  alt={card.title}
                  className="w-4 h-4 object-contain"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#14213D]">
                  {t(card.title)}
                </h3>
                <p className="text-xs text-[#555E68] leading-relaxed">
                  {t(card.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-2">
          <a
            href="/contact-us"
            className="hover:bg-[#E5D5C2] text-[#1B2A4A] text-xs font-bold py-3.5 px-7 rounded-full border border-[#1B2A4A] transition-all duration-200 cursor-pointer shadow-2xs active:scale-95 inline-flex items-center justify-center"
          >
            {t("Review Cost Model")}
          </a>
        </div>
      </div>
    </section>
  );
}
