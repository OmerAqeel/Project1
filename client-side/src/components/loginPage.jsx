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
        <div className="info-content">
        <h2 className="content Title">Welcome aboard my zozo!</h2>
        <p className="content Para">Hero na ban sheeday </p>
        </div>
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
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="or-divider">
          <div className="bar"></div>
          <span>OR</span>
          <div className="bar"></div>
        </div>
        <div className="social-login">
          <button className="googleBtn">
            <i className="fab fa-google"></i> Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
