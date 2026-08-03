"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { EvidenceBadge } from "@/components/ui";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { easeOut } from "@/lib/motion";
import type { Room } from "./data";

type RoomCardProps = {
  room: Room;
  saved: boolean;
  onToggleSaved: () => void;
  comparing: boolean;
  onToggleComparing: () => void;
};

export function RoomCard({ room, saved, onToggleSaved, comparing, onToggleComparing }: RoomCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -4, boxShadow: "0 16px 32px -12px rgba(14,47,115,0.18)" }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={`flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm sm:flex-row ${
        comparing ? "border-brand-navy" : "border-black/5"
      }`}
    >
      <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-40">
        <NaturalImage src={room.image} alt={room.title} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="font-heading text-lg font-semibold text-brand-navy">
            ${room.price.toLocaleString()}/month
            <span className="ml-2 font-sans text-sm font-normal text-neutral-400">{room.priceNote}</span>
          </p>
          <EvidenceBadge label={room.statusLabel} tone={room.statusTone} variant="outline" />
        </div>

        <p className="text-sm text-neutral-700">{room.title}</p>
        <p className="text-sm text-neutral-500">{room.facts}</p>

        <EvidenceBadge label={room.evidenceLabel} tone={room.evidenceTone} variant="outline" className="w-fit" />

        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-brand-red">
          <span className="cursor-default text-brand-red">View room</span>
          <button
            type="button"
            onClick={onToggleSaved}
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-red-dark"
          >
            {saved && <Check className="h-3.5 w-3.5" />}
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={onToggleComparing}
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-red-dark"
          >
            {comparing && <Check className="h-3.5 w-3.5" />}
            {comparing ? "Comparing" : "Compare"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
