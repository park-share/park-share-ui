import React from 'react';
import styles from './SignUp.css'
// import { userService } from '../_services';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user_password: ''
 
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
      email,
      user_password
    } = this.state;
    axios
      .post('/api/login', { email, user_password })
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className={styles.login}>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            email:
            <input id="email" onChange={this.handleInput} />
          </label>
          <label>
            password:
            <input id="user_passowrd" onChange={this.handleInput} />
          </label>
          <button type="submit" onClick={() => { this.props.changePage() }}>Log in</button>
        </form>
      </div>
    );
  }

}

export default LoginPage;

// import React from "react";
// import styles from "./SignUp.css";
// import axios from "axios";


// class LogIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: '',
//       lastname: '',
//       email: '',
//       user_password: '',
//       birthday: '',
//       phone: ''
//     }
//     this.handleInput = this.handleInput.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleInput(e) {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const {
//       firstname,
//       lastname,
//       email,
//       user_password,
//       birthday,
//       phone
//     } = this.state;
//     axios
//       .post('/api/signup', { firstname, lastname, email, user_password, birthday, phone })
//       .then(() => {
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//   render() {
//     return (
//       <div>
//         <h1>enter your info</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             firstname:
//             <input id="firstname" onChange={this.handleInput} />
//           </label>
//           <label>
//             lastname:
//             <input id="lastname" onChange={this.handleInput} />
//           </label>
//           <label>
//             email:
//             <input id="email" onChange={this.handleInput} />
//           </label>
//           <label>
//             password:
//             <input id="user_passowrd" onChange={this.handleInput} />
//           </label>
//           <label>
//             birthday:
//             <input id="birthday" onChange={this.handleInput} />
//           </label>
//           <label>
//             phone:
//             <input id="phone" onChange={this.handleInput} />
//           </label>
//           <button type="submit">Sign up</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default LogIn;