import { env } from '@/config/env';
import { shopifyUrls } from './urls';
import { CollectionCustom, SmartCollection } from '@/infrastructure/interfaces/Collection';
import { CollectionMapper } from '../mappers/collection';

export const getCollections = async (): Promise<CollectionCustom[]> => {
	try {
		const response = await fetch(shopifyUrls.collections.all, {
			headers: new Headers({
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
			}),
		});
		const { smart_collections }: { smart_collections: SmartCollection[] } = await response.json();

		const transformed_collections = smart_collections.map((collection) =>
			CollectionMapper.collectionResponse(collection)
		);

		return transformed_collections;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to get Collections');
	}
};

export const getCollectionProducts = async (id: string) => {
	try {
		const response = await fetch(shopifyUrls.collections.products(id), {
			headers: new Headers({
				'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
			}),
		});
		const { products } = await response.json();

		return products;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to get Collection Products');
	}
};
