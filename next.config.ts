import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  
  images: {
    unoptimized: true,
  },
  
  compiler: {
    removeConsole : true,
  },
  compress: true,
};

export default nextConfig;
