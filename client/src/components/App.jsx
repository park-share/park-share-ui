import React from 'react';
import styles from './AppStyles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state  =  {

        }
    }

    render()  {
        return (
            <div className={styles.title}>ParkShare</div>
        )
    }
}

export default App;