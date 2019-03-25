import React from 'react'
import styles from './Schedule.css'

const Past = props => {
  let startHour = props.reservation.start.getHours()
  let startMinute = props.reservation.start.getMinutes()
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

  let endHour = props.reservation.end.getHours()
  let endMinute = props.reservation.end.getMinutes()
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
  let endStr = '' + endHour + ':' + endMinute + ' ' + endTimeOfDay



  return (
  <div>
    <div id={styles.dropDownDivider}></div>
    {props.reservation.address}<br/> <br/>
    Date Completed: {props.reservation.end.getMonth() + '/' + props.reservation.end.getDate() + '/' + props.reservation.end.getFullYear()} <br/>
    Total: {'$' + props.reservation.totalPrice} <br/>
    <div id={styles.dropDownDivider}></div>
  </div>
)}

export default Past;