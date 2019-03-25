import React from 'react'
import styles from './Schedule.css'

class Upcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // componentWillReceiveProps() {
  //   this.forceUpdate();
  // }

  render() {
    let startHour = this.props.reservation.start.getHours()
    let startMinute = this.props.reservation.start.getMinutes()
    let startTimeOfDay = 'AM'
    if (startHour === 12) {
      startTimeOfDay = 'PM'
    }
    if(startHour === 0) {
      startHour = 12
    } 
    if (startHour > 12) {
      startHour = startHour - 12
      startTimeOfDay = 'PM'
    } 

    if(startMinute === 0) {
      startMinute = '00'
    }
    let startStr = '' + startHour + ':' + startMinute + ' ' + startTimeOfDay

    let endHour = this.props.reservation.end.getHours()
    let endMinute = this.props.reservation.end.getMinutes()
    let endTimeOfDay = 'AM'
    if (endHour === 12) {
      endTimeOfDay = 'PM'
    }
    if(endHour === 0) {
      endHour = 12
    } 
    if (endHour > 12) {
      endHour = endHour - 12
      endTimeOfDay = 'PM'
    } 

    if(endMinute === 0) {
      endMinute = '00'
    }
    let endStr = '' + endHour + ':' + endMinute + ' ' + endTimeOfDay;

    let deleteId = this.props.reservation['id'];



    return (
      <div>
        <div id={styles.dropDownDivider}></div>
        {this.props.reservation.address}<br/> <br/>
        Start: {this.props.reservation.start.getMonth() + '/' + this.props.reservation.start.getDate() + '/' + this.props.reservation.start.getFullYear() + " " + startStr} <br/>
        End: {this.props.reservation.end.getMonth() + '/' + this.props.reservation.end.getDate() + '/' + this.props.reservation.end.getFullYear() + ' ' + endStr} <br /> <br/>
        Directions: {this.props.reservation.directions}<br/>
        <button type="button" onClick={() => {
          let deleteId = this.props.reservation['id']
          this.props.deleteReservation(deleteId)
          }}>Delete Reservation</button>
        <div id={styles.dropDownDivider}></div>
      </div>
    )}
  }



// const Upcoming = props => {
//   let startHour = props.reservation.start.getHours()
//   let startMinute = props.reservation.start.getMinutes()
//   let startTimeOfDay = 'AM'
//   if (startHour === 12) {
//     startTimeOfDay = 'PM'
//   }
//   if(startHour === 0) {
//     startHour = 12
//   } 
//   if (startHour > 12) {
//     startHour = startHour - 12
//     startTimeOfDay = 'PM'
//   } 

//   if(startMinute === 0) {
//     startMinute = '00'
//   }
//   let startStr = '' + startHour + ':' + startMinute + ' ' + startTimeOfDay

//   let endHour = props.reservation.end.getHours()
//   let endMinute = props.reservation.end.getMinutes()
//   let endTimeOfDay = 'AM'
//   if (endHour === 12) {
//     endTimeOfDay = 'PM'
//   }
//   if(endHour === 0) {
//     endHour = 12
//   } 
//   if (endHour > 12) {
//     endHour = endHour - 12
//     endTimeOfDay = 'PM'
//   } 

//   if(endMinute === 0) {
//     endMinute = '00'
//   }
//   let endStr = '' + endHour + ':' + endMinute + ' ' + endTimeOfDay;

//   let deleteId = props.reservation['id'];
//   console.log('id is:', deleteId)



//   return (
//   <div>
//     {/* <div id={styles.dropDownDivider}></div>
//     {props.reservation.address}<br/> <br/>
//     Date Completed: {props.reservation.end.getMonth() + '/' + props.reservation.end.getDate() + '/' + props.reservation.end.getFullYear()} <br/>
//     Total: {'$' + props.reservation.totalPrice} <br/>
//     <div id={styles.dropDownDivider}></div> */}
    
//     <div id={styles.dropDownDivider}></div>
//     {props.reservation.address}<br/> <br/>
//     Start: {props.reservation.start.getMonth() + '/' + props.reservation.start.getDate() + '/' + props.reservation.start.getFullYear() + " " + startStr} <br/>
//     End: {props.reservation.end.getMonth() + '/' + props.reservation.end.getDate() + '/' + props.reservation.end.getFullYear() + ' ' + endStr} <br /> <br/>
//     Directions: {props.reservation.directions}<br/>
//     <button type="button" onClick={() => {
//       let deleteId = props.reservation['id']
//       console.log('inside button id: ', deleteId)
//       props.deleteReservation(deleteId)
//       }}>Delete Reservation</button>
//     <div id={styles.dropDownDivider}></div>
//   </div>
// )}

export default Upcoming;