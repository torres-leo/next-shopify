import React from 'react';
import { Metadata } from 'next';

import { getCollectionProducts, getCollections } from '@/services/shopify/collections';
import { getProducts } from '@/services/shopify';
import ProductList from '@/components/Product/ProductList';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { categories } = params;
	let title = 'Store';
	let description = 'Browse our collection of amazing products✨';

	if (categories?.length > 0) {
		const collections = await getCollections();
		const selectedCollection = collections.find((collection) => collection.handle === categories[0]);

		if (selectedCollection) {
			title = `Store - ${selectedCollection.title}`;
			description = `Explore products from the ${selectedCollection.title} collection`;
		}
	}

	return {
		title,
		description,
	};
}

interface Props {
	params: {
		categories: string[];
	};
	searchParams?: string;
}

async function Category({ params }: Props) {
	const { categories } = params;

	let products = [];
	const collections = await getCollections();

	if (categories?.length > 0) {
		const selectedCollectionId = collections.find((collection) => collection.handle === categories[0])?.id;

		if (!selectedCollectionId) {
			throw new Error(`Collection with handle ${categories[0]} not found`);
		}

		products = await getCollectionProducts(`${selectedCollectionId}`);
	} else {
		products = await getProducts();
	}

	return <ProductList products={products} />;
}

export default Category;
