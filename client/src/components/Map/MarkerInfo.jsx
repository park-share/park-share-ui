import React from 'react';

const MarkerInfo = (props) => {
    let {selectedPlace} = props;
    console.log(selectedPlace.spot)
    return (
        <div>
            <h2>{selectedPlace.name}</h2>
            <div>{selectedPlace.title}</div>
            {/* <div>Weekday Rate: ${selectedPlace.spot.weekday_rate}/day</div>
            <div>Weekend Rate: ${selectedPlace.spot.weekend_rate}/day</div> */}
            <button>Reserve Space</button>
        </div>
    )
}

export default MarkerInfo;