'use client';

import { links } from '@/config/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
	const routPath = usePathname();

	const isActive = (path: string) => (path === '/' ? routPath === path : routPath.startsWith(path));
	const renderLinks = links.map((link) => (
		<li key={crypto.randomUUID()}>
			<Link
				href={link.path}
				className={`block py-2 px-3 md:p-0 rounded 
        ${isActive(link.path) ? 'text-yellow-500 font-medium' : 'text-white'}`}>
				{link.title}
			</Link>
		</li>
	));

	return (
		<nav className='  bg-gray-900'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<div className='items-center justify-center w-full flex'>
					<ul className='flex flex-col gap-y-4 font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-900 border-gray-700'>
						{renderLinks}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
