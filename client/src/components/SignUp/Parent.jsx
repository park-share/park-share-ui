import React from "react";
import styles from "./SignUp.css";
import SignUp from "./SignMain.jsx";
import Login from "./LogIn.jsx";


class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup:false,
      login:true
    }
    this.switch = this.switch.bind(this);
  }
  switch(word) {
    var signup,login;
    if (word == 'signup') {
        signup = true;
        login = false;
    } else {
        signup = false;
        login = true;
    }
    this.setState({
      signup: signup,
      login: login
    })
  }
  render(){

  var self = this;
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <p id={styles.signupButton} onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "yellow" : "blue"}>Sign In</p>
        <p id={styles.loginButton} onClick={self.switch.bind(null, "login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
      </div>

      {self.state.signup ? <SignUp changePage={this.props.changePage}/> : null}
      {self.state.login ? <Login changePage={this.props.changePage}/> : null}

    </div>

  )}
}
export default Parent;
