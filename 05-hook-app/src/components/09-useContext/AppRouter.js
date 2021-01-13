import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { NavBar } from './NavBar';

import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
	return (
		<Router>

			<div>

				<NavBar />

				<div className="container">

				<Switch>

					<Route exact path='/' component={HomeScreen} />
					<Route exact path='/login' component={LoginScreen} />
					<Route exact path='/about' component={AboutScreen} />
					{/* Ruta por defecto */}
					<Redirect to='/' /> 

				</Switch>

				</div>

			</div>

		</Router>
	);
};
