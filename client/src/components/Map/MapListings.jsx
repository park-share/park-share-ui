import React from 'react';
import MapListing from './MapListing';
import styles from './styles/MapListings.css';

const Listings = (props) => {
    let top100 = props.filteredSpots.slice(0, 100);
    return (
        <div >
            <h3>Spots:</h3>
            <div className={styles.listingsContainer}>{top100.map((spot, i) => {
                return <MapListing spot={spot} key={i} handleReserve={props.handleReserve} />
            })}</div>
            <div>Showing {top100.length} of {props.filteredSpots.length} available spots</div>
        </div>
        
    )
}

export default Listings;