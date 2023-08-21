import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";
import logo from "./web_app-logo.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <li className="logo">
        <Link to="/">
          <img src={logo} alt="bug" height={100} className="logo" />
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
        <li>
          <Link to="/marketplace" className="nav-links">
            Marketplace
          </Link>
        </li>
      </ul>
      <div
        ref={dropdownRef}
        className={`custom-dropdown${dropdownVisible ? " show" : ""}`}
      >
        <button className="loginBtn" onClick={handleDropdownToggle}>
          <i className="fas fa-user"></i>
        </button>
        {dropdownVisible && (
          <div className="dropdown-content">
            <Link to="/loginPage" onClick={closeDropdown}>
              <i className="fas fa-sign-in-alt"></i> Sign In
            </Link>
            
            <Link to="/registerPage" onClick={closeDropdown}>
              <i className="fas fa-user-plus"></i> Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
