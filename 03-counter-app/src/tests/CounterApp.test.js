import React from 'react';
import { shallow } from 'enzyme'
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Prueba en <CounterApp />', () => {
	test('debe de mostrar <CounterApp /> correctamente ', () => {
		const valorInicial = 10;
		const wrapper = shallow(<CounterApp value={ valorInicial } />)

		expect(wrapper).toMatchSnapshot();

	});

	test('debe de mostrar el valor por defecto de 100 ', () => {
		const valorInicial = 100;
		const wrapper = shallow( <CounterApp value={ 100 } />);
		const textoParrafo = wrapper.find('h2').text();

		expect(textoParrafo).toBe(`${valorInicial}`);

	});
	
});
