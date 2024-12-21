import { env } from '@/config/env';

export const shopifyUrls = {
	products: {
		all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json`,
		mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/collections/313355567290/products.json`,
	},
	collections: {
		all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/smart_collections.json`,
		products: (id: string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-10/collections/${id}/products.json`,
	},
};
