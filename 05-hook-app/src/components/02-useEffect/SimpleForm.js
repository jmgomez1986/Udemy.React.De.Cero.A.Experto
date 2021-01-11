import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
	});

	const { name, email } = formState;

	useEffect(() => {
		// console.log('Hola!!!');
	}, []);
	// Si no se pone el arreglo de dependencias, el efecto se dispara cada vez que se renderiza,
	// al mandarlo vacio, se ejecuta solo la primera vez

	useEffect(() => {
		// console.log('formState cambió');
	}, [formState]);

	useEffect(() => {
		// console.log('email cambió');
	}, [email]);

	// Con el useEffect se puede escuchar una parte especifica del componente

	const handleInputChange = ({ target }) => {
		// console.log(target.name);
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />

			<div className='form-group mb-3'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Tu nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='email@gmail.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{name === '123' && <Message />}

		</>
	);
};
