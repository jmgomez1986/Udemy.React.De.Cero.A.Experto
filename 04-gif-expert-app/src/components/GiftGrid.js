import React from 'react'

export const GiftGrid = ({category}) => {

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

	getGifs();

	return (
		<div>
			<h3>{category}</h3>
		</div>
	)
}
