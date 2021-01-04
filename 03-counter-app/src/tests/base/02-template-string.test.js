import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', () => {

	test('getSaludo() debe retornar Hola Matias Gomez!', () => {
		const nombre = 'Matias';
		const apellido = 'Gomez';

		const nombreCompleto = `${nombre} ${apellido}`;

		const saludo = getSaludo(nombreCompleto);

		expect(saludo).toBe('Hola ' + nombreCompleto + '!');
	});

	// getSaludo debe retornar 'Hola Pepe!' si no hay argumentos
	test('getSaludo() debe retornar Hola Pepe! si no hay argumentos', () => {
		const saludo2 = getSaludo();

		expect(saludo2).toBe('Hola Pepe!');
	});

});
