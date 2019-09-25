import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm handleLogin={this.props.handleLogin} />
      </div>
    );
  }
}
export default Login;
