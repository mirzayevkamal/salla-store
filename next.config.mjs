/** @type {import('next').NextConfig} */
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

export default nextConfig;
