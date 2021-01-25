import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
				
				dispatch(startLoadingNotes(user.uid));

			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking]);

	if (checking) {
		return <h1>Wait...</h1>;
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						isAuthenticated={isLoggedIn}
						component={AuthRouter}
						path='/auth'
					/>

					<PrivateRoute
						isAuthenticated={isLoggedIn}
						component={DashboardRoutes}
						exact
						path='/'
					/>

					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
