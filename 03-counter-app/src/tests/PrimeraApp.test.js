import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp />', () => {
	// test('Debe mostrar el mensaje "Hola Matias" ', () => {
	// 	const saludo = 'Hola Matias';

	// 	const {getByText} = render(<PrimeraApp saludo={saludo} />);

	// 	expect(getByText(saludo)).toBeInTheDocument();

	// });

	test('debe de mostrar <PrimeraApp /> correctamente ', () => {
		const saludo = 'Hola Matias';
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test('debe mostrar el subtitulo enviado por props ', () => {
		const saludo = 'Hola Matias';
		const sub = 'Subtitulo TEST';
		const wrapper = shallow(
			<PrimeraApp
				saludo={saludo}
				subtitulo={sub} />
		);
		const textoParrafo = wrapper.find('p').text();

		expect(textoParrafo).toBe(sub);
	});
});
