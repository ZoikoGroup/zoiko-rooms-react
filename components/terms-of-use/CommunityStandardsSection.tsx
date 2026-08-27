"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function CommunityStandardsSection() {
  const { t } = useLanguage();
  return (
    <section
      id="community-standards"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif font-normal flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          13
        </span>
        <span>{t("Community standards, messaging & prohibited uses")}</span>
      </h2>

      {/* "In short" Highlight Box */}
      <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: our Community Standards, also incorporated here, set the behavioral rules for everyone on the platform.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <p className="text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed mb-6">
        {t(
          "Harassment, fraud, impersonation, credential misuse, illegal activity, off-platform circumvention of safety controls, and interference with platform integrity are all prohibited, as detailed in our Community Standards, which are incorporated into these Terms.",
        )}
      </p>

      {/* Action Link */}
      <div>
        <a
          href="/legal/community-standards"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#93321F] hover:underline"
        >
          <span>{t("Read the full Community Standards")}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
