import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
<<<<<<< HEAD
  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,
  images: {
=======

  
 images: {
    // unoptimized: true,
>>>>>>> 54ccf4fb75bac90abcca235593e83d1710250b44
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-clients-images.s3.ap-south-1.amazonaws.com",
      },
    ],

    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",

    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: "default",
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "swiper"],

    optimizeCss: true,

    scrollRestoration: true,
  },
};

export default nextConfig;
