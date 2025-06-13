/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.dituniversity.edu.in'], // For loading external images
    unoptimized: true, // ✅ Disable image optimization for static export
  },
};

export default nextConfig;
