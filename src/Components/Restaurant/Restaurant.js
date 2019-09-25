import React, { Component } from "react";
import axios from "axios";

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      dish: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/restaurant/${id}`).then(res => {
      this.setState({
        dish: res.data
      });
    });
  }
}
