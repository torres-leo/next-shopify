'use client';

import Image from 'next/image';
// import { ProductViewItemsOrder } from './ProductViewItemsOrder';
import type { ProductType } from '@/infrastructure/types/Product';
import { SanitizeHTML } from '../shared/SanitizeHTML';
import ProductItemOrder from './ProductItemOrder';
import { useEffect, useRef, useState } from 'react';
import { FastAverageColor } from 'fast-average-color';

interface Props {
	product: ProductType;
}

export const ProductView = ({ product }: Props) => {
	const [domainColor, setDomainColor] = useState('');
	const imageRef = useRef<HTMLImageElement | null>(null);
	const fac = new FastAverageColor();

	useEffect(() => {
		const getDomainColor = async () => {
			const { hex } = await fac.getColorAsync(imageRef.current);

			setDomainColor(hex);
		};
		getDomainColor();
	}, []);

	return (
		<section className={`flex flex-col lg:flex-row justify-center pt-20 gap-x-10 w-full`}>
			<div className='relative max-w-screen-2xl w-full h-[600px] mb-10'>
				<Image
					ref={imageRef}
					className='relative object-cover product__image rounded-xl'
					loading='eager'
					src={product.image}
					fill
					quality={80}
					alt={product.title}
				/>
				<Image
					className='object-cover blur-md -z-10 rounded-xl'
					loading='lazy'
					src={product.image}
					fill
					quality={0}
					alt={`blur image`}
				/>
			</div>
			<div className='w-full'>
				<h1 className='text-5xl font-semibold text-balance mb-8 leading-tight'>{product.title}</h1>
				<p className='bg-white/20 inline-block px-3 py-2 rounded-lg mb-8 text-right '>
					<span className='text-yellow-300 text-lg'>{product.tags}</span>
				</p>

				<SanitizeHTML tag='p' className='text-lg leading-7 mb-8'>
					{product.description}
				</SanitizeHTML>

				<span className='text-4xl font-semibold mb-8 block'>$ {product.price}</span>

				<ProductItemOrder product={product} domainColor={domainColor} />
			</div>
		</section>
	);
};
