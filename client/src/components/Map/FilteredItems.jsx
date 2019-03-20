import React from 'react';
import FilteredItem from './FilteredItem.jsx';

const FilteredItems = (props) => {
    let {filters, removeFilter} = props;
    return (
        <div>
            {filters.map((item, i) => {
                return <FilteredItem key={i} item={item} removeFilter={removeFilter} />
            })}
        </div>
    )
}

export default FilteredItems;