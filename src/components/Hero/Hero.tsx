import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<div className='relative bg-black overflow-hidden'>
			<div className='max-w-xl mx-auto'>
				<div className='flex justify-center items-center pt-20 mb-10 gap-x-5'>
					<Image src='/images/platzi-logo.png' alt='Platzi logo' width={400} height={400} />

					<span className='text-9xl'>/</span>

					<div className='flex items-center'>
						<Image src='/images/shopify-logo.svg' alt='Shopify logo' width={90} height={90} />
						<span className='ms-6 mt-4 text-6xl font-semibold'>Shopify</span>
					</div>
				</div>
				<div className='relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
					<div className='sm:text-center lg:text-left'>
						<h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
							<span className='block xl:inline-block'>Welcome to</span>
							<span className='block text-purple-400 xl:inline-block'>Next Store</span>
						</h1>
						<p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
							Discover our amazing products and enjoy a seamless shopping experience. We&rsquo;re here to provide you
							with the best quality items and excellent customer service.
						</p>
						<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
							<div className='rounded-md shadow'>
								<Link
									href='/store'
									className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10'>
									Shop Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
