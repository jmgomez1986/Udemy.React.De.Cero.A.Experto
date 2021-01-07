import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el helper getGifs Fetch', () => {
	test('debe de traer 10 elementos ', async() => {
		const category = 'goku';
		const gifs = await getGifs(category);

		expect(gifs.length).toBe(10);
	});
	
	test('debe de traer un arreglo vacio ', async() => {
		const category = '';
		const gifs = await getGifs(category);

		expect(gifs.length).toBe(0);
	});

});
