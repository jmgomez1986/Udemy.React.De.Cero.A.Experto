import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleteNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

	const {noteActive} = useSelector( state => state.notes );
	const dispatch = useDispatch();
	const [formValues, handleInputChange, reset] = useForm(noteActive);
	const {title, body, id} = formValues;
	const activeId = useRef(noteActive.id);
	const activeURL = useRef(noteActive.URL);
	const handleDeleteNote = () => {
		dispatch(startDeleteNote(id));
	};

	useEffect(() => {
		if (noteActive.id !== activeId.current) {
			reset(noteActive);
			activeId.current = noteActive.id;
		}
	}, [noteActive, reset]);

	useEffect(() => {
		if (noteActive.url !== activeURL.current) {
			reset(noteActive);
			activeURL.current = noteActive.url;
		}
	}, [noteActive, reset]);

	useEffect(() => {
		dispatch(activeNote(formValues.id, {...formValues}));
	}, [formValues, dispatch]);

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
					noteActive.url &&
					<div className='notes__image'>
						<img
							src={noteActive.url}
							alt='imagen'
						/>
					</div>
				}

			</div>

				<button className='btn btn-danger' onClick={handleDeleteNote}>
					Delete Note
				</button>

		</div>
	);
};
