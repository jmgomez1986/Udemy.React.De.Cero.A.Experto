import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from'../../hooks/useFetchGifs';

describe('Pruebas en el Custom Hook useFetchGifs', () => {
	test('debe de retornar el estado inicial ', () => {
		const category = 'One Punch';
		// const {data, loading} = useFetchGifs(category);
		const {result} = renderHook	( () => useFetchGifs(category)); // Crea un componente para correr el custom hook

		const {data, loading} = result.current;

		console.log(data, loading);
		
		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	});
	
});
