import React from "react";
import styles from "./SignUp.css";
import SignUp from "./SignMain.jsx";
import Login from "./LogIn.jsx";
// var createReactClass = require("create-react-class");


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
    <div>
      <div id="buttons">
        <p id="signupButton" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "yellow" : "blue"}>Sign In</p>
        <p id="loginButton" onClick={self.switch.bind(null, "login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
      </div>

      {self.state.signup ? <SignUp /> : null}
      {self.state.login ? <Login /> : null}

    </div>

  )


}
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.switch}>Sign Up</button>
  //     </div>
  //   );
  // }
  // render() {
  //   return (
  //     <div>
  //       <div id="buttons">
  //         <p
  //           id="signupButton"
  //           onClick={this.switch(null, "signup")}
  //           // onClick={self.switch(null, "signup")}
  //           // className={self.state.signup ? "yellow" : "blue"}
  //         >
  //           Sign In
  //         </p>
  //         <p
  //           id="loginButton"
  //           onClick={this.switch(null, "login")}
  //           // className={self.state.login ? "yellow" : "blue"}
  //         >
  //           {" "}
  //           Login
  //         </p>
  //       </div>

  //       {/* {self.state.signup ? <Signup /> : null} */}
  //       {/* {self.state.login ? <Login /> : null} */}
  //     </div>
  //   );
  // }
}
export default Parent;


// var Parent = React.createClass({
//   getInitialState: function () {
//     return { signup: false, login: true }
//   },
  
//   render: function () {

//     var self = this;
//     return (
//       <div>
//         <div id="buttons">
//           <p id="signupButton" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "yellow" : "blue"}>Sign In</p>
//           <p id="loginButton" onClick={self.switch.bind(null, "login")} className={self.state.login ? "yellow" : "blue"}> Login</p>
//         </div>

//         {self.state.signup ? <Signup /> : null}
//         {self.state.login ? <Login /> : null}

//       </div>

//     )


//   }
// })