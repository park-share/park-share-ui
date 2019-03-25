import React from 'react';
import styles from './Schedule.css'
import Axios from 'axios';
import Current from './Current.jsx'
import Upcoming from './Upcoming.jsx'
import Past from './Past.jsx'

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display : {
        current: "block",
        upcoming: "none",
        past: "none"
      },
      upcoming: [],
      render: false
    }

    this.deleteReservation = this.deleteReservation.bind(this)
  }

  deleteReservation(id) {
    console.log('deleting id: ', id)

    Axios
      .delete(`/api/schedule/delete`, {
        data : {
          id
        }
      })
      .then(() => {
        Axios
        .get('/api/schedule/list/1')
        .then(results => {
          let current;
          let past = [];
          let upcoming = [];
          let currentDate = new Date();
          for(let i = 0; i < results.data.length; i++){
            let reservation = {}
            reservation.id = results.data[i]['id'] 
            reservation.address = results.data[i]['parking_address']
            reservation.directions = results.data[i]['directions']
            reservation.start = new Date(results.data[i]['start_res'])
            reservation.end = new Date(results.data[i]['end_res'])


            let timeStr = results.data[i]['start_res'][0] + results.data[i]['start_res'][1] + results.data[i]['start_res'][2]
            reservation.rate = 0;
            if(timeStr === 'Sat' || timeStr === 'Sun') {
              reservation.rate = results.data[i]['weekend_rate']
            } else {
              reservation.rate = results.data[i]['weekday_rate']
            }
            reservation.totalPrice = (reservation.end - reservation.start)/(1000 * 60 * 60) * reservation.rate
            if(reservation.end < currentDate) {
              past.push(reservation);
            } else if (reservation.start < currentDate && reservation.end > currentDate) {
              current = reservation
            } else {
              upcoming.push(reservation)
            }

          }
          this.setState({past, current, upcoming, render: true})
        })
      })
  }

  componentDidMount() {
    Axios
      .get('/api/schedule/list/1')
      .then(results => {
        let upcoming = [];
        let past = [];
        let current;
        let currentDate = new Date();
        for(let i = 0; i < results.data.length; i++){
          let reservation = {}
          reservation.id = results.data[i]['id'] 
          reservation.address = results.data[i]['parking_address']
          reservation.directions = results.data[i]['directions']
          reservation.start = new Date(results.data[i]['start_res'])
          reservation.end = new Date(results.data[i]['end_res'])


          let timeStr = results.data[i]['start_res'][0] + results.data[i]['start_res'][1] + results.data[i]['start_res'][2]
          reservation.rate = 0;
          if(timeStr === 'Sat' || timeStr === 'Sun') {
            reservation.rate = results.data[i]['weekend_rate']
          } else {
            reservation.rate = results.data[i]['weekday_rate']
          }
          reservation.totalPrice = (reservation.end - reservation.start)/(1000 * 60 * 60) * reservation.rate
          if(reservation.end < currentDate) {
            past.push(reservation);
          } else if (reservation.start < currentDate && reservation.end > currentDate) {
            current = reservation
          } else {
            upcoming.push(reservation)
          }

        }
        this.setState({past, current, upcoming, render: true})
      })
  }
  

  onScheduleButtonClick(displayStr) {
    let display = this.state.display
    let obj = {}
    for(let key in display) {
      if(key === displayStr) {
        obj[displayStr] = 'block'
      } else {
        obj[key] = 'none'
      }
    }
    this.setState({display: obj})
  }

  render() {
    if(this.state.render){
      return (
        <div>
          <div>
            <button type="button" id={styles.current} onClick={() => this.onScheduleButtonClick('current')}>Current</button> <br/>
            <div style={{display:this.state.display.current}}>
              <Current current={this.state.current} />
            </div>
            <button type="button" id={styles.current} onClick={() => this.onScheduleButtonClick('upcoming')}>Upcoming</button><br/>
            <div style={{display:this.state.display.upcoming}}>
              {this.state.upcoming.map(reservation => (
                <Upcoming reservation={reservation} deleteReservation={this.deleteReservation}/>
              ))}
            </div>
            <button type="button" id={styles.current} onClick={() => this.onScheduleButtonClick('past')}>Past</button><br/>
            <div style={{display:this.state.display.past}}>
              {this.state.past.map(reservation => (
                <Past reservation={reservation}/>
              ))}
            </div>
          </div>
          
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Schedule