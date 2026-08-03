"use client";

import { motion } from "framer-motion";
import { ImageFade } from "@/components/ui";
import { easeOut } from "@/lib/motion";

export function AuthImagePanel() {
  return (
    <div className="relative hidden overflow-hidden rounded-l-3xl bg-neutral-200 shadow-xl lg:block">
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <ImageFade
          src="/images/find-a-room/hero-bedroom.png"
          alt="A cozy, styled bedroom available to rent through Zoiko Rooms"
          fill
          sizes="(min-width: 1024px) 40vw, 0px"
          className="object-cover"
          preload
        />
      </motion.div>
    </div>
  );
}
