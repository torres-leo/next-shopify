'use client';

import { handleLoginUser } from '@/actions/loginUser';
import React, { FormEvent, useState } from 'react';

function LoginForm() {
	const [errors, setErrors] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(event.currentTarget);
			await handleLoginUser(formData);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	return (
		<div className='max-form-container mt-10'>
			<h1 className='text-5xl font-semibold bg-gradient-to-b from-green-400 to-slate-950 from-10% bg-clip-text text-transparent py-3 my-4 border-b border-yellow-300/50 inline-block pe-3'>
				Login
			</h1>

			<form className='flex flex-col gap-y-5' onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					placeholder='test@test.com'
					disabled={loading}
					className='custom-input login'
				/>
				<input
					type='password'
					name='password'
					placeholder='*******'
					disabled={loading}
					className='custom-input login'
				/>

				<input
					type='submit'
					name='submit'
					value='Login'
					disabled={loading}
					className='border-green-500 border py-3 rounded-md hover:bg-white/5 hover:cursor-pointer'
				/>
			</form>

			{errors.length > 0 && (
				<div>
					{errors.map((error, index) => {
						return <p key={index}>{error}</p>;
					})}
				</div>
			)}
		</div>
	);
}

export default LoginForm;
