/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hostname.com",
      },
    ],
  },
};

module.exports = nextConfig;
