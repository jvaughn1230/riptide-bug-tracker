import React from "react";
import "./Signup.styles.css";

import logo from "../../assets/riptide-white.png";

const Signup = () => {
  return (
    <div className="signup-page">
      <img className="signup-logo" src={logo} alt="riptide logo" />
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form className="signup-form">
          <input
            type="text"
            placeholder="First Name..."
            className="register-input"
          />
          <input
            type="text"
            placeholder="Last Name..."
            className="register-input"
          />
          <input
            type="email"
            placeholder="Email..."
            className="register-input"
          />
          <input
            type="password"
            placeholder="password..."
            className="register-input"
          />
          <button type="submit" className="register-btn">
            Submit
          </button>
        </form>
        <p className="login-link">Already have an accocunt? Log in here</p>
      </div>
    </div>
  );
};

export default Signup;
