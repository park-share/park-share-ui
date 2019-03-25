import React from 'react';
import styles from './styles/FilteredItem.css'

const FilteredItem = (props) => {
    return (
        <button className={styles.button}>{props.item} <span id={props.item} onClick={(e) => props.removeFilter(e)}>x</span></button>
    )
}

export default FilteredItem;