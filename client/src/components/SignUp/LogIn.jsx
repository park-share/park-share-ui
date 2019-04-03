import React from "react";
import styles from "./SignUp.css";
import axios from "axios";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user_password: "",
      loginstate: ""
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
    console.log(email, user_password);
    if (this.validateForm()) {
      axios
        .post("/api/login", { email, user_password })
        .then(res => {
          if (res.data === email) { //server send back the user email to the client
            // console.log(res.data)
            this.props.changePage();
          } else if (res.data === "Username does not exist") {
            this.setState({
              loginstate: res.data
            });
          } else if (res.data === "Incorrect password") {
            this.setState({
              loginstate: res.data
            });
          }
          console.log(res.data);
          // if (res.data.status===422) {
          //   console.log('hihihi')

          // } else {

          //   this.props.changePage();
          // }
          // this.setState({
          //   loginstate:'successfully signed in'
          // })
        })
        .catch(err => {
          console.log("thisis the err", err);
        });
    } else {
      this.setState({
        loginstate: "not a great a password"
      });
    }
  }
  render() {
    const { username, password, loginstate } = this.state;
    return (

      <div className={styles.info}>
        <div className={styles.signup}>
          <form onSubmit={this.handleSubmit}>
            <input
              className={styles.formlogin}
              id="email"
              onChange={this.handleInput}
              placeholder="email"
            />
            <br />
            <br />
            <input
              className={styles.formlogin}
              id="user_password"
              type="password"
              onChange={this.handleInput}
              placeholder="password"
            />
            <br />
            <br />
            <br />
            <br />
            <div className={styles.auth}>
              {loginstate === "Name not available"
                ? "Name already taken"
                : ""}
              {loginstate === "Incorrect password"
                ? "Incorrect password"
                : ""}
              {loginstate === "Username does not exist"
                ? "Username does not exist"
                : ""}
            </div>
            <button className={styles.formbutton} type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
