// import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( {saludo, subtitulo} ) => {

	// const saludo = 'Hola Mundo!!!';
	// const objeto = {
	// 	nombre: 'Matias',
	// 	edad: 34,
	// };

	return (
		<>
			{/* <h1> { saludo } </h1> */}
			<h1>{ saludo }</h1>
			{/* <pre> { JSON.stringify(objeto, null, 3) } </pre> */}
			<p>{ subtitulo }</p>
		</>
	);
};

// Con los propTypes obligamos a que cuando se use el componente se envie la propiedad
PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
	subtitulo: 'Esto es un subtítulo!!!'
}

export default PrimeraApp;
