import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {
	const heroesFiltered = heroes;

	const [{ searchText }, handleInputChange, reset] = useForm({
		searchText: '',
	});

	const handleSearch = (e) => {
		e.preventDefault();

		console.log(searchText);

		reset();
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Search Form</h4>
					<hr />

					<form onSubmit={handleSearch}>
						<input
							autoComplete='off'
							className='form-control'
							name='searchText'
							placeholder='Find your hero'
							type='text'
							onChange={handleInputChange}
							value={searchText}
						/>

						<button
							type='submit'
							className='mt-1 btn btn-block btn-outline-primary'
						>
							Search...
						</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
