import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css'

const initialState = [{
	id: new Date().getTime(),
	todo: 'Aprender React',
	done: false
}];

export const TodoApp = () => {


	const [todos] = useReducer(todoReducer, initialState);

	console.log(todos);

	return (
		<div>
			<h1>TodoApp</h1>
			<hr />



		</div>
	)
}
