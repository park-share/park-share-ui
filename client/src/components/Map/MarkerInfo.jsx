import React from 'react';

const MarkerInfo = (props) => {
    let {selectedPlace} = props;
    console.log(selectedPlace.spot)
    return (
        <div>
            <h2>{selectedPlace.name}</h2>
            <div>{selectedPlace.title}</div>
            {/* <div>Weekday Rate: {selectedPlace.spot.weekday_rate}</div>
            <div>Weekend Rate: {selectedPlace.spot.weekend_rate}</div> */}
            <button>Reserve Space</button>
        </div>
    )
}

export default MarkerInfo;