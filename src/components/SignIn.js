import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signIn } from "../actions";

class SignIn extends React.Component {
  onSubmit = (formValues) => {
    this.props.signIn(formValues, () => {
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
        <button>Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default compose(
  connect(mapStateToProps, { signIn }),
  reduxForm({ form: "signin" })
)(SignIn);
