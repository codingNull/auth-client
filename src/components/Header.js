import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./style.css";

class Header extends React.Component {
  renderLink = () => {
    if (this.props.auth.token) {
      return (
        <div className="navi">
          <Link to="/signout">Sign Out</Link>
          <Link to="/content">Content</Link>
        </div>
      );
    } else {
      return (
        <div className="navi">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="header">
        <Link to="/">Welcome</Link>
        {this.renderLink()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
