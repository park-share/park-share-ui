import React from 'react';
import FilteredItem from './FilteredItem.jsx';

const FilteredItems = (props) => {
    let {filters, removeFilter, dateRange} = props;
    let allFilters =  filters
    if (dateRange !== null) {
        allFilters = filters.concat(dateRange);
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