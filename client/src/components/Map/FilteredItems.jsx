import React from 'react';
import FilteredItem from './FilteredItem.jsx';

const FilteredItems = (props) => {
    let {filteredZips, removeFilter, dateRange} = props;
    let allFilters = [];
    if (dateRange !== null) {
        allFilters = allFilters.concat(dateRange);
    }
    if (filteredZips.length > 0 ) {
        allFilters = allFilters.concat(filteredZips);
    }
    // let allFilters = filters.concat(dateRange);
    return (
        <div>
            {allFilters.map((item, i) => {
                return <FilteredItem key={i} item={item} removeFilter={removeFilter} />
            })}
        </div>
    )
}

export default FilteredItems;