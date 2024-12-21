import { Product } from './Product-response';

export interface CollectionResponse {
	smart_collections: SmartCollection[];
}

export interface CollectionCustom {
	id: number;
	handle: string;
	title: string;
}

export interface SmartCollection {
	id: number;
	handle: string;
	title: string;
	updated_at: Date;
	body_html: string;
	published_at: Date;
	sort_order: string;
	template_suffix: string;
	disjunctive: boolean;
	rules: Rule[];
	published_scope: string;
	admin_graphql_api_id: string;
}

export interface Rule {
	column: string;
	relation: string;
	condition: string;
}

export interface CollectionProducts {
	products: Partial<Product[]>;
}
