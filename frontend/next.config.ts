import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["st-images.honasa.in", "images.mamaearth.in"], // Add your allowed image hostnames here
  },
};

export default nextConfig;
