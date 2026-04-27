"use client";

// Catey wordmark logo. Source SVG fill is #764C24 (dark brown).
// On dark theme we invert so it reads as a warm cream against the dark background.
import Image from "next/image";

export function CateyLogo({
  className = "h-8 w-auto",
  alt = "Catey",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/catey/brand/catey-logo.svg"
      alt={alt}
      width={1116}
      height={254}
      className={`${className} dark:invert`}
      priority
    />
  );
}
