/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,

  async headers() {
    return [
      {
        source: "/(.*).(png|jpg|jpeg|webp|svg|gif)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }, 
        ],
      },
    ];
  },
};

export default nextConfig;
