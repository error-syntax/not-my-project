import React, { Component } from "react";
import { SignUpForm, SignInForm } from "../../components/Forms";
import { SignInOverlay } from "../../components/Overlays";
import { handleUserFormSubmit } from "../../helpers";
import "./signIn.css";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ["error state"]
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
    const { setUser } = this.props; // references the setUser hook in App.js
    const APIUrl = `http://localhost:3000/api/v1/users`;

    if (formId === "sign-up__form") {
      console.log("Creating User...");
      await handleUserFormSubmit(formId, setUser, APIUrl);
    } else {
      console.log("Authenticating User...");
      await handleUserFormSubmit(formId, setUser, `${APIUrl}/login`);
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
