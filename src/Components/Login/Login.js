import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm
          handleLogin={this.props.handleLogin}
          handleToggle={this.props.handleToggle}
        />
      </div>
    );
  }
}
export default Login;
