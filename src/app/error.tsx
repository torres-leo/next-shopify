'use client';

import Image from 'next/image';

function GlobalError({ error, reset }: ErrorPageProps) {
	return (
		<main className='flex justify-center items-center flex-col h-full w-full pt-20 gap-y-10'>
			<h3 className='text-5xl font-semibold uppercase'>Error appear</h3>

			<Image src='/images/error.png' width={500} height={500} alt='Error Image' />

			<button className='bg-white/15 p-2 rounded hover:bg-white/25 transition-colors' onClick={reset}>
				Reload page
			</button>
		</main>
	);
}

export default GlobalError;
