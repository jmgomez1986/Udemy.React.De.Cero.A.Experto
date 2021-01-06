import React, { useState } from 'react';

const GifExpertApp = () => {
	// const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball'];
	const [categorias, setCategorias] = useState([ 'One Punch', 'Samurai X', 'Dragon Ball']);

	const handleAdd = () => {
		// setCategorias([...categorias, 'Nueva Categoria']);
		setCategorias(categories => [...categories, 'Nueva Categoria']);
	};

	return ( 
		<>
			<h2>GifExpertApp!!!</h2>
			<hr />

			<button onClick={handleAdd}>Add Category</button>

			<ul>
				{
					categorias.map(categoria => {
						return <li key={categoria}>{categoria}</li>
					})
				}
			</ul>
		</>
	 );
}
 
export default GifExpertApp;