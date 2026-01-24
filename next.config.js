/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/OIF-homepage" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/OIF-homepage/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
