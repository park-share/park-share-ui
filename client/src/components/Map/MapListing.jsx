import React from 'react';

const MapListing = (props) => {
    let {spot} = props;
    return (
        <div>
            <div><strong>{spot.name}</strong></div>
            <div>{spot.address}</div>
            <button>Reserve Space</button>
        </div>
    )
}

export default MapListing;