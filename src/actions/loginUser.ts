'use server';

import { createAccessToken } from '@/utils/auth/createAccessToken';
import { redirect } from 'next/navigation';

export const handleLoginUser = async (formData: FormData) => {
	const formDataObject = Object.fromEntries(formData) as Record<string, string>;

	const accessToken = await createAccessToken(formDataObject.email, formDataObject.password);

	if (accessToken) {
		redirect('/store');
	}
};
