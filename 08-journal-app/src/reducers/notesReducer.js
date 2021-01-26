import { types } from '../types/types';

const initialState = {
	notes: [],
	noteActive: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.notesActive:
			return {
				...state,
				noteActive: {
					...action.payload,
				},
			};
		case types.notesAddNew:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		case types.notesUpdated:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id ? action.payload.note : note
				),
			};
		case types.notesDelete:
			return {
				...state,
				noteActive: null,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};
		case types.notesLogoutCleaning:
			return {
				...state,
				noteActive: null,
				notes: [],
			};
		default:
			return state;
	}
};
