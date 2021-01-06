import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

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
					<GiftGrid
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
