"use client";

// Catey wordmark logo. Source SVG fill is #764C24 (dark brown).
// On dark theme we force pure white via brightness(0) + invert, so it never
// drifts into the cool/teal hue you get from a single invert of a warm brown.
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
      className={`${className} dark:[filter:brightness(0)_invert(1)]`}
      priority
    />
  );
}
