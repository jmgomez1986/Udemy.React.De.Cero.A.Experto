import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Prueba en componente <GifGridItem />', () => {	
	const title = 'Un titulo';
	const url = 'https://localhost/algo.jpg';
	const wrapper = shallow(
		<GifGridItem
			title={title}
			url={url}
		/>);

	test('debe de mostrar el componente correctamente ', () => {
			expect(wrapper).toMatchSnapshot();
	});

	test('debe de tener un parrafo con el titulo ', () => {
		const gifGridItemTitle = wrapper.find('p').text().trim();

		expect(gifGridItemTitle).toBe(title);
	});
	
	test('debe de tener una imagen con la url y alt igual a los props ', () => {
		const gifGridItemImg = wrapper.find('img');

		expect(gifGridItemImg.prop('src')).toBe(url);
		expect(gifGridItemImg.prop('alt')).toBe(title);

		// const gifGridItemImg = wrapper.find('img').props();

		// expect(gifGridItemImg.src).toBe(url);
		// expect(gifGridItemImg.alt).toBe(title);
	});

	test('debe tener la clase animate__fadeIn ', () => {
		const div = wrapper.find('div');
		const className = div.props().className;

		expect(className.includes('animate__fadeIn')).toBe(true);
	});	
	
});
