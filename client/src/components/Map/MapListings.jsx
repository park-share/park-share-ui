import React from 'react';
import MapListing from './MapListing';

const Listings = (props) => {
    return (
        <div >
            <h3>Spots:</h3>
            <ul>{props.filteredSpots.map((spot, i) => {
                return <MapListing spot={spot} key={i} />
            })}</ul>
        </div>
        
    )
}

export default Listings;