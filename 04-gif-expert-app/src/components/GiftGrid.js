import React, { useEffect, useState } from 'react'

export const GiftGrid = ({category}) => {

	const [counter, setCounter] = useState(0);

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
		})

		console.log(gifs);
	}

	return (
		<div>
			<h3>{category}</h3>
			<h1>{counter}</h1>
			<button onClick={ () => setCounter(counter + 1) }></button>
		</div>
	)
}
