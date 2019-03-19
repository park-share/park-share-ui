import React from 'react';
import {Marker} from 'google-maps-react';

const MapMarker = (props) => {
    let { spot } = props;
    console.log(spot)
    return (
        <Marker name={spot.name} title={spot.address} position={{lat: spot.latitude, lng: spot.longitude}} />
    )
}

export default MapMarker;