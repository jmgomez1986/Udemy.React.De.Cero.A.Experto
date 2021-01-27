import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Prueba en authReducer', () => {
	test('debe de retornar el estado por defecto ', () => {
		const initState = {};
		const action = {
			type: 'yuyuk'
		}; 
		const state = authReducer(initState, action);

		expect(state).toEqual(initState);
	});

	test('debe de ejecutar la accion de login ', () => {
		const initState = {};
		const user = {
			uid: '1234',
			displayName: 'Matias'
		};

		const action = {
			type: types.login,
			payload: user
		};

		const state = authReducer(initState, action);

		expect(state).toEqual({
			uid: '1234',
			name: 'Matias'
		});
	});

	test('debe de ejecutar la accion de logout ', () => {
		const user = {
			uid: '1234',
			displayName: 'Matias'
		};

		const action = {
			type: types.logout,
			payload: user
		};

		const state = authReducer(user, action);

		expect(state).toEqual({});
	});
	
});
