import React from 'react';

import Hero from '@/components/Hero/Hero';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';

async function layout({ children }: { children: React.ReactNode }) {
	const customer = await validateAccessToken();

	return (
		<>
			{customer?.firstName && (
				<div className='bg-gradient-to-r from-yellow-300 from-20% to-pink-500 inline-block pb-1 my-10'>
					<h4 className='text-5xl font-semibold inline-block bg-zinc-950 pb-2'>
						Welcome,{' '}
						<span className='bg-gradient-to-br from-yellow-500 to-pink-500 bg-clip-text text-transparent'>
							{customer.firstName}.
						</span>
					</h4>
				</div>
			)}

			<Hero />
			{children}
		</>
	);
}

export default layout;
