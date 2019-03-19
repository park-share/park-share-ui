import React from 'react';
import mapConfig from './mapconfig.js';
import GoogleMaps from 'google-maps';
import  axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: ''
        }
    }

    componentDidMount() {
        GoogleMaps.load((google) =>  {
            let map = new google.maps.Map({
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
            })
            this.setState({ map })
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.map}</div>
            </div>
        )
    }
}

export default Main;