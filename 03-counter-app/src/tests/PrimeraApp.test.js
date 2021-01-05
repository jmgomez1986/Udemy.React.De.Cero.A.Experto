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
		const wrapper = shallow( <PrimeraApp saludo={saludo} /> );

		expect(wrapper).toMatchSnapshot();
	});	
	
});
