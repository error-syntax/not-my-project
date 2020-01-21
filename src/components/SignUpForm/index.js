import React from 'react';

const SignUpForm = () => (
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

export default SignUpForm