import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root: a stray lockfile in the home directory otherwise
  // makes Next.js guess the wrong root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d5gzeazkxfhs83i9.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
