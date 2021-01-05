import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Prueba en <PrimeraApp />', () => {
	test('Debe mostrar el mensaje "Hola Matias" ', () => {
		const saludo = 'Hola Matias';

		const {getByText} = render(<PrimeraApp saludo={saludo} />);

		expect(getByText(saludo)).toBeInTheDocument();

	});
	
});
