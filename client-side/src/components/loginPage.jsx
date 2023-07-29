import React from "react";
import { Link, NavLink, Bars } from "react-router-dom";

const LoginPage = () => {

    
  return (
    <div className="sign-in-container">
    <h2>Sign In</h2>
    <form >
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
  );
};

export default LoginPage;