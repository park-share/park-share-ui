import React from 'react';
import MapListing from './MapListing';
import styles from './styles/MapListings.css';

const Listings = (props) => {
    return (
        <div className={styles.listingsContainer}>
            <h3>Spots:</h3>
            <div>{props.filteredSpots.map((spot, i) => {
                return <MapListing spot={spot} key={i} />
            })}</div>
        </div>
        
    )
}

export default Listings;