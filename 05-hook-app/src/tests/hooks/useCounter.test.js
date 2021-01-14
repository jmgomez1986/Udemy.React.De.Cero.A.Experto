import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Prueba en el custom Hook useCounter', () => {
	test('debe de retornar valores por defecto ', () => {
		const { result } = renderHook(() => useCounter());

		expect(result.current.counter).toBe(10);
		expect(typeof result.current.increment).toBe('function');
		expect(typeof result.current.decrement).toBe('function');
		expect(typeof result.current.reset).toBe('function');
	});

	test('debe de tener el counter en 100 ', () => {
		const { result } = renderHook(() => useCounter(100));

		expect(result.current.counter).toBe(100);
	});

	test('debe de incrementar el counter en 1 ', () => {
		const { result } = renderHook(() => useCounter());
		const { increment } = result.current;

		act(() => {
			increment();
		});

		expect(result.current.counter).toBe(11);
	});

	test('debe de decrementar el counter en 1 ', () => {
		const { result } = renderHook(() => useCounter());
		const { decrement } = result.current;

		act(() => {
			decrement();
		});

		expect(result.current.counter).toBe(9);
	});

	test('debe de resetear el counter al valor inicial ', () => {
		const { result } = renderHook(() => useCounter());
		const { increment, reset } = result.current;

		act(() => {
			increment();
			reset();
		});

		expect(result.current.counter).toBe(10);
	});
});
