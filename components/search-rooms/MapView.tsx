"use client";

import { motion } from "framer-motion";
import type { Room } from "./data";

// Deterministic pseudo-placement so pins land in different spots per room
// without relying on real coordinates or Math.random().
function pinPosition(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) hash = (hash * 31 + id.charCodeAt(i)) % 997;
  const top = 12 + (hash % 70);
  const left = 8 + ((hash * 7) % 84);
  return { top: `${top}%`, left: `${left}%` };
}

type MapViewProps = {
  roomsToShow: Room[];
  hoveredId: string | null;
  onHover: (id: string | null) => void;
};

export function MapView({ roomsToShow, hoveredId, onHover }: MapViewProps) {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[#E9E0D3] bg-[#EFEAE0]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#D9C7B3 1px, transparent 1px), linear-gradient(90deg, #D9C7B3 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <p className="absolute left-4 top-4 text-xs font-medium uppercase tracking-wide text-neutral-500">
        Map view · illustrative pin placement, not geolocated
      </p>

      {roomsToShow.map((room) => {
        const { top, left } = pinPosition(room.id);
        const isHovered = hoveredId === room.id;
        return (
          <motion.button
            key={room.id}
            type="button"
            onMouseEnter={() => onHover(room.id)}
            onMouseLeave={() => onHover(null)}
            whileHover={{ scale: 1.08 }}
            animate={{ zIndex: isHovered ? 20 : 1 }}
            transition={{ duration: 0.15 }}
            style={{ top, left }}
            className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
          >
            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold shadow-sm transition-colors ${
                isHovered
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-[#E9E0D3] bg-white text-brand-navy"
              }`}
            >
              ${room.price.toLocaleString()}
            </span>
            <span
              className={`-mt-px h-2 w-2 rotate-45 border-b border-r ${
                isHovered ? "border-brand-navy bg-brand-navy" : "border-[#E9E0D3] bg-white"
              }`}
            />
            {isHovered && (
              <span className="mt-2 w-40 rounded-lg border border-[#E9E0D3] bg-white p-2 text-left text-xs text-neutral-600 shadow-md">
                {room.title}
              </span>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
