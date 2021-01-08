import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {
	const setCategories = jest.fn();
	let wrapper = shallow(<AddCategory setCategorias={setCategories} />);

	beforeEach( () => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategorias={setCategories} />);
	});

	test('debe de mostrarse el componente <AddCategoy /> correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de cambiar la caja de texto ', () => {
		const input = wrapper.find('input');
		const value = 'Hola Mundo!!!';

		input.simulate('change', {target: {value}});
	});

	test('NO debe de postear la informacion con submit ', () => {
		const form = wrapper.find('form');
		
		form.simulate('submit', { preventDefault(){} });

		expect(setCategories).not.toHaveBeenCalled();
	});	
	
	test('debe de llamar al setCategories y limpiar la caja de texto ', () => {
		const value = 'Hola Mundo!!!';
		// 1. Simular el inputChange
		wrapper.find('input').simulate('change', {target: {value}});
		// 2. Simular el submit
		wrapper.find('form').simulate('submit', { preventDefault(){} });
		// 3.setCategories se debe haber llamado
		expect(setCategories).toHaveBeenCalled(); // Para saber si la funcion fue llamada al menos una vez
		expect(setCategories).toBeCalledTimes(1); // Para saber cuantas veces se llamo
		expect(setCategories).toBeCalledWith(
			expect.any(Function)
		); // Para saber con que (ver que se haya llamado con una funcion)
		// 4. El valor del input debe estar vacio
		expect(wrapper.find('input').prop('value')).toBe('');
	});
	
});
