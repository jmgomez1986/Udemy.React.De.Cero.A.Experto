import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadingImg } from '../../actions/notes';

export const NotesAppBar = () => {

	const {noteActive} = useSelector( state => state.notes );
	const dispatch = useDispatch();
	const inputArchivo = useRef(null);

	const handleSaveNote = () => {
		dispatch(startSaveNote(noteActive));
	};

	const handlePictureUpload = () => {
		inputArchivo.current.click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		
		if (file) {
			dispatch(startUploadingImg(file));
		}
	};

	return (
		<div className='notes__appbar'>
			<span>28 de agosto 2020</span>

			<input
				ref = {inputArchivo}
				type='file'
				style={{display: 'none'}}
				onChange={handleFileChange}
			/>

			<div>
				<button className='btn' onClick={handlePictureUpload}>Picture</button>

				<button className='btn' onClick={handleSaveNote}>Save</button>
			</div>
		</div>
	);
};
