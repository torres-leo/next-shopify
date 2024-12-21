import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProductType } from '@/infrastructure/types/Product';

interface Props {
	products: Partial<ProductType>[];
}

function MainProducts({ products }: Props) {
	const renderProducts = () =>
		products.map((product) => {
			return (
				<li key={product.id} className='h-[500px] relative'>
					<div className='absolute w-full h-full z-10 bg-black/30'></div>
					{/* <Link href={`/product/${product.handle}?id=${product.id}`} className=''> */}
					<Image src={product.image!} fill alt={`Image ${product.title}`} className=' object-cover' quality={70} />
					{/* </Link> */}
					<h4 className='absolute text-2xl top-2 right-2 w-1/2 text-right z-20'>
						<span className='text-white font-semibold'>{product.title}</span>
					</h4>
				</li>
			);
		});

	return <ul className='grid grid-cols-1 md:grid-cols-2 justify-center'>{renderProducts()}</ul>;
}

export default MainProducts;
