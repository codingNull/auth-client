import React from "react";
import { connect } from "react-redux";

export default (Component) => {
  class ComposedComponent extends React.Component {
    navToWelcome = () => {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    };

    componentDidMount() {
      this.navToWelcome();
    }

    componentDidUpdate() {
      this.navToWelcome();
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth.token };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
