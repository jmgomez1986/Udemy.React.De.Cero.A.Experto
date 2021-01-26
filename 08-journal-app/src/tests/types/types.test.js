import { types } from '../../types/types';

describe('Prueba en los tipos', () => {
	test('debe de tener estos tipos ', () => {
		const actionTypes = {
			login:  '[Auth] Login',
			logout: '[Auth] Logout',
		
			uiSetError: '[UI] Set Error',
			uiRemoveError: '[UI] Remove Error',
		
			uiStartLoading: '[UI] Start Loading',
			uiFinishLoading: '[UI] Finish Loading',
		
			notesAddNew: '[Notes] New note',
			notesActive: '[Notes] Set active note',
			notesLoad: '[Notes] Load notes',
			notesUpdated: '[Notes] Updated note',
			notesFileUrl: '[Notes] updated image url',
			notesDelete: '[Notes] Delete note',
			notesLogoutCleaning: '[Notes] Logout Cleaning',
		};

		expect(types).toEqual(actionTypes);
		
	});
	
});
