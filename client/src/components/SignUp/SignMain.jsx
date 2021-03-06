import React from "react";
import styles from "./SignUp.css";
import axios from 'axios';


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
        this.props.changePage();
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
          <input className={styles.forminput}
            id="firstname" 
            placeholder="First Name" 
            onChange={this.handleInput} 
          />
 
            <input className={styles.forminput}
            id="lastname"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
            <input className={styles.forminput}
            id="email" 
            placeholder="email"
            onChange={this.handleInput} 
          />
            <input className={styles.forminput}
            id="user_password" 
            type="password"
            placeholder="password"
            onChange={this.handleInput} 
          />
            <input className={styles.forminput}
            id="birthday" 
            placeholder="month/date/year"
            onChange={this.handleInput} 
          />
        
            <input className={styles.forminput}
            id="phone" 
            placeholder='phone#'
            onChange={this.handleInput} 
          />       
          <br /><br />
          <button className={styles.formbutton}
            type="submit"
          > Sign Up
          </button>

        </form>
      </div>
  </div>
    );
  }
}

export default SignUp;

