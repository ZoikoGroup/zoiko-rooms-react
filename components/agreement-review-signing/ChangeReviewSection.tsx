"use client";

import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, Card, Tag } from "./shared";
import { changeRows } from "./data";

export function ChangeReviewSection() {
  return (
    <Card id="change-review">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Change Review</Eyebrow>
          <SectionTitle>Changed since the version you last reviewed</SectionTitle>
        </div>

        <Callout>
          Agreement updated from <strong className="font-semibold">v2 to v3</strong>. Monthly
          rent is unchanged. The move-in date changed. A new access schedule was added. Review
          these changes and the full current agreement before signing.
        </Callout>

        <div className="flex flex-col divide-y divide-[#E9E0D3]">
          {changeRows.map((row) => (
            <div key={row.field} className="flex flex-col gap-1.5 py-4 first:pt-0">
              <span className="text-sm font-semibold text-brand-navy">{row.field}</span>
              {row.oldValue ? (
                <span className="text-sm">
                  <span className="text-neutral-400 line-through">{row.oldValue}</span>
                  <br />
                  <span className="font-semibold text-brand-navy">{row.newValue}</span>
                </span>
              ) : (
                <span className="text-sm text-neutral-600">{row.newValue}</span>
              )}
              <Tag label={row.tag} tone={row.tone} />
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-400">
          Change owner: Provider (system-generated from approved template) · 19 Aug 2026. Full
          clause wording available in Section 7 below.
        </p>
      </Reveal>
    </Card>
  );
}
