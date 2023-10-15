/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    // Enable the optimization flag to allow image optimization.
    optimize: true,
  },
};

module.exports = {
  images: {
    domains: ["cdn.miswag.me"], // Add any other domains you need to allow
  },
};
