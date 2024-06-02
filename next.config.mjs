/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.salla.network",
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  moduleNameMapper: {
    "^@/src/(.*)$": "<rootDir>/components/$1",
  },
};

export default withNextIntl(nextConfig);
