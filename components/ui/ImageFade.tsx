"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export function ImageFade({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and passed via ...props
    <Image
      {...props}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
