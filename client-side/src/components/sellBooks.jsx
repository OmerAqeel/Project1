import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sellBooksStyle.css";

const SellBooks = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [goodreadsLink, setGoodreadsLink] = useState("");
  const [country, setCountry] = useState("Austria");
  const [city, setCity] = useState("Fucking");
  const [formErrors, setFormErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file);
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

    switch (name) {
      case "bookTitle":
        setBookTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "bookPrice":
        setBookPrice(value);
        break;
      case "goodreadsLink":
        setGoodreadsLink(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "city":
        setCity(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!bookTitle) {
      errors.bookTitle = "Book title is required";
    }

    if (!description) {
      errors.description = "Description is required";
    }

    if (!bookPrice) {
      errors.bookPrice = "Book price is required";
    } else if (!/^\d+(\.\d{1,2})?$/.test(bookPrice)) {
      errors.bookPrice = "Invalid book price format. Example: 12.34";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form is valid, you can perform further actions here
      // For example, you could make an API call to submit the data to the server
      console.log("Form submitted successfully!");
    }
  };

  return (
    <div>
      <h4 className="sell-books-title">Post Your Ad</h4>
      <div className="sell-books-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="book-title">Book title: </label>
          <input
            type="text"
            id="book-title"
            name="bookTitle"
            value={bookTitle}
            onChange={handleInputChange}
          />
          <br />
          {formErrors.bookTitle && <span className="error">{formErrors.bookTitle}</span>}

          <br />
          <br />
          <div className="description">
            <label htmlFor="description">Description: </label> <br /> </div>

          <textarea
            id="description"
            name="description"
            rows="7"
            cols="50"
            placeholder="Enter Description Here..."
            value={description}
            onChange={handleInputChange}
            style={{}}
          ></textarea>
          <br />
          {formErrors.description && <span className="error">{formErrors.description}</span>}

          <br />
          <br />
          <label htmlFor="book-image">Book Image: </label> <br /> <br />
          <div>
            <input
              type="file"
              id="book-image"
              onChange={handleImageChange}
            />
            <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px", maxWidth: "1000px", marginRight: "30em", marginLeft: "30em" }}>
              {imageFile && (
                <img src={previewUrl} alt="Book Preview" style={{ maxWidth: "100%" }} />
              )}
            </div>
          </div>




          {/* <input
        type="file"
        id="book-image"
        onChange={handleImageChange}
      />
      {imageFile && <img src={previewUrl} alt="Book Preview" style={{ maxWidth: "200px" }} />}
          <input type="submit" value="Upload Chosen File" /> */}

          <br />
          <br />
          <p>
            <label htmlFor="book-price">Book price: </label>
            <input
              type="text"
              id="book-price"
              name="bookPrice"
              placeholder="PKR 00.00"
              value={bookPrice}
              onChange={handleInputChange}
            />
            <br />
            {formErrors.bookPrice && <span className="error">{formErrors.bookPrice}</span>}
          </p>

          <p>
            <label htmlFor="goodreads-link">Goodreads link: </label>
            <input
              type="text"
              id="goodreads-link"
              name="goodreadsLink"
              placeholder="https://www.goodreads.com/"
              value={goodreadsLink}
              onChange={handleInputChange}
            />
          </p>

          <div className="book-categories">
            <h5>Book Category:</h5>
            <div className='maindiv1'>
              <div className='subdiv1'>
                <b>Non-Fiction</b><br />
                <input type="checkbox" id="Academia" name="Academia" value="Academia" />
                <label > Academia</label><br />
                <input type="checkbox" id="(Auto) Biography" name="(Auto) Biography" value="(Auto) Biography" />
                <label > (Auto) Biography</label><br />
                <input type="checkbox" id="Language" name="Language" value="Language" />
                <label > Language</label><br />
                <input type="checkbox" id="Literature" name="Literature" value="Literature" />
                <label > Literature</label><br />
                <input type="checkbox" id="Medicine" name="Medicine" value="Medicine" />
                <label > Medicine</label><br />
                <input type="checkbox" id="Poetry" name="Poetry" value="Poetry" />
                <label > Poetry</label><br />
                <input type="checkbox" id="Religion" name="Religion" value="Religion" />
                <label > Religion</label><br />
                <input type="checkbox" id="Sports" name="Sports" value="Sports" />
                <label > Sports</label><br />
                <input type="checkbox" id="Tech" name="Tech" value="Tech" />
                <label > Tech</label><br />
                <input type="checkbox" id="Other" name="Other" value="Other" />
                <label > Other</label><br /><br />
              </div>

              <div className='subdiv2'>
                <b>Fiction</b><br />
                <input type="checkbox" id="Fantasy" name="Fantasy" value="Fantasy" />
                <label > Fantasy</label><br />
                <input type="checkbox" id="Horror" name="Horror" value="Horror" />
                <label > Horror</label><br />
                <input type="checkbox" id="Literary Fiction" name="Literary Fiction" value="Literary Fiction" />
                <label > Literary Fiction</label><br />
                <input type="checkbox" id="Mystery" name="Mystery" value="Mystery" />
                <label > Mystery</label><br />
                <input type="checkbox" id="Romance" name="Romance" value="Romance" />
                <label > Romance</label><br />
                <input type="checkbox" id="Sci-Fi" name="Sci-Fi" value="Sci-Fi" />
                <label > Sci-Fi</label><br />
                <input type="checkbox" id="Other" name="Other" value="Other" />
                <label > Other</label><br />
              </div>



            </div>

            <input className="button" type="submit" value="Submit" />
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default SellBooks;
