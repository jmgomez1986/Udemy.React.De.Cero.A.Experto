import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />', () => {
	const category = 'goku';
	
	test('debe de mostrarse el componente <GifGrid /> correctamente ', () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wraper = shallow(<GifGrid category={category}/>);

		expect(wraper).toMatchSnapshot();
	});

	test('debe de mostraar items cuando se cargan imagenes con useFetchGifs ', () => {
		const gifs = [{
			id: 'ABC',
			url: 'https://localhost/cualquier/cosa.jpg',
			title: 'Cualquier cosa'
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});

		const wraper = shallow(<GifGrid category={category}/>);

		expect(wraper).toMatchSnapshot();

	});	
	
});
