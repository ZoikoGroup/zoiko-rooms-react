"use client";

import { useState } from "react";
import Image from "next/image";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

// Renders the real /public/logo.png once it exists; falls back to a styled
// text wordmark (rather than a broken-image icon) until then.
// Pass width/height to size this instance manually (the real file is
// 836x128 — keep that ~6.53:1 ratio or it will look stretched).
export function Logo({ className = "", width = 209, height = 32 }: LogoProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <span
        className={`font-heading text-xl font-semibold tracking-tight sm:text-2xl ${className}`}
      >
        <span className="text-brand-navy">Zoiko</span>
        <span className="text-brand-red">Rooms</span>
      </span>
    );
  }

  return (
    <Image
      src="/logo.png"
      alt="Zoiko Rooms"
      width={width}
      height={height}
      priority
      className={className}
      onError={() => setImageFailed(true)}
    />
  );
}
