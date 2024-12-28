import { CartItem } from '@/infrastructure/types/CartItem';
import { useShoppingStore } from '@/store/useShoppingCart';
import Image from 'next/image';
import React from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';

interface Props {
	product: CartItem;
}

function ShoppingCartItem({ product }: Props) {
	const { removeItemFromCart } = useShoppingStore();

	return (
		<div className='flex items-center justify-between gap-x-3'>
			<Image src={product.image} width={75} height={75} alt={`Product ${product.title}`} className='rounded' />
			<p className='text-sm leading-5'>{product.title}</p>
			<span>x{product.quantity}</span>
			<button
				onClick={() => removeItemFromCart(product)}
				className='p-2 bg-red-400 rounded hover:bg-red-500'
				aria-label='trash'>
				<FaRegTrashCan className='text-lg' />
			</button>
		</div>
	);
}

export default ShoppingCartItem;
