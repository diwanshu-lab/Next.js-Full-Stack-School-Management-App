/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" }, // पहले से मौजूद
      { hostname: "res.cloudinary.com" }, // ✅ Cloudinary को Allow किया
    ],
  },
};

export default nextConfig;
