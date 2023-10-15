/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "experimental-serverless-trace",
};

module.exports = {
  images: {
    domains: ["cdn.miswag.me"], // Add any other domains you need to allow
  },
};
