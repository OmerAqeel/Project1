import React from "react";
import { Link } from "react-router-dom";
import "./homepagestyle.css";


const HomePage = () => {
  return (
    <div>
      <div className="image-container">
        <img src="/images/First Image1.jpg" alt="This Image" className="image" />
        <div className="box">
          <Link to="/categories" className="nav-links"></Link>
          <Link to="/categories" className="explore-more">Explore More</Link>
          <div className="text-on-image1">
            <div className="image1-top-text">
              Explore<br />
              Pakistan's finest<br />
              book collection<br />
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial-text">
        <h4>Our Testimonial</h4>
        <div className="carousel-container">
          <div className="carousel">


            <div className="testimonial">
              <div className="profile-pic">
                <img src="/images/TestImage.jpg" alt="Profile Picture 1" />
              </div>
              <div className="quote">
                <p className="quote-text">"The library is my go-to sanctuary for escaping into new worlds and expanding my knowledge. It's a place of wonder and inspiration!"</p>
                <p className="quote-author">- Salman Khan</p>
              </div>
            </div>


            <div className="testimonial">
              <div className="profile-pic">
                <img src="/images/TestImage.jpg" alt="Profile Picture 2" />
              </div>
              <div className="quote">
                <p className="quote-text">"Thanks to the library's vast collection, I've discovered hidden gems and classic reads that have enriched my life beyond measure."</p>
                <p className="quote-author">- Mike Oxmaul</p>
              </div>
            </div>


            <div class="testimonial">
  <div class="profile-pic">
  <img src="/images/TestImage.jpg" alt="Profile Picture 1"></img>
</div>
    <div class="quote">
      <p class="quote-text">"As a student, the library has been an invaluable resource for research and academic success. It's my second home!"</p>
      <p class="quote-author">- Jameela Omer</p>
    </div>
  </div>

  <div class="testimonial">
  <div class="profile-pic">
  <img src="/images/TestImage.jpg" alt="Profile Picture 1"></img>
</div>
    <div class="quote">
      <p class="quote-text">"The friendly and knowledgeable staff at the library have made every visit a delightful experience. They always go above and beyond to assist me."</p>
      <p class="quote-author">- Katrina Kaif</p>
    </div>
  </div>

  <div class="testimonial">
  <div class="profile-pic">
  <img src="/images/TestImage.jpg" alt="Profile Picture 1"></img>
</div>
    <div class="quote">
      <p class="quote-text">"I love how the library fosters a sense of community by hosting engaging events and book clubs. It's a great place to connect with like-minded individuals."</p>
      <p class="quote-author">- Angelina Jolie</p>
    </div>
  </div>

          </div>
        </div>
      </div>

      {/* Top Rated Categories Section */}
      <div className="top-cat-text">
        <h4>Top Rated Categories</h4>
        <Link to="/categories" className="explore-more-category">Explore More</Link>
        <div class="book-container">
        <div class="rectangle-box">
            <img class="book-image" src="/images/Book1.jpg" alt="Image 1" />
            <div className="category-text">Drama</div>
        </div>
        <div class="rectangle-box">
            <img class="book-image" src="/images/Book2.jpg" alt="Image 2" />
            <div className="category-text">Reality</div>
        </div>
        <div class="rectangle-box">
            <img class="book-image" src="/images/Book3.jpg" alt="Image 3" />
            <div className="category-text">Kids</div>
            </div>
          </div>
        </div>
      </div>
  );



  
};

export default HomePage;
