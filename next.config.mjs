// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// };

// export default nextConfig;

const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  reactStrictMode: true,
  // add any other Next.js config here
});
