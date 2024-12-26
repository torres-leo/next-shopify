'use server';

import { redirect } from 'next/navigation';

import { createAccessToken } from '@/utils/auth/createAccessToken';
import { createUserMutation } from '@/graphql/mutations/createUserMutation';
import { GraphQLClientSingleton } from '@/graphql';
import type { CustomerCreateInput, CustomerCreateResponse } from '@/graphql/mutations/createUserMutation';

export const handleCreateUser = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData.entries()) as Record<string, string>;
	delete formDataObject['password_confirmation'];

	const requiredFields = ['firstName', 'lastName', 'email', 'password', 'phone'];
	for (const field of requiredFields) {
		if (!formDataObject[field]) {
			throw new Error(`Missing required field: ${field}`);
		}
	}

	const variables: { input: CustomerCreateInput } = {
		input: {
			firstName: formDataObject.firstName,
			lastName: formDataObject.lastName,
			email: formDataObject.email,
			password: formDataObject.password,
			phone: '+505' + formDataObject.phone, // Format phone
		},
	};

	const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
	const { customerCreate } = await graphqlClient.request<CustomerCreateResponse>(createUserMutation, variables);

	const { customer } = customerCreate;

	if (customer?.firstName) {
		await createAccessToken(formDataObject.email, formDataObject.password);
		redirect('/store');
	}
};
