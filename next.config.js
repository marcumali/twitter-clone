/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
		APP_NAME: 'Marc Umali',
    API_URI: process.env.NEXT_PUBLIC_API_URI,
	},
  serverRuntimeConfig: {
		APP_NAME: 'Marc Umali',
    API_URI: process.env.NEXT_PUBLIC_API_URI,
	},
}

module.exports = nextConfig
