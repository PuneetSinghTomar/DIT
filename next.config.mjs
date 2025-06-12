/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export (for `next export`)
  images: {
    domains: ['www.dituniversity.edu.in'], // For loading external images
  },
};

export default nextConfig;
