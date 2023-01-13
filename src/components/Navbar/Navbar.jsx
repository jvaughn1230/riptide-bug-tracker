import React from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";

import logo from "../../assets/riptide-white.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="riptide logo" className="navbar-logo" />
      <div className="navbar-links-container">
        <Link to="/account/viewbugs" className="navbar-link">
          View Bugs
        </Link>
        <Link to="/account/addbug" className="navbar-link">
          Add Bug
        </Link>
      </div>
      <Link to="/" className="logout-link">
        Logout
      </Link>
    </div>
  );
};

export default Navbar;
