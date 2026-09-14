
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // 1. Configure external image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // 2. Enable tree-shaking / barrel optimization for heavy libraries
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-icons",
      "@mui/material",
      "framer-motion",
      "lodash",
    ],
  },

  // Transpile specific heavy UI packages if you use shadcn/ui or Radix
  // transpilePackages: ['@radix-ui/react-primitive'],
};

export default withNextIntl(nextConfig);