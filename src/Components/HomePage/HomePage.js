import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../LoginForm/LoginForm";
import logo from "../../assets/Logo.svg";

class HomePage extends Component {
  constructor(props) {
    super();

    this.state = {
      loginForm: null
    };
  }

  openLogin = () => {
    this.setState({
      loginForm: true
    });
  };

  closeLogin = () => {
    this.setState({
      loginForm: false
    });
  };

  render() {
    if (this.props.user_id) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Body>
        <Header>
          <Logo>
            <LogoImage src={logo} alt="cal logo" />
            <LogoText>caltrend</LogoText>
          </Logo>

          <Button onClick={this.openLogin}>login/register</Button>
        </Header>

        {this.state.loginForm && <LoginForm closeLogin={this.closeLogin} />}
      </Body>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user_id: state.user.data
  };
}

export default connect(mapStateToProps)(HomePage);

let darkGreen = "#219653";
let mediumGreen = "#2DB969";
// let lightGreen = '#36D97C'
// let darkAccent = '#333333'
let lightAccent = "#F4F4F4";

const Body = styled.div`
  background: ${lightAccent};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 45px;
  margin: 8px;
`;

const LogoText = styled.h1`
  color: ${darkGreen};
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  background: ${lightAccent};
  color: ${mediumGreen};
  border: 1px solid ${darkGreen};
  margin-right: 10px;
  border: none;
  font-size: 16px;
  &:hover {
    background: ${mediumGreen};
    color: ${lightAccent};
    border-radius: 8px;
  }
`;
