import { env } from '@/config/env';
import { Product } from '@/infrastructure/interfaces/Product-response';
import { ProductMapper } from '../mappers/product';
import { ProductType } from '@/infrastructure/types/Product';
import { shopifyUrls } from './urls';

export const getMainProducts = async (): Promise<Partial<ProductType>[]> => {
	try {
		const response = await fetch(shopifyUrls.products.mainProducts, {
			headers: new Headers({
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
			}),
			// next: {
			// 	revalidate: 10,
			// },
			// cache: 'no-cache',
			next: {
				revalidate: 3600,
				tags: ['main-products'],
			},
		});
		const { products }: { products: Product[] } = await response.json();

		const transformedProducts = products.map((product) => {
			return {
				id: product.id.toString(),
				title: product.title,
				handle: product.handle,
				image: product.images[0].src,
			};
		});

		return transformedProducts;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to get Main Products');
	}
};

export const getProducts = async (id?: string): Promise<ProductType[]> => {
	try {
		const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all;

		const response = await fetch(apiUrl, {
			headers: new Headers({
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
			}),
		});
		const { products }: { products: Product[] } = await response.json();

		const transformedProducts = products.map((product) => ProductMapper.productResponse(product));

		return transformedProducts;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to get Products');
	}
};
