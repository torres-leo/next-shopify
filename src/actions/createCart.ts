'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { CartItem } from '@/infrastructure/types/CartItem';
import { createCartMutation } from '@/graphql/mutations/createCartMutation';
import { GraphQLClientSingleton } from '@/graphql';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';

export const handleCreateCart = async (items: CartItem[]) => {
	const cookiesStore = await cookies();
	const accesToken = cookiesStore.get('accessToken')?.value as string;

	if (!accesToken) redirect('/login');

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
	const customer = await validateAccessToken();

	const variables = {
		input: {
			buyerIdentity: {
				customerAccessToken: accesToken,
				email: customer?.email,
			},
			lines: items.map((item) => ({
				merchandiseId: item.merchandiseId,
				quantity: item.quantity,
			})),
		},
	};

	const {
		cartCreate,
	}: {
		cartCreate?: {
			cart?: {
				checkoutUrl: string;
			};
		};
	} = await graphqlClient.request(createCartMutation, variables);

	return cartCreate?.cart?.checkoutUrl;
};
