/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['localhost']
	},
	reactStrictMode: false,
}

module.exports = nextConfig
