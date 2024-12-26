import {
	customerAccessTokenCreateMutation,
	CustomerAccessTokenCreateResponse,
} from '@/actions/customerAccessTokenCreate';
import { GraphQLClientSingleton } from '@/graphql';
import { cookies } from 'next/headers';

export const createAccessToken = async (email: string, password: string): Promise<string | boolean> => {
	const cookiesStores = await cookies();
	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

	try {
		const response: CustomerAccessTokenCreateResponse = await graphqlClient.request<CustomerAccessTokenCreateResponse>(
			customerAccessTokenCreateMutation,
			{
				email: email,
				password: password,
			}
		);

		const { customerAccessToken } = response.customerAccessTokenCreate;

		if (customerAccessToken) {
			const { accessToken, expiresAt } = customerAccessToken;

			if (accessToken) {
				cookiesStores.set('accessToken', accessToken, {
					path: '/',
					expires: new Date(expiresAt),
					httpOnly: true,
					sameSite: 'strict',
				});
				return accessToken;
			}
		}

		return false;
	} catch (error) {
		console.log(error);
		throw new Error('Error creating token');
	}
};
