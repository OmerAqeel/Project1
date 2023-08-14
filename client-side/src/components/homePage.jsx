import React from "react";
import { Link } from "react-router-dom";
import "./homepagestyle.css";


const HomePage = () => {
  return (
    <div className="background">
      <div className="content">
        <h1 className="title">Explore<br />Pakistans Finest<br /> Book Collection</h1>
        <p className="subtitle">Discover amazing things with us</p>
        <div className="explore-boxes">
          <div className="explore-box">
          <Link to="/categories" >Explore More</Link>
          </div>
          <div className="explore-box">
          <Link to="/about" >Learn More</Link>
          </div>
        </div>

        {/* INSERT SOCIAL MEDIA ICONS DOWN RIGHT CORNER SIDE OK BHAI */}
        
      </div>
    </div>
  );
};

export default HomePage;
