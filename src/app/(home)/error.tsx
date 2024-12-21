'use client';
import React from 'react';

function error({ error, reset }: ErrorPageProps) {
	return (
		<div className='flex justify-center items-center flex-col w-full h-full mt-10 gap-y-10'>
			<h4 className='text-5xl text-white text-center'>Error</h4>

			<p>{error.message}</p>

			<button className='bg-white/15 p-2 rounded hover:bg-white/25 transition-colors' onClick={reset}>
				Reload page
			</button>
		</div>
	);
}

export default error;
