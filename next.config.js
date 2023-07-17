/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "m.media-amazon.com"],
  },

  env: {
    MONGO: process.env.MONGO,
  },
};

module.exports = nextConfig;
