import { gql } from 'graphql-request';

export interface CustomerCreateInput {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phone: string;
	[key: string]: unknown; // In case there are additional fields
}

export interface Customer {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

interface CustomerUserError {
	field: string | null;
	message: string;
	code: string | null;
}

export interface CustomerCreateResponse {
	customerCreate: {
		customer: Customer | null;
		customerUserErrors: CustomerUserError[];
	};
}

export const createUserMutation = gql`
	mutation customerCreate($input: CustomerCreateInput!) {
		customerCreate(input: $input) {
			customer {
				firstName
				lastName
				email
				phone
			}
			customerUserErrors {
				field
				message
				code
			}
		}
	}
`;
