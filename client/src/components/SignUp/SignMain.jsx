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
    <div className={styles.info}>

      <div className={styles.signup}>
        <form onSubmit={this.handleSubmit}>
          <input 
            id="firstname" 
            placeholder="First Name" 
            onChange={this.handleInput} 
            />
          <br /><br />
          <input
            id="lastname"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
          <br />
          <br />
          
            <input className={styles.email}
            id="email" 
            placeholder="email"
            onChange={this.handleInput} 
            />
        
          <br />
          <br />
          <input 
            id="user_passowrd" 
            placeholder="password"
            onChange={this.handleInput} 
            />
        
          <br />
          <br />
          <input 
            id="birthday" 
            placeholder="month/date/year"
            onChange={this.handleInput} 
            />
        
          <br />
          <br />
        
          <input 
            id="phone" 
            placeholder='phone#'
            onChange={this.handleInput} 
            />
        
          <br />
          <br />
          <button
            type="submit"
            onClick={() => {
              this.props.changePage();
            }}
            >
            SEND
          </button>
        </form>
      </div>
  </div>
    );
  }
}

export default SignUp;

