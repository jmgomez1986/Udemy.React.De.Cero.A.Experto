import { db } from '../firebase/firebaseConfig';
import Swal  from 'sweetalert2';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
	return async(dispatch, getState) => {
		const {auth:{uid}} = getState();
		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime()
		}

		const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

		dispatch( activeNote(doc.id, newNote) );
	}
};

export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note
	}
});

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	}
}

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes
});

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;
		const noteToFirestore = {...note};

		delete noteToFirestore.id;

		if (!noteToFirestore.url) {
			delete noteToFirestore.url;
		}

		await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
	
		dispatch(refreshNote(note.id, note));

		Swal.fire('Saved', note.title, 'success');
	};
};

export const refreshNote = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		id,
		note
	}
});

export const startUploadingImg = (file) => {
	return async (distpach, getState) => {
		const {noteActive} = getState().notes;

		const fileURL = await fileUpload(file);

		console.log(fileURL);
	}
};
