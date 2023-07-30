import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";
import logo from "./web_app-logo.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <li className="logo">
        <Link to="/">
          <img src={logo} alt="bug" height={100} className="logo" />
          {/* Use the imported image */}
        </Link>
      </li>
      <ul>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-links">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/sellBooks" className="nav-links">
            Sell Books
          </Link>
        </li>
      </ul>
      <div className={`custom-dropdown${dropdownVisible ? " show" : ""}`}>
        <button className="loginBtn" onClick={handleDropdownToggle}>
          <i className="fas fa-user"></i>
        </button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <Link to="/loginPage">
              <i className="fas fa-sign-in-alt"></i> Sign In
            </Link>
            <Link to="/registerPage">
              <i className="fas fa-user-plus"></i> Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
