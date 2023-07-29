import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";
import logo from "./web_app-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <li className="logo">
        <Link to= "/"><img src={logo} alt="bug" height={100} className="logo"/> {/* Use the imported image */}</Link>
        </li>
        <ul>
        <li>
          <Link to="/" className="nav-links">Home</Link>
        </li>
        <li>
          <Link to="/categories" className="nav-links">Categories</Link>
        </li>
        <li>
          <Link to="/sellBooks" className="nav-links">Sell Books</Link>
        </li>
      </ul>
      <Link to="/loginPage" className="loginBtn">
        <button>Login</button>
      </Link>
    </nav>
  );
};

export default Navbar;
