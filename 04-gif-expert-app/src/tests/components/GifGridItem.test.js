import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba en componente <GifGridItem />', () => {
	const title = 'Un titulo';
	const url = 'https://localhost/algo.jpg';

	test('debe de mostrar el componente correctamente ', () => {
		const wrapper = shallow(
			<GifGridItem
				title={title}
				url={url}
			/>);

			expect(wrapper).toMatchSnapshot();
	});
	
});
