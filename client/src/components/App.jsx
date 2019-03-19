import React from 'react';
import styles from './AppStyles.css';

import Map from './Map/MapMain.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state  =  {
            page: 1
        }
        this.changePage = this.changePage.bind(this);
    }

    //conditionally rendering correct page
    changePage() {
        let newPage =  this.state.page+1;
        this.setState({page: newPage})
    }

    //this should render the correct page based on whether someone is  signed in (signup page vs homepage)
    render()  {
        let { page } = this.state;
        if (page === 1) {
            return (
                <div>
                    <div className={styles.title}>ParkShare</div>
                    <button onClick={this.changePage}>Go to map</button>
                </div>
            )
        } else if (page  === 2)  {
            return (
            <div>
                <div className={styles.title}>ParkShare</div>
                <Map />
            </div>
            )
        }
    }
}

export default App;