import React, { Component } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      user_password: "",
      moduleSeen: false
    };
  }
  handleToggle = e => {
    this.setState({
      moduleSeen: !this.state.moduleSeen
    });
  };
  handleLoginInfoUpdate = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleUserLogin = e => {
    e.preventDefault();
    const { user_name, user_password } = this.state;
    axios
      .post("/auth/login", { user_name, user_password })
      .then(res => {
        //update user
        this.props.handleToggle();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      user_name: "",
      user_password: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLoginInfoUpdate}>
          <input
            type="text"
            name="user_name"
            placeholder="username"
            onChange={this.handleLoginInfoUpdate}
          />
          <input
            type="password"
            name="user_password"
            placeholder="password"
            onChange={this.handleLoginInfoUpdate}
          />
          <button onClick={this.handleUserLogin}>Login</button>
        </form>
        <p>
          Not a user? Create an account{" "}
          <button onClick={this.handleToggle}>here</button>
        </p>
        {this.state.moduleSeen ? <RegisterForm /> : null}
      </div>
    );
  }
}
export default LoginForm;
