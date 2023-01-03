import React from "react";
import "./Login.styles.css";

import logo from "../../assets/riptide-white.png";

const Login = () => {
  return (
    <div className="login-page">
      <img className="login-logo" src={logo} alt="riptide logo" />
      <div className="login-container">
        <h1>Log In</h1>
        <form className="login-form">
          <input type="text" placeholder="Email..." className="login-input" />
          <input
            type="password"
            placeholder="Password..."
            className="login-input"
          />
          <button className="login-btn">Login</button>
        </form>
        <p className="signup-link">Need an account? Signup Here</p>
      </div>
    </div>
  );
};

export default Login;
