import React from 'react';
import mapConfig from './mapconfig.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Filters from './Filters.jsx';
import MarkerInfo from './MarkerInfo.jsx';
import Listings from './MapListings.jsx';
import styles from './styles/MapContainer.css'
import axios from 'axios';

class MainMapContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spots: [
				{
					id: 1,
					owner_id: 1,
					parking_address: '17933 Castellammare Dr, Pacific Palisades, CA 90272',
					longitudes: -118.565495,
					latitudes: 34.042962,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Thu Mar 21 2019 04:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 21 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 22 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 24 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 02:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Mar 26 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 09:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 05 2019 18:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 06 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 14:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 16 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 20 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: `Taylor's house`
				},
				{
					id: 2,
					owner_id: 1,
					parking_address: '563 Via de la Paz, Pacific Palisades, CA 90272',
					longitudes: -118.529235,
					latitudes: 34.039780,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 23 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Mar 27 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Mar 28 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Mar 29 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 04:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Mar 29 2019 16:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 01 2019 08:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 07 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 02:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 10 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 02:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 13:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 17 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 18 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: 'Another house'
				},
				{
					id: 3,
					owner_id: 2,
					parking_address: '1900 Glendon Ave, Los Angeles, CA 90025',
					longitudes: -118.434037,
					latitudes: 34.048813,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Thu Mar 21 2019 05:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 21 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 21:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 02 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 03 2019 09:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 07 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 11:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 08 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 11 2019 22:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 12 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 16 2019 21:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 18 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: `Taylor's apartment`
				},
				{
					id: 4,
					owner_id: 10,
					parking_address: '6060 Center Dr, Los  Angeles,  CA 90045',
					longitudes: -118.391106,
					latitudes: 33.976126,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Tue Mar 26 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 00:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Mar 28 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 08:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Mar 31 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Mar 31 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Thu Apr 04 2019 10:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 05 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 01:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 10 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 16 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 09:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 13:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: 'Hack Reactor @ Galvanize'
				},
				{
					id: 5,
					owner_id: 3,
					parking_address: '811 W 7th St, Los  Angeles,  CA 90017',
					longitudes: -118.258964,
					latitudes: 34.049140,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 23 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 23 2019 18:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Mar 25 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Mar 25 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Mar 26 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Mar 29 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 30 2019 18:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 03:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 03:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 05 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 06 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 11:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 08 2019 13:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 13 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 10:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 15 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 18 2019 15:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 00:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Fri Apr 19 2019 03:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 23:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: 'WeWork Fine Arts'
				},
				{
					id: 6,
					owner_id: 9,
					parking_address: '9149 S Sepulveda Blvd, Los Angeles, CA 90045',
					longitudes: -118.396787,
					latitudes: 33.953685,
					directions: 'directions are here',
					weekday_rate: 20,
					weekend_rate: 40,
					notAvail: [{ "start": "Fri Mar 22 2019 06:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Mar 25 2019 15:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 07:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Mar 27 2019 12:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Mar 27 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Mar 30 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Mar 30 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 01 2019 04:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 02 2019 01:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 07 2019 20:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 05:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Tue Apr 09 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Tue Apr 09 2019 20:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Wed Apr 10 2019 11:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Thu Apr 11 2019 11:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 12 2019 07:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 13 2019 10:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sun Apr 14 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sun Apr 14 2019 16:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 06:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Mon Apr 15 2019 17:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Mon Apr 15 2019 17:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Wed Apr 17 2019 14:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Fri Apr 19 2019 05:00:00 GMT-0700 (Pacific Daylight Time)" }, { "start": "Sat Apr 20 2019 12:00:00 GMT-0700 (Pacific Daylight Time)", "end": "Sat Apr 20 2019 22:00:00 GMT-0700 (Pacific Daylight Time)" }],
					name: 'In n Out'
				}
			],
			reservations: null,
			filteredSpots: [],
			filtered: false,
			showingInfo: false,
			activeMarker: {},
			selectedPlace: {},
			zip: null,
			startDate: null,
			startTime: null,
			endDate: null,
			endTime: null,
			filteredZips: [],
			// filteredDates: undefined,
			// filteredTimes: undefined,
			// allFilters: [],
			points: [],
			bounds: null,
			dateRange: null,
			errorMessage: null
		}
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
		this.handleZipFilter = this.handleZipFilter.bind(this);
		this.handleDateFilter = this.handleDateFilter.bind(this);
		// this.filterDaysOfWeek =  this.filterDaysOfWeek.bind(this);
		this.handleZipFilterSubmit = this.handleZipFilterSubmit.bind(this);
		this.handleDateFilterSubmit = this.handleDateFilterSubmit.bind(this);
		this.filterByZip = this.filterByZip.bind(this);
		this.removeFilter = this.removeFilter.bind(this);
		this.adjustBounds = this.adjustBounds.bind(this);
		this.findUserLocation = this.findUserLocation.bind(this);
		this.showPosition = this.showPosition.bind(this);
		this.filterByDateRange = this.filterByDateRange.bind(this);
	}

	componentDidMount() {
		//need to get reservations and change available time slots to account for taken times
		let { spots } = this.state;
		this.setState({
			filteredSpots: spots
		}, () => {
			this.adjustBounds(this.state.filteredSpots);
		})
	}

	onMarkerClick(props, marker) {
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

	handleDateFilter(e) {
		// console.log('date', e.target.value)
		this.setState({ [e.target.id]: e.target.value })
	}

	// filterDaysOfWeek() {
	// 	let start = this.state.startDate;
	// 	let end = this.state.endDate;
	// 	let weekday = new Array(7);
	// 	weekday[0] = "sunday";
	// 	weekday[1] = "monday";
	// 	weekday[2] = "tuesday";
	// 	weekday[3] = "wednesday";
	// 	weekday[4] = "thursday";
	// 	weekday[5] = "friday";
	// 	weekday[6] = "saturday";
	// 	let startIndex = start.getDay();
	// 	let endIndex =  end.getDay();

	// 	let daysToFilter =  [];

	// 	if (startIndex <= endIndex) {
	// 		for (let i = startIndex; i <= endIndex; i++) {
	// 			daysToFilter.push(weekday[i])
	// 		}
	// 	} else if (startIndex > endIndex) {
	// 		for (let i = startIndex; i < 7; i++) {
	// 			daysToFilter.push(weekday[i])
	// 		}
	// 		for (let j = 0; j <= endIndex;  j++) {
	// 			daysToFilter.push(weekday[i])
	// 		}
	// 	} 

	// 	let filteredDates = [];
	// 	let {spots} =  this.state;
	// 	for (let day of daysToFilter)  {
	// 		for (let spot of spots) {
	// 			if (spot[day] !== null) {
	// 				filteredDates.push(spot);
	// 			}
	// 		}
	// 	}
	// 	this.setState({ filteredDates })
	// }

	// handleStartTimeFilter(e) {
	// 	if (e.t)
	// 	this.setState({startTime: e.target.value})
	// }

	// handleEndTimeFilter(e) {
	// 	let time = e.target.value;
	// 	if 
	// }

	filterByZip(zips) {
		let { spots, startDate, startTime, endDate, endTime } = this.state;
		let newFilteredZips = [];
		for (let zip of zips) {
			let found = false;
			for (let spot of spots) {
				if (spot.parking_address.includes(zip)) {
					newFilteredZips.push(spot);
					found = true;
				}	
			}
			if (!found) {
				let newFilters  = this.state.allFilteredZips
				this.setState({errorMessage: `No spots available in ${zip}`})
			}
		}
		this.setState({ filteredSpots: newFilteredZips }, () => {
			if (startDate) {
				this.filterByDateRange(startDate, startTime, endDate, endTime)
			} else {
				this.adjustBounds(this.state.filteredSpots)
			}
		});
	}

	adjustBounds(spots) {
		let bounds = new google.maps.LatLngBounds();
		let allSpots = [];
		for (let spot of spots) {
			allSpots.push({ lat: spot.latitudes, lng: spot.longitudes })
		}
		for (let point of allSpots) {
			bounds.extend(point);
		}
		this.setState({ bounds });
	}

	findUserLocation(e) {
		e.preventDefault();
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.showPosition);
		} else {
			console.log('Geolocation not supported by this browser')
		}
	}

	showPosition(p) {
		let latlng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
		let geocoder = new google.maps.Geocoder();

		geocoder.geocode({ 'latLng': latlng }, (results, status) => {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0]) {
					for (let j = 0; j < results[0].address_components.length; j++) {
						if (results[0].address_components[j].types[0] === 'postal_code') {
							console.log("Zip Code: " + results[0].address_components[j].short_name);
							let zip = results[0].address_components[j].short_name;
							this.setState({
								allFilters: [zip],
								filteredZips: [zip],
								filtered: true
							}, () => this.filterByZip([zip]));
						}
					}
				}
			} else {
				console.log("Geocoder failed due to: " + status);
			}
		});
	}

	handleZipFilterSubmit(e) {
		e.preventDefault();
		let { allFilters, zip, filteredZips } = this.state;
		if (zip && !filteredZips.includes(zip)) {
			//add greater filters  in other file  instead of here
			let allFilteredZips = filteredZips.concat(zip);
			// let filters = allFilters.concat(zip);
			this.setState({
				// allFilters: filters,
				filteredZips: allFilteredZips,
				filtered: true,
				errorMessage: null
			}, () => {
				this.filterByZip(allFilteredZips)
			});
		}
		document.getElementById('filterZipForm').reset();
	}

	handleDateFilterSubmit(e) {
		e.preventDefault();
		let { startDate, startTime, endDate, endTime } = this.state;
		this.setState({
			dateRange: `${startDate} ${startTime} to ${endDate} ${endTime}`,
			filtered: true
		}, () => this.filterByDateRange(startDate, startTime, endDate, endTime))

		document.getElementById('filterDateForm').reset();
	}

	filterByDateRange(startDate, startTime, endDate, endTime) {
		let newFilteredSpots = [];
		let spots = this.state.filteredSpots;
		startTime = 'T' + startTime + ':00';
		endTime = 'T' + endTime + ':00';
		let startRange = new Date(startDate + startTime);
		let endRange = new Date(endDate + endTime);
		for (let spot of spots) {
			let notInRange = true;
			for (let time of spot.notAvail) {
				let start = new Date(time.start);
				let end = new Date(time.end);
				if ((start > startRange && start < endRange) || (end > startRange && end < endRange)) {
					notInRange = false;
					break;
				}
			}
			if (notInRange) {
				newFilteredSpots.push(spot)
			}
		}
		if (newFilteredSpots.length > 0) {
			this.setState({filteredSpots: newFilteredSpots}, () => {
				this.adjustBounds(this.state.filteredSpots)
			})
		} else {
			this.setState({errorMessage: 'No items matched your search', filteredSpots: this.state.spots});
		}
	}

	removeFilter(e) {
		e.preventDefault();
		let { filteredZips } = this.state;

		if (e.target.id.length > 5) {
			this.setState({ dateRange: null, startDate: null, startTime: null, endDate: null, endTime: null  })
		} else {
			let currZip = e.target.id;
			let newZips = [];
			for (let zip of filteredZips) {
				if (zip !== currZip) {
					newZips.push(zip)
				}
			}
			if (newZips.length > 0) {
				this.setState({ filteredZips: newZips })
				this.filterByZip(newZips);
			} else {
				if (!this.state.startDate) {
					this.setState({filtered:  false})
				}
				this.setState({
					filteredZips: [],
					// allFilters: [],
					filteredSpots: this.state.spots,
				}, () => this.adjustBounds(this.state.filteredSpots))
			}
		}
	}

	render() {
		const mapStyle = {
			width: '65%',
			height: '80%',
			position: 'relative',
			padding: '10px'
		}
		const { filteredSpots, bounds, filteredZips, activeMarker, selectedPlace, showingInfo, startDate, dateRange, errorMessage, filtered } = this.state;

		return (
			<div className={styles.wrapper}>
				<div className={styles.bigMapContainer}>
					<div className={styles.filterContainer}>
						<Filters handleZipFilter={this.handleZipFilter} filtered={filtered} handleZipFilterSubmit={this.handleZipFilterSubmit} removeFilter={this.removeFilter} filteredZips={filteredZips} findUserLocation={this.findUserLocation} handleDateFilter={this.handleDateFilter} startDate={startDate} handleDateFilterSubmit={this.handleDateFilterSubmit} dateRange={dateRange} errorMessage={errorMessage} />
					</div>

					<div className={styles.mapContainer}>
						<Map
							google={this.props.google}
							style={mapStyle}
							initialCenter={{
								lat: 34.046281,
								lng: -118.382902
							}}
							bounds={bounds}
							onClick={this.onMapClick}>

							{filteredSpots.map((spot, i) => {
								return <Marker
									key={i}
									name={spot.name}
									title={spot.parking_address}
									position={{ lat: spot.latitudes, lng: spot.longitudes }}
									onClick={this.onMarkerClick}
									icon={{
										url: 'https://cdn4.iconfinder.com/data/icons/car-service-1/512/park-512.png',
										anchor: new google.maps.Point(32, 32),
										scaledSize: new google.maps.Size(40, 40)
									}}
								/>
							})}

							<InfoWindow marker={activeMarker} visible={showingInfo} >
								<MarkerInfo selectedPlace={selectedPlace} />
							</InfoWindow>

						</ Map>
					</div>
				</div>

				<div className={styles.listContainer}>
					<Listings filteredSpots={filteredSpots} />
				</div>

			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: mapConfig.API_KEY
})(MainMapContainer);