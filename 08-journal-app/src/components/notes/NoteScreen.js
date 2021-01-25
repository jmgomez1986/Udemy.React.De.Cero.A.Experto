import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

	const {noteActive} = useSelector( state => state.notes );
	const [formValues, handleInputChange, reset] = useForm(noteActive);
	const {title, body, url} = formValues;
	const activeId = useRef(noteActive.id);

	useEffect(() => {
		if (noteActive.id !== activeId.current) {
			reset(noteActive);
			activeId.current = noteActive.id;
		}
	}, [noteActive, reset]);

	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
					name='title'
					value={title}
					onChange={handleInputChange}
				/>

				<textarea
					placeholder='What happened today'
					className='notes__textarea'
					name='body'
					value={body}
					onChange={handleInputChange}
				></textarea>

				{
					url &&
					<div className='notes__image'>
						<img
							src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
							alt='imagen'
						/>
					</div>
				}

			</div>
		</div>
	);
};
