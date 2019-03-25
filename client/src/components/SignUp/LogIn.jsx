import React from 'react';
import styles from './SignUp.css';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: "",
      loginstate:''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.user_password.length > 0;
  }
  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, user_password } = this.state;
    console.log(email,user_password)
    if (this.validateForm()) {
      console.log(this.validateForm());
      axios
        .post("/api/login", { email, user_password })
        .then(() => {
          this.props.changePage();
          this.setState({
            loginstate:'successfully signed in'
          })
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        loginstate: "wrong email or password"
      });
    }
  }
  render() {
    return (
      <div className={styles.info}>
        <div className={styles.signup}>
          <form onSubmit={this.handleSubmit}>
            <input id="email" onChange={this.handleInput} placeholder="email" />
            <br />
            <br />
            <input
              id="user_password"
              type="password"
              onChange={this.handleInput}
              placeholder="password"
            />
            <br />
            <br />
            <button
              type="submit"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;

