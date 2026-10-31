/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.agingwithhonor.com" }],
        destination: "https://agingwithhonor.com/:path*",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig
