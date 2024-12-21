import React, { Suspense } from 'react';

import ProductCard from './ProductCard';
import SkeletonCard from '../Skeletons/Cards';
import { ProductType } from '@/infrastructure/types/Product';

interface Props {
	products: ProductType[];
}

const ProductList = async ({ products }: Props) => {
	// const response = await fetch('http://localhost:3000/api');
	// const { products }: { products: Product[] } = await response.json();

	const renderProductList = () => {
		if (!products) return;

		return products.map((item) => (
			<Suspense fallback={<SkeletonCard />} key={crypto.randomUUID()}>
				<ProductCard product={item} key={crypto.randomUUID()} />
			</Suspense>
		));
	};

	return (
		<main className='py-10'>
			<h4 className='text-center text-4xl mb-10'>✨ New Products Release ✨</h4>
			<ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>{renderProductList()}</ul>
		</main>
	);
};

export default ProductList;
