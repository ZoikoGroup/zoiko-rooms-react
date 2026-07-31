"use client";

import { useEffect, useRef, useState } from "react";

type NaturalImageProps = {
  src: string;
  alt: string;
  className?: string;
};

// Renders the image at its own real dimensions (no cropped aspect-ratio box)
// — this page's images should show exactly what was uploaded, uncropped.
export function NaturalImage({ src, alt, className = "" }: NaturalImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A cached image can finish loading before React attaches the onLoad
  // listener, so onLoad never fires — check img.complete on mount too.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- natural sizing needs the browser's intrinsic width/height, which next/image can't do for public/ paths without fill or fixed width/height
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`w-full h-auto transition-opacity duration-700 ease-out ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
