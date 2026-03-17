import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  
 images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-clients-images.s3.ap-south-1.amazonaws.com",
        // port: "",
        // pathname: "/**",
      },
    ]
  },
};

export default nextConfig;
