import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en el archivo 05-funciones.js', () => {
	test('getUser() Debe retornar un Objeto ', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('getUsuarioActivo() Debe retornar un Objeto ', () => {
		const nombre = 'Matias';
		const userTest = {
			uid: 'ABC567',
			username: nombre,
		};
		const usuarioActivo = getUsuarioActivo(nombre);

		expect(usuarioActivo).toEqual(userTest);
	})
	
});
