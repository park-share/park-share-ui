import React from 'react'
import styles from './Schedule.css'

const Current = props => {
  let startHour = props.current.start.getHours()
  let startMinute = props.current.start.getMinutes()
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

  let endHour = props.current.end.getHours()
  let endMinute = props.current.end.getMinutes()
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
    {props.current.address}<br/> <br/>

    Start: {props.current.start.getMonth() + '/' + props.current.start.getDate() + '/' + props.current.start.getFullYear() + " " + startStr} <br/>
    End: {props.current.end.getMonth() + '/' + props.current.end.getDate() + '/' + props.current.end.getFullYear() + ' ' + endStr} <br /> <br/>

    {/* Start: {startStr} <br/>
    End: {endStr} <br /> <br/> */}
    Directions: {props.current.directions}
    <div id={styles.dropDownDivider}></div>
  </div>
)}

const ListEntry = props => (
  <div>
    <div id={styles.dropDownDivider}></div>
    {props.todo.todo}
    <button onClick={() => props.delete(props.todo.id)}>Delete</button>
    <div id={styles.dropDownDivider}></div>
  </div>
);

export default Current;