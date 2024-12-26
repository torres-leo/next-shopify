import { cookies } from 'next/headers';
import { GraphQLClientSingleton } from '@/graphql';
import { CustomerLogged, customerName } from '@/graphql/queries/customerName';

export const validateAccessToken = async () => {
	const cookiesStore = await cookies();
	const accessToken = cookiesStore.get('accessToken')?.value;

	if (!accessToken) return null;

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

	try {
		const { customer } = await graphqlClient.request<CustomerLogged>(customerName, {
			customerAccessToken: accessToken,
		});

		return customer;
	} catch (error) {
		console.log(error);
		throw new Error('Error getting token');
	}
};
