import { getCollections } from '@/services/shopify/collections';
import Link from 'next/link';

async function layout({ children }: { children: React.ReactNode }) {
	const collections = await getCollections();

	return (
		<>
			<nav className='max-w-screen-xl mx-auto'>
				<ul className='flex flex-wrap gap-x-3 gap-y-5 pt-10'>
					{collections.map((collection) => (
						<li
							key={crypto.randomUUID()}
							className='px-4 py-2 bg-white/60 rounded-full hover:bg-white/80 hover:cursor-pointer'>
							<Link href={`/store/${collection.handle}`} className=' text-black text-lg'>
								{collection.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			{children}
		</>
	);
}

export default layout;
