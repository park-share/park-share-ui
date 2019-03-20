import React from 'react';

const MarkerInfo = (props) => {
    let {selectedPlace} = props;
    return (
        <div>
            <h2>{selectedPlace.name}</h2>
            <div>{selectedPlace.title}</div>
            <button>Reserve Space</button>
        </div>
    )
}

export default MarkerInfo;