import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruevas en el componente <AddCategory />', () => {
	const setCategories = () => {}
	const wrapper = shallow(<AddCategory setCategorias={setCategories} />);

	test('debe de mostrarse el componente <AddCategoy /> correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de cambiar la caja de texto ', () => {
		const input = wrapper.find('input');
		const value = 'Hola Mundo!!!';

		input.simulate('change', {target: {value}});
	});	
	
});
