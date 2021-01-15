import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {

	const wrapper = shallow( <RealExampleRef />);

	test('debe de mostrarse el componente <RealExampleRef /> correctamente ', () => {

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false); // No deberia existir el componente
		
	});
	
	test('debe de mostrar el componente <MultipleCustomHooks /> ', () => {
		
		wrapper.find('button').simulate('click');

		expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true); 
	});
	
});
