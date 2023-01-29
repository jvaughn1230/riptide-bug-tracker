import React, { useState } from "react";
import "./Login.styles.css";

import { useDispatch } from "react-redux";
import { signIn } from "../../redux/authSlice";

import logo from "../../assets/riptide-white.png";

const Login = () => {
  // TODO: remove console.log once finished
  // ! Need to add useMemo due to reloading on each press of keyboard

  console.log("Login Component Loaded");

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    userName: "",
    password: "",
  });

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function submit(e) {
    dispatch(signIn(input));
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <img className="login-logo" src={logo} alt="riptide logo" />
      <div className="login-container">
        <h1>Log In</h1>
        <form className="login-form">
          <input
            type="text"
            name="userName"
            placeholder="Username..."
            className="login-input"
            value={input.userName}
            onChange={inputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            className="login-input"
            value={input.password}
            onChange={inputChange}
          />
          <button className="login-btn" type="submit" onClick={submit}>
            Login
          </button>
        </form>
        <p className="signup-link">Need an account? Signup Here</p>
      </div>
    </div>
  );
};

export default Login;
