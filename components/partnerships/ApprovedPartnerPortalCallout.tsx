"use client";

import React from "react";

export default function ApprovedPartnerPortalCallout() {
  return (
    <div className="flex items-center justify-center py-12 md:py-16 text-white bg-[#EEDFC5]">
      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="bg-[#232F36] rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          {/* Left Text Content */}
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-white mb-3 tracking-tight">
              Already an approved partner?
            </h3>
            <p className="text-xs sm:text-sm text-[#919EAB] leading-relaxed font-normal">
              Existing partners get support and enablement through the approved partner portal — you shouldn't need to resubmit a public interest form.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full sm:w-auto">
            <a
              href="https://app.zoikorooms.com/account/login"
              className="inline-block text-center w-full sm:w-auto px-6 py-3 rounded-full border border-[#454F5B] text-xs font-semibold text-white hover:bg-[#34404B] transition-colors cursor-pointer"
            >
              Sign in to partner portal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}