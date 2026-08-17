import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // 1. Enable tree-shaking / barrel optimization for heavy libraries
  experimental: {
    optimizePackageImports: [
      'lucide-react',         // or '@heroicons/react', 'react-icons', etc.
      '@radix-ui/react-icons',
      '@mui/material',
      'framer-motion',
      'lodash',
    ],
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],}
  // 2. Transpile specific heavy UI packages if you use shadcn/ui or Radix
  // transpilePackages: ['@radix-ui/react-primitive'],
};

export default withNextIntl(nextConfig);