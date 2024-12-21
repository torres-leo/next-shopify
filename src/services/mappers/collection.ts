import { SmartCollection } from '@/infrastructure/interfaces/Collection';

export class CollectionMapper {
	static collectionResponse(collection: SmartCollection) {
		return {
			id: collection.id,
			title: collection.title,
			handle: collection.handle,
		};
	}
}
