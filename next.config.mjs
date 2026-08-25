/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages serves the site from /putih-services-website/
  basePath: isProd ? "/putih-services-website" : "",
  images: { unoptimized: true },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
