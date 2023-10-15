/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["cdn.miswag.me"], // Add any other domains you need to allow
  },
};

module.exports = nextConfig;
