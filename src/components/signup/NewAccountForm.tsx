'use client';

import React, { FormEvent, FormEventHandler, useState } from 'react';
import { handleCreateUser } from '@/actions/createUser';

function NewAccountForm() {
	const [errors, setErrors] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			const formData = new FormData(event.currentTarget);
			await handleCreateUser(formData);
		} catch (error) {
			console.log(error);
			throw new Error('Error creating user');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='max-w-2xl w-full mx-auto mt-10'>
			<h1 className='text-5xl font-semibold bg-gradient-to-bl from-green-400 to-bg-pink-500 bg-clip-text text-transparent mb-8'>
				New Account
			</h1>

			<form className='flex flex-col gap-y-5' onSubmit={handleSubmit}>
				<div className='flex gap-x-4 w-full'>
					<input
						type='text'
						name='firstName'
						placeholder='Name'
						disabled={loading}
						className='custom-input peer flex-1'
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Lastname'
						disabled={loading}
						className='custom-input peer flex-1'
					/>
				</div>
				<input
					type='text'
					name='email'
					placeholder='email'
					pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
					disabled={loading}
					className='custom-input peer'
				/>
				<input
					type='text'
					name='phone'
					placeholder='phone number'
					pattern='^[0-9]*$'
					disabled={loading}
					className='custom-input peer'
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					disabled={loading}
					className='custom-input peer'
				/>
				<input
					type='password'
					name='password_confirmation'
					placeholder='re-type password'
					disabled={loading}
					className='custom-input peer'
				/>
				<input
					type='submit'
					name='submit'
					value='Sign up'
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

export default NewAccountForm;
