/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/OIF-homepage",
  assetPrefix: "/OIF-homepage/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
