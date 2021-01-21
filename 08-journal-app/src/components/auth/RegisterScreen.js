import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
	const initialForm = {
		name: 'Matias',
		email: 'jmgametal@gmail.com',
		password: 1234,
		password2: 1234,
	};

	const [formValues, handleInputChange] = useForm(initialForm);

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();

		console.log(name, email, password, password2);

		if (isFormValid()) {
			console.log('Formulario Correto!!!');
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('Name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('Email is not valid');
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log(
				'Password shold be at least 6 characters. Passwords must match'
			);
			return false;
		}

		return true;
	};

	return (
		<>
			<h3 className='auth__title'>Register</h3>

			<form onSubmit={handleRegister}>
				<div className='auth__alert-error'>Error!!!</div>

				<input
					type='text'
					placeholder='Name'
					name='name'
					className='auth__input'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>

				<input
					type='text'
					placeholder='Email'
					name='email'
					className='auth__input'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					value={password}
					onChange={handleInputChange}
				/>

				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					value={password2}
					onChange={handleInputChange}
				/>

				<button type='submit' className='btn btn-primary btn-block mb-5'>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already registered?
				</Link>
			</form>
		</>
	);
};
