import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q: query = '' } = queryString.parse(location.search);
	const [{ searchText }, handleInputChange] = useForm({
		searchText: query,
	});

	const heroesFiltered = useMemo(() => getHeroByName(query), [query]);

	const handleSearch = (e) => {
		e.preventDefault();

		history.push(`?q=${searchText}`);
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

					{
						query === '' && <div className='alert alert-info'>Search a hero</div>
					}

					{
						query !== '' && heroesFiltered.length === 0 && (
							<div className='alert alert-danger'>
								There is no a hero with {query}
							</div>
						)
					}

					{
						heroesFiltered.map((hero) => (
							<HeroCard
								key={hero.id}
								{...hero}
							/>
						))
					}
				</div>
			</div>
		</div>
	);
};
