import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from'../../hooks/useFetchGifs';

describe('Pruebas en el Custom Hook useFetchGifs', () => {
	test('debe de retornar el estado inicial ', async() => {
		const category = 'One Punch';
		// const {data, loading} = useFetchGifs(category);
		const {result, waitForNextUpdate} = renderHook	( () => useFetchGifs(category)); // Crea un componente para correr el custom hook
		
		const {data, loading} = result.current;

		await waitForNextUpdate();
		
		expect(data).toEqual([]);
		expect(loading).toBeTruthy();
	});

	test('debe de retornar un arreglo imagenes y el loading debe ponerse en false ', async() => {
		const category = 'One Punch';
		const {result, waitForNextUpdate} = renderHook	( () => useFetchGifs(category)); // Crea un componente para correr el custom hook

		await waitForNextUpdate();

		const {data, loading} = result.current;
		
		expect(data.length).toBe(10);
		expect(loading).toBe(false);
	});	
	
});
