import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUp extends React.Component {
  onSubmit = (formValues) => {
    this.props.signUp(formValues, () => {
      this.props.history.push("/content");
      localStorage.setItem("token", this.props.auth.token);
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>email:</label>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label>password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        {this.props.auth.error}
        <button>Sign Up</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default compose(
  connect(mapStateToProps, { signUp }),
  reduxForm({ form: "signup" })
)(SignUp);
