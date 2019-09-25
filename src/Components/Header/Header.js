import React, { Component } from "react";
import Login from "../Login/Login";
import RegisterForm from "../Login/RegisterForm";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginModuleSeen: false,
      registerModuleSeen: false
    };
  }

  handleLoginToggle = e => {
    this.setState({
      loginModuleSeen: !this.state.loginModuleSeen
    });
  };
  handleRegisterToggle = e => {
    this.setState({
      registerModuleSeen: !this.state.registerModuleSeen
    });
  };
  render() {
    return (
      <div>
        <h1>Header</h1>
        <button onClick={this.handleLoginToggle}>Login</button>
        <button onClick={this.handleRegisterToggle}>Register</button>
        {this.state.loginModuleSeen ? (
          <Login handleToggle={this.handleLoginToggle} />
        ) : null}
        {this.state.registerModuleSeen ? <RegisterForm /> : null}
      </div>
    );
  }
}

//have this subscribed to userReducer (mapStateToProps), display it via props when user logs in
export default Header;
