import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Prueba en <CounterApp />', () => {
	let wrapper = shallow(<CounterApp />);

	// Esto se ejecuta con cada test
	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

	test('debe de mostrar <CounterApp /> correctamente ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de mostrar el valor por defecto de 100 ', () => {
		const valorInicial = 100;
		const wrapper = shallow(<CounterApp value={100} />);
		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe(`${valorInicial}`);
	});

	test('debe incrementar contador con el boton +1 ', () => {
		const btn1 = wrapper.find('button').at(0);

		btn1.simulate('click');

		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('11');
	});

	test('debe decrementar contador con el boton -1 ', () => {
		const btn1 = wrapper.find('button').at(2);

		btn1.simulate('click');

		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('9');
	});
});
