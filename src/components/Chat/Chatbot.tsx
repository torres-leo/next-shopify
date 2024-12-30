'use client';

import { useChat } from 'ai/react';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	console.log(messages);
	console.log(handleSubmit);

	return (
		<div className='flex flex-col w-full max-w-md py-24 mx-auto'>
			{messages.map((m) => (
				<div key={m.id} className='whitespace-pre-wrap'>
					{m.role === 'user' ? 'User: ' : 'AI: '}
					{m.content}
				</div>
			))}

			<form onSubmit={handleSubmit}>
				<input
					className='w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black'
					value={input}
					placeholder='Say something...'
					onChange={handleInputChange}
				/>
			</form>
		</div>
	);
}
