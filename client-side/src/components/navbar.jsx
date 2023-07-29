import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";

const Navbar = () => {
  return (
    <nav className="navbar">
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
