/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/OIF-homepage",
  assetPrefix: "/OIF-homepage/",
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
