import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Prueba en el componente <MultipleCustomHooks />', () => {

	
	test('debe de mostrarse correctamente ', () => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {}
		});
		
		useFetch.mockReturnValue({
			data: null,
			loading: true,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar la informacion ', () => {
		useCounter.mockReturnValue({
			counter: 10,
			increment: () => {}
		});

		useFetch.mockReturnValue({
			data: [
				{
					author: 'Matias',
					quote: 'Hola Mundo',
				},
			],
			loading: false,
			error: null,
		});

		const wrapper = shallow(<MultipleCustomHooks />);

		expect(wrapper.find('.alert').exists()).toBe(false); // No deberia estar algo con esa clase
		expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');
		expect(wrapper.find('footer').text().trim()).toBe('Matias');
	});

});
