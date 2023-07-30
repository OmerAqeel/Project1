import React from "react";
import { Link, NavLink, Bars } from "react-router-dom";
import "./homepagestyle.css";

const HomePage = () => {

  
  return (
    <div>
      <div className="image-container">
        <img src="/images/First Image1.jpg" alt="This Image" className="image" />
        <div className="box">
          <p className="explore-more">Explore More</p>
          <div className="text-on-image1">
            <div className="image1-top-text">
              Explore<br />
              Pakistans finest<br />
              book collection<br />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4>HomePage</h4>
      </div>
    </div>
  );
};

export default HomePage;
