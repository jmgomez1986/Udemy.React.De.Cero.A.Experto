import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Horoes', () => {
	test('Debe retornar un Heroe por ID ', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		const heroeData = heroes.find( (heroe) => heroe.id === id );

		expect(heroe).toEqual(heroeData);
	});

	test('Debe retornar undefined si el Heroe no existe ', () => {
		const id = 10;
		const heroe = getHeroeById(id);

		expect(heroe).toBe(undefined);
	});

	test('Debe retornar un arreglo con los Heroes de DC ', () => {
		const owner = 'DC';
		const heroe = getHeroesByOwner(owner);
		const heroesData = heroes.filter( (heroe) => heroe.owner === owner );

		expect(heroe).toEqual(heroesData);
	});

	test('Debe retornar un arreglo con los Heroes de Marvel ', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
	});
});
