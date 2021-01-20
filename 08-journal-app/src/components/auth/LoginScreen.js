import React from 'react';

export const LoginScreen = () => {
	return (
		<>

			<h3>Login</h3>

			<form>
				<input
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
				/>

				<input
					type='password'
					placeholder='Password'
					name='password'
				/>

				<button type='submit'>
					Login
				</button>

				<hr />

				<h2>Google</h2>

			</form>

		</>
	);
};
