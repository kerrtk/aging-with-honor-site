/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "agingwithhonor.com" }],
        destination: "https://www.agingwithhonor.com/:path*",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig
