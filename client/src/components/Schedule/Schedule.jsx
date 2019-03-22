import React from 'react';
import styles from './Schedule.css'

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }
  
  render() {
    return (
      <div>
        <div>
          <div id={styles.current}>Current</div>
          20345 Roslin Ave, Torrance, CA 90503 <br/>
          Start: 10:00 AM <br/>
          End: 7:00 PM <br/>
          <div id={styles.current}>Scheduled</div><br/>
          <div id={styles.current}>Past</div>
        </div>
        
      </div>
    )
  }
}

export default Schedule