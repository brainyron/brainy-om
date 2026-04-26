import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The Figma Make export ships with loose typings on some auto-generated
  // arrays (e.g. union member objects without a shared optional field).
  // Vite did not type-check at build time, so we mirror that behavior here
  // to keep parity. Lint and dev type-checking still work.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
