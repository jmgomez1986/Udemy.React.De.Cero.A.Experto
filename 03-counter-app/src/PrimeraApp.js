// import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = () => {

	const saludo = 'Hola Mundo!!!';
	const objeto = {
		nombre: 'Matias',
		edad: 34,
	};

	return (
		<>
			<h1> { saludo } </h1>
			{/* <pre> { JSON.stringify(objeto, null, 3) } </pre> */}
			<p>Mi primera App</p>
		</>
	);
};

export default PrimeraApp;
