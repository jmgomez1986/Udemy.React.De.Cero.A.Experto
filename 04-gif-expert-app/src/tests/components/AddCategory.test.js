import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruevas en el componente <AddCategory />', () => {
	const setCategories = () => {}

	test('debe de mostrarse el componente <AddCategoy /> correctamente ', () => {
		const wrapper = shallow(<AddCategory setCategorias={setCategories} />);

		expect(wrapper).toMatchSnapshot();
	});
	
});
