import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const TodoItem = ({ todo, index, handleDelete, handleToggle }) => {
	return (
		<li className='list-group-item'>
			<p
				className={`text-center ${todo.done && 'complete'}`}
				onClick={() => handleToggle(todo.id)}
			>
				{index + 1}. {todo.desc}
			</p>
			<button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
				Borrar
			</button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired,
};
