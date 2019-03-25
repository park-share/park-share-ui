import React from 'react';
import styles from './styles/MapListing.css';

const MapListing = (props) => {
    let {spot, handleReserve} = props;
    let address = spot.parking_address.split(',')[0];
    return (
        <div className={styles.listing}>
            <div><strong>{address}</strong></div>
            {/* <div>{spot.parking_address}</div> */}
            <div className={styles.prices}>Weekday Rate: ${spot.weekday_rate}/day</div>
            <div className={styles.prices}>Weekend Rate: ${spot.weekend_rate}/day</div>
            <button className={styles.button} onClick={(e) => handleReserve(e, spot)}>Reserve Space</button>
        </div>
    )
}

export default MapListing;