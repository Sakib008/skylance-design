/** @type {import('next').NextConfig} */
const nextConfig = {
  // This disables the Next.js watermark in development mode
  devIndicators: {
    buildActivity: true,
    // buildActivityPosition: "bottom-right",
  },
}

module.exports = nextConfig
