/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
}
}

module.exports = nextConfig

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}
