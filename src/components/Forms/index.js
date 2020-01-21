import React from 'react';
import { Link } from "react-router-dom";

export const SignUpForm = () => (
  <div className="form-container sign-up-container">
    <form id={"sign-up__form"}>
      <h1>Create Account</h1>
      <input
        className="input"
        data-colname={"username"}
        type="text"
        placeholder="Name"
      />
      <span className={"error__container"}>{}</span>
      <input
        className="input"
        data-colname={"password"}
        type="password"
        placeholder="Password"
      />
      <span className={"error__container"}>{}</span>
      <button
        onClick={e => {
          e.preventDefault();
          this.handleSubmit("sign-up__form");
        }}
      >
        Sign Up
      </button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </form>
  </div>
);

export const SignInForm = () => (
  <div className="form-container sign-in-container">
    <form id={"sign-in__form"}>
      <h1>Sign in</h1>
      <input
        className="input"
        data-colname={"username"}
        type="name"
        placeholder="Name"
      />
      <input
        className="input"
        data-colname={"password"}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={e => {
          e.preventDefault();
          this.handleSubmit("sign-in__form");
        }}
      >
        Sign In
      </button>
    </form>
  </div>
);