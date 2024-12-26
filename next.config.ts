import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.shopify.com',
				protocol: 'https',
			},
		],
	},
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
};

export default nextConfig;
