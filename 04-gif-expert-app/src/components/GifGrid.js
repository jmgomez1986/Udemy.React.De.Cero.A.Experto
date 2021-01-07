// import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
// import { GifGridItem } from './GifGridItem';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	getGifs(category)
	// 		.then( setImages );
	// }, [category]);

	const {data, loading} = useFetchGifs();

	console.log(data);
	console.log(loading);

	return (
		<>

			<h3>{category}</h3>

			{loading ? 'Cargando...' : 'Data cargada'}

			{/* <div className="card-grid">
				
				{
					images.map( (img) => 
						<GifGridItem
							key={img.id}
							// img={img}
							{...img}
						/>
					)
				}

			</div> */}

		</>
	)
}
