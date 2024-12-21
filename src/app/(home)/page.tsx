import MainProducts from '@/components/home/MainProducts';
import { getMainProducts } from '@/services/shopify';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home',
};

async function page() {
	const products = await getMainProducts();

	return <MainProducts products={products} />;
}

export default page;
