'use client';

import { links } from '@/config/constants/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { LuLogOut } from 'react-icons/lu';
import { deleteAccessToken } from '@/actions/logout';

interface Props {
	user?: string;
}

const NoSSRShoppingCart = dynamic(() => import('@/components/shared/ShoppingCart/ShoppingCart'), { ssr: false });

function Navbar({ user }: Props) {
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

	const handleLogout = async () => {
		await deleteAccessToken();
	};

	return (
		<nav className='  bg-gray-900'>
			<div className='flex items-center max-w-screen-xl mx-auto'>
				<div className='flex-1 items-center justify-between  p-4'>
					<div className='items-center justify-center w-full flex'>
						<ul className='flex flex-col gap-y-4 font-medium p-4 md:p-0 mt-4 border  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-900 border-gray-700'>
							{renderLinks}
						</ul>
					</div>
				</div>

				<div className='flex items-center gap-x-5'>
					{user ? (
						<div className='flex gap-x-3 items-center'>
							<NoSSRShoppingCart />

							<Link href='/my-account' className={`${isActive('/my-account') ? 'text-yellow-400' : 'text-white'}`}>
								My account
							</Link>

							<button
								className='bg-red-500 px-3 rounded py-1 hover:bg-red-600 transition-colors duration-150 inline-flex items-center gap-x-2'
								onClick={handleLogout}>
								Logout
								<LuLogOut />
							</button>
						</div>
					) : (
						<>
							<Link href='/signup' className={`${isActive('/signup') ? 'text-yellow-400' : 'text-white'}`}>
								Sign up
							</Link>

							<Link href='/login' className={`${isActive('/login') ? 'text-yellow-400' : 'text-white'}`}>
								Login
							</Link>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
