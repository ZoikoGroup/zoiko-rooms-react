"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function AboutTheseTermsSection() {
  const { t } = useLanguage();
  return (
    <section
      id="about-these-terms"
      className="py-10 border-b border-[#EAE6DF] font-sans antialiased text-[#101C33]"
    >
      {/* Section Number & Heading */}
      <h2 className="text-2xl sm:text-3xl font-serif flex items-baseline gap-2 mb-6">
        <span className="font-mono text-lg sm:text-xl text-[#C8202C] font-normal">
          01
        </span>
        <span>{t("About these Terms")}</span>
      </h2>

      {/* "In short" Highlight Box */}
       <div className="bg-[#F2DED2] rounded-2xl px-4 py-3 mb-8">
        <p className="text-sm font-bold text-[#93321F] leading-relaxed">
          {t(
            "In short: these Terms are a binding contract between you and Zoiko Rooms, made up of this document plus the policies it incorporates.",
          )}
        </p>
      </div>

      {/* Paragraph Content */}
      <div className="space-y-6 text-sm sm:text-base text-[#5C5B57] font-normal leading-relaxed">
        <p>
          {t(
            "These Terms of Use form a binding agreement between you and Zoiko Rooms governing your access to and use of the Zoiko Rooms platform — the website, apps, listings, messaging, applications, transactions, and related services. By creating an account or using the platform, you agree to these Terms and the documents they incorporate.",
          )}
        </p>

        <p>
          {t(
            "These Terms incorporate, and should be read together with, our Payment Terms, Community Standards, Fair Housing & Anti-Discrimination policy, Privacy Notice, and any Regional Schedule or Supplemental Terms that apply to your country or service. Where a more specific incorporated document conflicts with these general Terms on a particular point, the more specific document controls for that point.",
          )}
        </p>

        <p>
          {t(
            `Where we use a defined term with an initial capital letter — "Room," "Listing," "Provider," "Renter," "Agreement" — it carries the meaning given the first time it's used, or in the applicable Regional Schedule.`,
          )}
        </p>
      </div>
    </section>
  );
}
