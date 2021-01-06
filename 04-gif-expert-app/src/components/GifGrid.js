import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs();
	}, []); // Al mandar la lista  de dependencias vacia, se ejecta solo en la primera renderizacion

	const getGifs = async () => {
		const url = `https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key=5Aur2asApFfGBynHWjHEVbAzIUjLAKK5`
		const response = await fetch(url);
		const {data} = await response.json();

		const gifs = data.map( (img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url
			}
		});

		setImages(gifs);
	}

	return (
		<>

			<h3>{category}</h3>

			<div className="card-grid">
				
				{
					images.map( (img) => 
						<GifGridItem
							key={img.id}
							// img={img}
							{...img}
						/>
					)
				}

			</div>
			
		</>
	)
}
