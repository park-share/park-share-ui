import React from 'react';
import FilteredItem from './FilteredItem.jsx';

const FilteredItems = (props) => {
    let {filters} = props;
    return (
        <div>
            {filters.map((item, i) => {
                return <FilteredItem key={i} item={item} />
            })}
        </div>
    )
}

export default FilteredItems;