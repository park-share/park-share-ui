import React from 'react';
import styles from './AppStyles.css';
import Parent from "./SignUp/Parent.jsx";
import Map from './Map/MapMain.jsx';
import Schedule from './Schedule/Schedule.jsx';
// import Logout from './Logout/Logout.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            showMenu: false
        }
        this.changePage = this.changePage.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    //conditionally rendering correct page
    changePage() {
        let newPage = this.state.page + 1;
        this.setState({ page: newPage })
    }

    toggleMenu() {
        let { showMenu } = this.state;
        if (showMenu) {
            this.setState({ showMenu: false })
        } else {
            this.setState({ showMenu: true })
        }
    }

    //this should render the correct page based on whether someone is  signed in (signup page vs homepage)
    render() {
        let { page, showMenu } = this.state;
        let menu = <div></div>;
        let containerStyle = { position: 'relative' };
        let mapStyle = null;
        let menuStyle = null;
        if (showMenu) {
            // menu = `this is Bryan's menu`; //put Bryan's component here
            menu = <Schedule />
            containerStyle = {
                display: 'grid',
                gridTemplateColumns: '1fr 3fr',
                position: 'relative'
            }
            mapStyle = {
                gridColumn: '2 / 3'
            }
            menuStyle = {
                gridColumn: '1 / 2'
            }
        }

        if (page === 1) {
            return (
                <div className={styles.backgrounds}>
                    <div className={styles.title}>ParkShare</div>
                    <Parent changePage={this.changePage} />
                    {/* <button onClick={this.changePage}>Go to map</button> */}
                </div>
            );
        } else if (page === 2) {
            return (
                <div>
                    <div className={styles.menuImgContainer} onClick={this.toggleMenu}>Reservations
                    {/* <img className={styles.menuImg} src='https://www.freeiconspng.com/uploads/menu-icon-8.png'></img> */}
                    </div>
                    <div className={styles.title}>ParkShare</div>
                  
                    <div style={containerStyle}>
                        <div styles={showMenu ? menuStyle : ''}>{menu}</div>
                        <div styles={showMenu ? mapStyle : ''}><Map /></div>
                    </div>
                </div>
            )
        }
    }
}

export default App;