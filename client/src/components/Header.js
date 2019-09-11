import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <li onClick={this._handleLogoutClick}>Logout</li>
        ) : (
          <div>
            <li onClick={this._handleGoogleSignInClick}>google</li>
            <li onClick={this._handleTwitterSignInClick}>twitter</li>
          </div>
        )}
      </ul>
    );
  }

  _handleTwitterSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open("http://localhost:4000/auth/twitter", "_self");
  };

  _handleGoogleSignInClick=()=>{
    window.open("http://localhost:4000/auth/google", "_self");
  }

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}
