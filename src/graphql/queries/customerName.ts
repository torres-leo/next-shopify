import { gql } from 'graphql-request';

export interface CustomerLogged {
	customer: CustomerData;
}

interface CustomerData {
	firstName: string;
	email: string;
}

export const customerName = gql`
	query getCustomerName($customerAccessToken: String!) {
		customer(customerAccessToken: $customerAccessToken) {
			firstName
			email
		}
	}
`;
