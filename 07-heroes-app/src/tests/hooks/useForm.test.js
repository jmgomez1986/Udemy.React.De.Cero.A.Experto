import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Prueba en el custom Hook useForm', () => {
	const initialForm = {
		name: 'Matias',
		email: 'jmgametal@gmail.com',
	};

	test('debe de regresar el formulario con los valores por defecto ', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleInputChange, resetForm] = result.current;

		expect(formValues).toEqual(initialForm);
		expect(typeof handleInputChange).toBe('function');
		expect(typeof resetForm).toBe('function');
	});

	test('debe de cambiar el valor del formulario (cambiar nombre) ', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;

		const event = {
			target: {
				name: 'name',
				value: 'Pepe',
			},
		};

		act(() => {
			handleInputChange(event);
		});

		const [formValues] = result.current;

		expect(formValues).toEqual({ ...initialForm, name: 'Pepe' });
	});

	test('debe de re-establecer el formulario con RESET ', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange, resetForm] = result.current;

		const event = {
			target: {
				name: 'name',
				value: 'Pepe',
			},
		};

		act(() => {
			handleInputChange(event);
			resetForm();
		});

		const [formValues] = result.current;

		expect(formValues).toEqual(initialForm);
	});
});
