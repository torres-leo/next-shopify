'use client';

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import { handleCreateCart } from '@/actions/createCart';
import { useShoppingStore } from '@/store/useShoppingCart';
import ShoppingCartItem from './ShoppingCartItem';

function ShoppingCart() {
	const { cart } = useShoppingStore();
	const [openCart, setOpenCart] = useState<boolean>(false);
	const [isBuying, setIsBuying] = useState<boolean>(false);

	const handleOpenCart = () => setOpenCart(!openCart);

	const renderCartItems = () => {
		if (cart.length === 0) return <p className='text-center'>No items in cart</p>;

		return cart.map((item, index) => <ShoppingCartItem product={item} key={item.id + index} />);
	};

	const handleBuy = async () => {
		setIsBuying(true);
		try {
			const checkoutUrl = await handleCreateCart(cart);
			console.log(checkoutUrl);

			if (!checkoutUrl) throw new Error('Error creating checkout');

			window.localStorage.removeItem('cart');
			window.location.href = checkoutUrl;
		} catch (error) {
			console.log(error);
		} finally {
			setIsBuying(false);
		}
	};

	return (
		<div className='relative'>
			<button
				className='p-2 bg-transparent hover:bg-white/20 transition-colors duration-100 rounded-full'
				onClick={handleOpenCart}>
				<span className='absolute text-white font-semibold top-0 left-1 bg-red-500 text-xs px-1 rounded-full'>
					{cart.length}
				</span>
				<FaShoppingCart className='size-6' />
			</button>

			{openCart && (
				<div className='absolute max-w-[500px] min-w-[400px] w-full bg-black/90 right-0 border border-gray-600 p-3 rounded-md shadow-lg shadow-black max-h-[450px] overflow-hidden overflow-y-visible'>
					<div className='flex flex-col gap-y-2'>{renderCartItems()}</div>

					{cart.length > 0 && (
						<button
							className='mt-4 block mx-auto bg-green-500 px-5 py-1 text-white rounded-md tracking-wide'
							onClick={handleBuy}
							disabled={isBuying}>
							Buy
						</button>
					)}
				</div>
			)}
		</div>
	);
}

export default ShoppingCart;
