import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { ProductType } from '@/infrastructure/types/Product';

interface Props {
	product: ProductType;
}

function ProductCard({ product }: Props) {
	return (
		<Link href={`/product/${product.handle}?id=${product.id}`}>
			<article className=' relative'>
				<div className='mb-3 relative'>
					<div className='group absolute hover:bg-black/25 h-full w-full transition-all duration-100 ease-in-out'>
						<div className='hidden group-hover:flex justify-center items-center w-full transition-all duration-100 ease-in-out h-full '>
							<button className='bg-black/50 p-2 rounded-lg text-white text-sm font-semibold'>Go to product</button>
						</div>
					</div>
					<Image
						className='rounded-lg'
						src={product.image}
						// src={product.images[0].src}
						alt={`Product ${product.title}`}
						width={350}
						height={350}
						quality={75}
					/>
				</div>
				<div>
					<h4 className='text-white text-lg font-semibold'>{product.title}</h4>
				</div>
			</article>
		</Link>
	);
}

export default ProductCard;
