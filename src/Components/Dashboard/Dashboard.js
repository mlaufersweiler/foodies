import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser, logout } from "../../ducks/reducers/user";
import { Redirect, Link } from "react-router-dom";
import Nav from "../Nav/Nav";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
export default Dashboard;
