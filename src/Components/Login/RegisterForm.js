import React, { Component } from "react";
import axios from "axios";

class RegisterForm extends Component {
  render() {
    return (
      <div>
        <h1>register</h1>
        <form>
          <input type="text" name="user_name" placeholder="username" />
          <input type="text" name="user_email" placeholder="email" />
          <input type="password" name="user_password" placeholder="password" />
        </form>
        <button>Create Account</button>
      </div>
    );
  }
}
export default RegisterForm;
