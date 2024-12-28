'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const deleteAccessToken = async () => {
	const cookiesStore = await cookies();
	cookiesStore.delete('accessToken');
	redirect('/login');
};
