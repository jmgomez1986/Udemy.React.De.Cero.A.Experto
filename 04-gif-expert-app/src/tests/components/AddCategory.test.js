import React from 'react';
import '@testing-library/jest-dom';
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
	
});
