import React from "react";
import { Link, NavLink, Bars } from "react-router-dom";
import './loginStyle.css'

const LoginPage = () => {
  return (
    <div className="sign-in-page">
      <div className="info-pane">
        <br />
        <br />
        <br />
        <h2>Welcome to Our Website!</h2>
        <p>Content will go here.</p>
      </div>
      <div className="sign-in-pane">
        <h2>Sign In</h2>
        <form>
          <div className="input-container">
            <label htmlFor="username">
              <i className="fas fa-envelope"></i>
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <br />
          <div className="input-container"> 
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input type="password" id="password" name="password" required />
          </div>
          <br />
          <div>
            <button type="submit" className="signInBtn">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
