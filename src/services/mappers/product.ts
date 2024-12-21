import { Product } from '@/infrastructure/interfaces/Product-response';
import { ProductType } from '@/infrastructure/types/Product';

export class ProductMapper {
	static productResponse(product: Product): ProductType {
		return {
			id: product.id.toString(),
			gql_id: product.variants[0].admin_graphql_api_id,
			title: product.title,
			handle: product.handle,
			description: product.body_html,
			tags: product.tags,
			image: product.images[0].src,
			price: Number(product.variants[0].price) ?? 0,
			quantity: product.variants[0].inventory_quantity,
		};
	}
}
