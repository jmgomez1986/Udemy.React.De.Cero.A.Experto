import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
	const [categorias, setCategorias] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	// setCategorias([...categorias, 'Nueva Categoria']);
	// 	setCategorias(categories => [...categories, 'Nueva Categoria']);
	// };

	return (
		<>
			<h2>GifExpertApp!!!</h2>
			<AddCategory setCategorias={setCategorias} />

			<hr />

			{/* <button onClick={handleAdd}>Add Category</button> */}

			<ul>
				{
				categorias.map((category) => (
					<GifGrid
						key={category}
						category={category}
					/>
				))
				}
			</ul>
		</>
	);
};

export default GifExpertApp;
