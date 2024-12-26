import { ProductView } from '@/components/Product/ProductView';
import { getProducts } from '@/services/shopify';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

interface Props {
	searchParams: { id: string };
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
	const { id } = searchParams;
	const products = await getProducts(id);
	const product = products[0];

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: [
				{
					url: product.image,
					alt: product.title,
				},
			],
		},
	};
}

async function ProductPage({ searchParams }: Props) {
	const { id } = searchParams;
	const products = await getProducts(id);
	const product = products[0];

	if (!id) redirect('/store');

	return <ProductView product={product} />;
}

export default ProductPage;
