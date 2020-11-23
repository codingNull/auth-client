import React from "react";
import { connect } from "react-redux";
import { signOut } from "../actions";

class SignOut extends React.Component {
  componentDidMount() {
    localStorage.removeItem("token");
    this.props.signOut();
  }
  render() {
    return <div>Sorry to see you go!</div>;
  }
}

export default connect(null, { signOut })(SignOut);
