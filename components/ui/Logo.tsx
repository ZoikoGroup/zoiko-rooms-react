"use client";

import { useState } from "react";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

// Renders the real /public/logo.png once it exists; falls back to a styled
// text wordmark (rather than a broken-image icon) until then.
export function Logo({ className = "" }: LogoProps) {
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
      width={168}
      height={36}
      priority
      className={`h-8 w-auto sm:h-9 ${className}`}
      onError={() => setImageFailed(true)}
    />
  );
}
