/** @type {import('next').NextConfig} */

// Base path is only needed on GitHub Pages (site served under
// /putih-services-website/). Set via NEXT_PUBLIC_BASE_PATH in the
// GitHub Actions workflow. On Vercel / local dev it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  basePath,
  images: { unoptimized: true },
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
