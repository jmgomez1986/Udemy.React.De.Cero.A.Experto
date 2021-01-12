import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import './memo.css';

export const CallbackHook = () => {

	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter(counter + 1)
	// };

	const increment = useCallback((num) => {
			setCounter(c => c + num);
		}, [setCounter],
		// Para no usar el counter y tener que agregarlo como dependencia,
		// el el setCounter se usa una callBack donde el parametro c, seria el state counter
	)

	useEffect( () => {
		// ???
	}, [increment] )

	return (
		<div>
			<h1>useCallback Hook</h1>
			<hr />

			<h3>
				Counter: <small>{counter}</small>
			</h3>
			<hr />

			<ShowIncrement increment={increment}/>

		</div>
	);
};
