import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en PrivateRoute', () => {
	const props = {
		location: {
			pathname: '/marvel',
			search: ''
		},
	};

	Storage.prototype.setItem = jest.fn();

	test('debe de mostrar el componente si esta autenticado y guardar en localStorage ', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={true}
					component={() => <span>Listo!!!</span>} // No importa que componente mande
					{...props}			
				/>				
			</MemoryRouter>
		);

		expect(wrapper.find('span').exists()).toBe(true);
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
	});
});
