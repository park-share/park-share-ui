import React from 'react';

const FilteredItem = (props) => {
    // console.log(props.item)
    return (
        <button>{props.item} <span id={props.item} onClick={(e) => props.removeFilter(e)}>x</span></button>
    )
}

export default FilteredItem;