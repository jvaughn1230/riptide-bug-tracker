import React from "react";
import "./Login.styles.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="inner-login-container">
          <h1>Log In</h1>
          <form>
            <label>Email: </label>
            <input type="text" placeholder="Email..." />
            <br />
            <label>Passoword: </label>
            <input type="password" placeholder="Password..." />
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
