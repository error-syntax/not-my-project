import React, { Component } from "react";
import { SignUpForm, SignInForm } from "../../components/Forms";
import { SignInOverlay } from "../../components/Overlays";
import { handleUserFormSubmit } from '../../helpers';
import "./signIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: []
    };
  }

  handleErrors = errObj => {
    const newErrObj = Object.keys(errObj.message).map(key => {
      return {
        key,
        message: errObj.message[key][0]
      };
    });

    this.setState({
      ...this.state,
      errors: [...this.state.errors, ...newErrObj]
    });
  };

  handleSubmit = async formId => {
    const { setUser } = this.props;
    const apiURL = `http://localhost:3000/api/v1/users`;

    if (formId === "sign-up__form") {
      console.log('Creating User...')
      await handleUserFormSubmit(formId, setUser, apiURL);
    } else {
      console.log("Authenticating User...");
      await handleUserFormSubmit(formId, setUser, `${apiURL}/login`);
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container" id="container">
          <SignUpForm
            errors={errors}
            handleErrors={this.handleErrors}
            handleSubmit={this.handleSubmit}
          />
          <SignInForm
            errors={errors}
            handleErrors={this.handleErrors}
            handleSubmit={this.handleSubmit}
          />
          <SignInOverlay />
        </div>
      </div>
    );
  }
}

export default SignIn;
