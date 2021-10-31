/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  images: {
    domains: ["picsum.photos"],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  swcMinify: true,
};
