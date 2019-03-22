import React from "react";
import styles from "./SignUp.css";
import axios from 'axios';
// var createReactClass = require("create-react-class");


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      user_password:'',
      birthday:'',
      phone:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      user_password,
      birthday,
      phone
    } = this.state;
    axios
      .post('/api/signup', { firstname, lastname, email, user_password, birthday, phone })
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className={styles.signup}>
        <h1>enter your info</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            firstname:
            <input id="firstname" onChange={this.handleInput} />
          </label>
          <label>
            lastname:
            <input id="lastname" onChange={this.handleInput} />
          </label>
          <label>
            email:
            <input id="email" onChange={this.handleInput} />
          </label>
          <label>
            password:
            <input id="user_passowrd" onChange={this.handleInput} />
          </label>
          <label>
            birthday:
            <input id="birthday" onChange={this.handleInput} />
          </label>
          <label>
            phone:
            <input id="phone" onChange={this.handleInput} />
          </label>
          <button
            type="submit"
            onClick={() => {
              this.props.changePage();
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
// var Parent = React.createClass({
//   getInitialState: function () {
//     return { signup: false, login: true }
//   },
//   switch: function (word) {
//     var signup, login;
//     if (word == "signup") { signup = true; login = false; }
//     else { login = true; signup = false; }
//     return this.setState({ login: login, signup: signup })

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


// var Signup = React.createClass({


//   render: function () {


//     return (
//       <div>

//         <div id="signup">
//           <input type="text" id="first" placeholder="First Name" />
//           <input type="text" id="last" placeholder="Last Name" />
//           <input type="email" id="email" placeholder="Email" />
//           <input type="password" id="password" placeholder="Password" />
//           <input type="password" id="confirm" placeholder="Confirm Password" />
//           <button id="send">Send</button>
//         </div>
//       </div>

//     )
//   }
// })

// var Login = React.createClass({
//   render: function () {



//     return (

//       <div>

//         <div id="login">
//           <input type="email" id="email" placeholder="Email" />
//           <input type="password" id="password" placeholder="Password" />
//           <button id="send">Send</button>
//         </div>

//       </div>

//     )
//   }
// })

export default SignUp;

