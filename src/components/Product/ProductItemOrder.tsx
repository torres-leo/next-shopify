'use client';

import React, { SyntheticEvent, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import { useShoppingStore } from '@/store/useShoppingCart';
import { ProductType } from '@/infrastructure/types/Product';

interface ProductViewItemsOrderProps {
	product: ProductType;
	domainColor: string;
}

function ProductItemOrder({ product, domainColor }: ProductViewItemsOrderProps) {
	const [counter, setCounter] = useState(1);

	const { addToCart } = useShoppingStore();

	const handleAddToCart = (event: SyntheticEvent) => {
		event.preventDefault();

		addToCart({
			title: product.title,
			price: product.price,
			quantity: counter,
			id: product.id,
			image: product.image,
			merchandiseId: product.gql_id,
		});
	};
	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
	};

	const handleSubtract = (event: SyntheticEvent) => {
		event.preventDefault();
		if (counter === 1) return;
		setCounter(counter - 1);
	};

	const handleAdd = (event: SyntheticEvent) => {
		event.preventDefault();
		if (counter === product.quantity) return;
		setCounter(counter + 1);
	};

	return (
		<div className='flex items-center w-full gap-x-5'>
			<div className='flex bg-white/15 rounded-lg flex-1 justify-between px-3 py-2'>
				<button onClick={handleSubtract} className='text-2xl'>
					-
				</button>
				<p className='text-2xl'>{counter}</p>
				<button onClick={handleAdd} className='text-2xl'>
					+
				</button>
			</div>

			<form
				onSubmit={handleSubmit}
				className='flex-1 py-2 rounded-lg'
				style={{ backgroundImage: `linear-gradient(to right, ${domainColor} 40%, #202020)` }}>
				<button type='submit' className='flex justify-center items-center gap-x-6 w-full' onClick={handleAddToCart}>
					<FaCartShopping className='size-6' />
					<span className='text-xl'>Agregar al carrito</span>
				</button>
			</form>
		</div>
	);
}

export default ProductItemOrder;
