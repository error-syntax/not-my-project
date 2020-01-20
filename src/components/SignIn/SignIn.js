import React, { Component } from "react";
import "./signIn.css";

export class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <span>or use your email for registration</span>
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input className="input" type="username" placeholder="Username" />
              <input className="input" type="password" placeholder="Password" />
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  onClick={() => {
                    const container = document.getElementById("container");
                    container.classList.remove("right-panel-active");
                  }}
                  className="ghost"
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  onClick={() => {
                    const container = document.getElementById("container");
                    container.classList.add("right-panel-active");
                  }}
                  className="ghost"
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
