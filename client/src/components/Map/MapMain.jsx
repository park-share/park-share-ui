import React from 'react';
import mapConfig from './mapconfig.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Filters from './Filters.jsx';
import axios from 'axios';

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
                },
                {
                    address: '6060 Center Dr, Los  Angeles,  CA 90045',
                    longitude: -118.391106,
                    latitude: 33.976126,
                    name: 'Hack Reactor @ Galvanize'
                },
                {
                    address:  '811 W 7th St, Los  Angeles,  CA 90017',
                    longitude:  -118.258964,
                    latitude: 34.049140,
                    name: 'WeWork Fine Arts'
                }
            ],
            filteredSpots: [],
            showingInfo: false,
            activeMarker: {},
            selectedPlace: {},
            zip: '',
            filteredZips: [],
            filteredDates: undefined,
            filteredTimes: undefined,
            allFilters: []
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.handleZipFilter = this.handleZipFilter.bind(this);
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
        this.filterByZip = this.filterByZip.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    componentDidMount() {
        this.setState({ filteredSpots: this.state.spots })
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
        this.setState({ zip: e.target.value })
    }

    filterByZip(zips) {
        let { spots } = this.state;
        let newFilteredZips = [];
        for (let zip of zips) {
            for (let spot of spots) {
                if (spot.address.includes(zip)) {
                    newFilteredZips.push(spot)
                }
            }
        }
        this.setState({filteredSpots: newFilteredZips});
    }

    handleFilterSubmit(e) {
        e.preventDefault();
        let { allFilters, zip, filteredZips } = this.state;
        if (!filteredZips.includes(zip)) {
            let allFilteredZips = filteredZips.concat(zip);
            let filters = allFilters.concat(zip);
            this.setState({
                allFilters: filters,
                filteredZips: allFilteredZips
            });
            this.filterByZip(allFilteredZips);
        }
        
        document.getElementById('filterForm').reset();
        
    }

    removeFilter(e) {
        e.preventDefault();
        let currZip = e.target.id;
        let {allFilteredZips} =  this.state;
        let newZips = [];
        for (let zip of allFilteredZips) {
            if (zip !== currZip) {
                newZips.push(zip)
            }
        }
        this.setState({allFilteredZips: newZips})
        this.filterByZip(newZips);
    }

    render() {
        const style = {
            width: '90%',
            height: '90%'
        }
        const { filteredSpots, allFilters } = this.state;
        return (
            <div>
                <Filters handleZipFilter={this.handleZipFilter} filters={allFilters} handleFilterSubmit={this.handleFilterSubmit} removeFilter={this.removeFilter} />
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: 34.046281,
                        lng: -118.382902
                    }}
                    zoom={12}
                    onClick={this.onMapClick}>

                    {filteredSpots.map((spot, i) => {
                        return <Marker
                            key={i}
                            name={spot.name}
                            title={spot.address}
                            position={{ lat: spot.latitude, lng: spot.longitude }}
                            onClick={this.onMarkerClick}
                            icon={{
                                url: 'https://images.myparkingsign.com/img/lg/K/aluminum-parking-sign-k-1605.png',
                                anchor: new google.maps.Point(32, 32),
                                scaledSize: new google.maps.Size(30, 30)
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