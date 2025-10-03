// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",   // 👈 this enables static export
  images: {
    unoptimized: true, // 👈 avoids issues with Next Image Optimization
  },
};

export default nextConfig;
