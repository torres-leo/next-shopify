import { gql } from 'graphql-request';

export interface CustomerAccessToken {
	accessToken: string;
	expiresAt: string;
}

export interface CustomerAccessTokenCreateResponse {
	customerAccessTokenCreate: {
		customerAccessToken: CustomerAccessToken | null;
		customerUserErrors: { message: string }[];
	};
}

export const customerAccessTokenCreateMutation = gql`
	mutation customerAccessTokenCreate($email: String!, $password: String!) {
		customerAccessTokenCreate(input: { email: $email, password: $password }) {
			customerAccessToken {
				accessToken
				expiresAt
			}
			customerUserErrors {
				message
			}
		}
	}
`;
