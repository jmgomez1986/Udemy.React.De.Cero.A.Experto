import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';

export const DashboardRoutes = () => {
	return (
		<>
			<div className='container mt-2'>
				<Switch>
					<Route exact path='/' component={JournalScreen} />

				</Switch>
			</div>
		</>
	);
};
