import React from 'react';
import {Marker} from 'google-maps-react';

const MapMarker = (props) => {
    let { spot } = props;
    return (
        <Marker name={spot.name} title={spot.parking_address} position={{lat: spot.latitudes, lng: spot.longitudes}} />
    )
}

export default MapMarker;