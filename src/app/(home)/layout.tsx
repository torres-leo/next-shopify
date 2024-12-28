import React from 'react';

import Hero from '@/components/Hero/Hero';

async function layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Hero />
			{children}
		</>
	);
}

export default layout;
