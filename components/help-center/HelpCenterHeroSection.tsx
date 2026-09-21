"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Home,
  Key,
  UserCheck,
  CreditCard,
  Building2,
  ShieldCheck,
  X,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { helpFaqs, type HelpFaq } from "./helpFaqs";

interface HelpCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  lastReviewed: string;
}

interface HelpCenterHeroSectionProps {
  onSelectCategory?: (category: string) => void;
}

export default function HelpCenterHeroSection({ onSelectCategory }: HelpCenterHeroSectionProps) {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<HelpFaq | null>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(searchBoxRef, () => setShowSuggestions(false));

  const matches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return [];
    return helpFaqs.filter((faq) => faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)).slice(0, 6);
  }, [searchQuery]);

  const quickPills = [
    "I may be at risk or seeing a scam",
    "I can't access my account",
    "I need help with a room or listing",
    "I need help with an application or agreement",
    "I have a payment, refund, or deposit issue",
    "I manage an organization or Pro workspace",
  ];

  const categories = [
    {
      id: "find-a-room",
      iconSrc: "/icons/home.png",
      title: "Find a Room",
      description:
        "Search, filters, saved rooms, availability, viewings, applications, agreements, move-in, and support.",
      lastReviewed: "Reviewed Jul 2026",
    },
    {
      id: "list-a-room",
      iconSrc: "/icons/key.png",
      title: "List a Room",
      description:
        "Provider access, room records, Room Passport, availability, costs, publishing, applications, agreements, and payments.",
      lastReviewed: "Reviewed Jul 2026",
    },
    {
      id: "account-identity",
      iconSrc: "/icons/guy.png",
      title: "Account & Identity",
      description:
        "Sign-in, verification, MFA, authorized representatives, access recovery, privacy, and security.",
      lastReviewed: "Reviewed Jul 2026",
    },
    {
      id: "payments-refunds",
      iconSrc: "/icons/card.png",
      title: "Payments & Refunds",
      description:
        "Recipients, charges, deposits, contributions, failed payments, receipts, refunds, disputes, and fraud.",
      lastReviewed: "Reviewed Jul 2026",
    },
    {
      id: "organizations-pro",
      iconSrc: "/icons/building.png",
      title: "Organizations & Pro",
      description:
        "University, employer, healthcare, mobility, public-sector, portfolio, distribution, and integration support.",
      lastReviewed: "Reviewed Jul 2026",
    },
    {
      id: "safety-trust",
      iconSrc: "/icons/shield.png",
      title: "Safety & Trust",
      description:
        "Scams, impersonation, unsafe viewings, harassment, discrimination, documents, credentials, and urgent restrictions.",
      lastReviewed: "Reviewed Jul 2026",
    },
  ];

  function openFaq(faq: HelpFaq) {
    setSelectedFaq(faq);
    setShowSuggestions(false);
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches.length > 0) {
      openFaq(matches[0]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" } as const,
    },
  };

  return (
    <div className="w-full font-sans antialiased">
      {/* Dark Hero Header Section */}
      <section className="w-full bg-gradient-to-b from-[#2E4A3E] via-[#1C2230] to-[#0F1420] text-white pt-20 pb-28 px-4 sm:px-8 md:px-12 lg:px-16 relative overflow-x-clip">
        {/* Center Radial Glow Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, #A85A3459 0%, #A85A3400 70%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          {/* Eyebrow */}
          <span className="text-[13px] font-bold tracking-widest text-[#F0C9A8] uppercase block">
            {t("HELP CENTER")}
          </span>

          {/* Heading */}
          <h1 className="text-3xl lg:text-[34px] font-serif font-bold leading-tight text-white mx-auto">
            {t("Find the right answer, safety action, or accountable support path.")}
          </h1>

          {/* Subtext */}
          <p className="text-sm text-[#FFFFFFCC] leading-relaxed max-w-180 mx-auto font-normal">
            {t(
              "Search current help, choose what you're trying to do, or start with the issue affecting your room, listing, application, agreement, payment, organization, or Pro workspace.",
            )}
          </p>

          {/* Search Bar */}
          <div ref={searchBoxRef} className="relative pt-2 max-w-2xl mx-auto text-left">
            <form onSubmit={handleSearchSubmit}>
              <div className="bg-white rounded-full py-3.5 pl-5 pr-4 flex items-center gap-2.5 shadow-lg">
                <Search className="h-4 w-4 shrink-0 text-[#7A838E]" />
                <input
                  id="hc-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder={t("What do you need help with?")}
                  className="w-full bg-transparent text-[#14213D] placeholder-[#7A838E] text-xs sm:text-sm font-medium focus:outline-none"
                  autoComplete="off"
                />
              </div>
            </form>

            {/* Live FAQ Suggestions */}
            {showSuggestions && matches.length > 0 && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-2xl border border-[#EAE6DF] bg-white text-left shadow-2xl">
                {matches.map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    onClick={() => openFaq(faq)}
                    className="flex w-full items-center justify-between gap-3 border-b border-[#EAE6DF] px-5 py-3 text-left text-sm transition-colors last:border-b-0 hover:bg-[#FAF6F0]"
                  >
                    <span className="font-semibold text-[#14213D]">{t(faq.question)}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-[#A85A34]" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Warning disclaimer */}
          <p className="text-[11px] text-[#FFFFFF99] pt-1">
            {t(
              "Don't include passwords, verification codes, bank credentials, full card details, exact private addresses, or sensitive documents.",
            )}
          </p>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4 mx-auto">
            {quickPills.map((pill) => (
              <button
                key={pill}
                type="button"
                className="bg-[#FFFFFF24] hover:bg-white/20 border border-[#FFFFFF4D] text-white text-xs py-2 px-4 rounded-full transition-colors duration-150 backdrop-blur-sm cursor-pointer"
              >
                {t(pill)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section Overlapping/Below Hero */}
      <section className="w-full bg-transparent text-[#1E2022] -mt-16 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-[#EAE6DF] hover:shadow-md transition-shadow duration-200 flex flex-col justify-between space-y-2"
              >
                <div className="space-y-3">
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-[10px] bg-[#F1E7DA] flex items-center justify-center">
                    <img
                      src={cat.iconSrc}
                      alt={t(cat.title)}
                      className="w-5 h-5 object-contain"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-base font-bold text-[#1B2438]">
                    {t(cat.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#7A7266] leading-relaxed font-normal">
                    {t(cat.description)}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#F3EFEA]">
                  <span className="text-[11px] text-[#7A838E] font-normal">
                    {t(cat.lastReviewed)}
                  </span>
                  <a
                    href="#support-request"
                    onClick={() => onSelectCategory?.(cat.title)}
                    className="inline-flex underline items-center text-xs font-bold text-[#A85A34] hover:underline space-x-1 group"
                  >
                    <span>{t("Open help pathway")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Answer Modal */}
      <AnimatePresence>
        {selectedFaq && (
          <div
            onClick={() => setSelectedFaq(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg cursor-default rounded-3xl border border-[#EAE6DF] bg-white p-6 sm:p-8 text-[#14213D] shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedFaq(null)}
                aria-label={t("Close")}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#F3EFEA] text-[#555E68] transition-colors hover:bg-[#EAE6DF] hover:text-[#14213D]"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="block text-[11px] font-bold uppercase tracking-widest text-[#A85A34]">
                {t("Help Center answer")}
              </span>
              <h2 className="mt-2 font-serif text-xl font-bold leading-snug sm:text-2xl">
                {t(selectedFaq.question)}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#555E68]">
                {t(selectedFaq.answer)}
              </p>

              <a
                href={selectedFaq.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#A85A34] hover:underline"
              >
                {t(selectedFaq.linkLabel)}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
