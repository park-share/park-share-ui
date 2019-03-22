import React from 'react';
import MapListing from './MapListing';
import styles from './styles/MapListings.css';

const Listings = (props) => {
    return (
        <div >
            <h3>Spots:</h3>
            <div className={styles.listingsContainer}>{props.filteredSpots.map((spot, i) => {
                return <MapListing spot={spot} key={i} />
            })}</div>
        </div>
        
    )
}

export default Listings;