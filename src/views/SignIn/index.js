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

  handleSubmit = formId => {
    const { setUser } = this.props;

    if (formId === "sign-up__form") {
      handleUserFormSubmit(formId, setUser, 'POST');
    } else {
      console.log("sign-in__form");
      // GET REQUEST
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container" id="container">
          <SignUpForm errors={errors} />
          <SignInForm errors={errors} />
          <SignInOverlay />
        </div>
      </div>
    );
  }
}

export default SignIn;
