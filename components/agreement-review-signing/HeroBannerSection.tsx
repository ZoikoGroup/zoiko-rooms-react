"use client";

import { TriangleAlert } from "lucide-react";

export function HeroBannerSection() {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-[#E3C583] bg-[#F6ECD4] p-6 sm:p-7">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#8A6A24]">
        <TriangleAlert className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-heading text-lg font-semibold text-[#6B5518]">Changed since your last review</h2>
        <p className="text-sm leading-relaxed text-[#6B5518]">
          Version updated from v2 to v3 — review what changed before you can sign.
        </p>
        <p className="mt-1 flex flex-wrap gap-x-2 text-xs text-[#8A6A24]">
          <span>Current version: v3</span>
          <span>·</span>
          <span>Generated 19 Aug 2026</span>
          <span>·</span>
          <span>Signer authority confirmed for your role</span>
        </p>
      </div>
    </div>
  );
}
