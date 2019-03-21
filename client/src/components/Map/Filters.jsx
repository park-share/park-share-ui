import React from 'react';
import FilteredItems from './FilteredItems.jsx';

const Filters = (props) => {
	let { filters, removeFilter, filtered, handleZipFilter, findUserLocation, handleFilterSubmit } = props;
	let currentFilters = <div></div>;

	if (filtered) {
		currentFilters = <div><FilteredItems filters={filters} removeFilter={removeFilter} /></div>
	}

	return (
		<div>
			<form id='filterForm'>
				Find spots near zipcode: <input id='zip' onChange={(e) => handleZipFilter(e)} type='number'></input> OR <button onClick={(e) => findUserLocation(e)}>Find locations near me</button><br/>
				On date: <input type='date'></input>
				In the: <select>
					<option>-</option>
					<option>Early Morning 2am-7am </option>
					<option>Morning 7am-12pm</option>
					<option>Afternoon 12pm-5pm</option>
					<option>Evening 5pm-10pm</option>
					<option>Late Evening 10pm-2am </option>
				</select>
				<button onClick={(e) => handleFilterSubmit(e)}>Filter</button>
			</form>
			{currentFilters}
		</div>
	)

}

export default Filters;