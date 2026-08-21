"use client";

import { FileText } from "lucide-react";
import { Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, Card } from "./shared";
import { attachments } from "./data";

export function AttachmentsSection() {
  return (
    <Card id="attachments">
      <Reveal className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Eyebrow>Documents / Attachments</Eyebrow>
          <SectionTitle>Incorporated attachments</SectionTitle>
          <Paragraph>Every schedule, addendum, and disclosure incorporated into this Agreement.</Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          {attachments.map((attachment) => (
            <div key={attachment.title} className="flex items-center justify-between gap-4 rounded-2xl border border-[#E9E0D3] bg-white px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                  <FileText className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-brand-navy">{attachment.title}</span>
                  <span className="text-xs text-neutral-400">{attachment.meta}</span>
                </div>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-full border border-[#E9E0D3] bg-white px-4 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </Reveal>
    </Card>
  );
}
