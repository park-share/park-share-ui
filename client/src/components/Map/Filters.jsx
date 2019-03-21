import React from 'react';
import FilteredItems from './FilteredItems.jsx';

const Filters = (props) => {
	let { removeFilter, filtered, handleZipFilter, findUserLocation, handleZipFilterSubmit, handleDateFilter, startDate, handleDateFilterSubmit, dateRange, errorMessage, filteredZips } = props;

	let currentFilters = <div><br/></div>;
	// if (errorMessage) {
	// 	currentFilters = errorMessage
	// } else 
	if (filtered) {
		currentFilters = <div><FilteredItems filteredZips={filteredZips} dateRange={dateRange} removeFilter={removeFilter} />{errorMessage}</div>
	}

	let today = new Date();
	let maxDate = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();
	today = `${yyyy}-${mm}-${dd}`;
	let nextDD = dd;
	let nextMM = '';
	if (dd >= Number('28')) {
		nextDD = '01';
		nextMM = padMonth(String(Number(mm) + 2));
	} else {
		nextMM = padMonth(String(Number(mm) + 1));
	}

	function padMonth(month) {
		if (Number(month) < 9) {
			return '0' + month
		} else {
			return month;
		}
	}

	maxDate = `${yyyy}-${nextMM}-${nextDD}`;

	return (
		<div>
			<form id='filterZipForm'>
				Find spots near zipcode: <input id='zip' onChange={(e) => handleZipFilter(e)} type='number'></input><button onClick={(e) => handleZipFilterSubmit(e)}>Filter</button> OR <button onClick={(e) => findUserLocation(e)}>Find locations near me</button><br /><br />
			</form>
			<form id='filterDateForm'>
				Start date: <input id='startDate' type='date' min={today} max={maxDate} onChange={(e) => handleDateFilter(e)} required></input>

				Start time: <input id='startTime' type='time' step='1800' onChange={(e) => handleDateFilter(e)} required></input> <br />

				End date: <input id='endDate' type='date' min={startDate} max={maxDate} onChange={(e) => handleDateFilter(e)} required></input>

				End time: <input id='endTime' type='time' step='1800' onChange={(e) => handleDateFilter(e)} required></input>

				<button onClick={(e) => handleDateFilterSubmit(e)}>Filter</button>
			</form>
			{currentFilters}
		</div>
	)

}

export default Filters;