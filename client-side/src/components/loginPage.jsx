import React, { useState } from "react";
import { Link } from "react-router-dom";
import './loginStyle.css';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (username.trim() === "") {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      // Form is valid, you can proceed with submission or further processing
      console.log("Form submitted successfully");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <p className="error">{usernameError}</p>
          </div>
          <br />
          <div className="input-container"> 
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <p className="error">{passwordError}</p>
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
