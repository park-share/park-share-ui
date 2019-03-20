import React from 'react';
import styles from './styles/MapListing.css';

const MapListing = (props) => {
    let {spot} = props;
    return (
        <div className={styles.listing}>
            <div><strong>{spot.name}</strong></div>
            <div>{spot.parking_address}</div>
            <button>Reserve Space</button>
        </div>
    )
}

export default MapListing;