import React from 'react';
import mapConfig from './mapconfig.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapMarker from './MapMarkers.jsx';
import Filters from './Filters.jsx';
import  axios from 'axios';

class MainMapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: [
                {
                    address: '17933 Castellammare Dr, Pacific Palisades, CA 90272',
                    longitude: -118.565495,
                    latitude: 34.042962,
                    name: `Taylor's house`
                },
                {
                    address: '1900 Glendon Ave, Los Angeles, CA 90025',
                    longitude: -118.434037,
                    latitude: 34.048813,
                    name: `Taylor's other house`
                }
            ],
            filteredSpots: [],
            showingInfo: false,
            activeMarker: {},
            selectedPlace: {},
            filteredZips: [],
            filteredDates: [],
            filteredTimes: [],
            allFilters: []
        }
        this.onMarkerClick =  this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.handleZipFilter = this.handleZipFilter.bind(this);
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({filteredSpots: this.state.spots})
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfo: true
        })
    }

    onMapClick() {
        if (this.state.showingInfo) {
            this.setState({
                showingInfo: false,
                activeMarker: null
            })
        }
    }

    handleZipFilter(e) {
        console.log(e.target.value)
        let zips  =  this.state.filteredZips.concat(e.value);
        this.setState({filteredZips: zips})
    }

    handleFilterSubmit(e) {
        e.preventDefault();
        let {filteredDates, filteredTimes, filteredZips} = this.state;
        let filters = filteredZips.concat(filteredDates).concat(filteredTimes);
        this.setState({ filters });
    }

    render() {
        const style =  {
            width: '90%',
            height: '90%'
        }
        const {filteredSpots, filters} = this.state;
        // console.log(spots)
        return (
            <div>
                <Filters handleZipFilter={this.handleZipFilter} filters={filters} handleFilterSubmit={this.handleFilterSubmit}  />
                <Map 
                    google={this.props.google} 
                    style={style} 
                    initialCenter={{
                        lat: 34.039332,
                        lng: -118.266854
                      }}
                    zoom={12}
                    onClick={this.onMapClick}>
                    
                    {filteredSpots.map((spot, i) => {
                        return <Marker 
                            key={i} 
                            name={spot.name} 
                            title={spot.address} 
                            position={{lat: spot.latitude, lng: spot.longitude}} 
                            onClick={this.onMarkerClick}
                            icon={{
                                url: 'https://images.myparkingsign.com/img/lg/K/aluminum-parking-sign-k-1605.png',
                                anchor: new google.maps.Point(32,32),
                                scaledSize: new google.maps.Size(30,30)
                            }}
                        />
                    })}
                    <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfo} >
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                            {this.state.selectedPlace.title}
                        </div>
                    </InfoWindow>
                </ Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: mapConfig.API_KEY
})(MainMapContainer);