import React from "react";
import "./Navbar.styles.css";

import logo from "../../assets/riptide-white.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="riptide logo" className="navbar-logo" />
      <div className="navbar-links-container">
        <a href="/" className="navbar-link">
          View Bugs
        </a>
        <a href="/" className="navbar-link">
          Add Bug
        </a>
      </div>
      <a href="/" className="logout-link">
        Logout
      </a>
    </div>
  );
};

export default Navbar;
