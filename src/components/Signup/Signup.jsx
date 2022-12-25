import React from "react";
import "./Signup.styles.css";

const Signup = () => {
  return (
    <div className="signup-page">
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
      </div>
    </div>
  );
};

export default Signup;
