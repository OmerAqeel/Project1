import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sellBooksStyle.css";

axios.defaults.baseURL = "http://localhost:3000/";

const SellBooks = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [goodreadsLink, setGoodreadsLink] = useState("");
  // const [country, setCountry] = useState("Austria");
  // const [city, setCity] = useState("cities");
  const [formErrors, setFormErrors] = useState({});
  // const [imageFile, setImageFile] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState(null);

  // const [selectedNonFictionCategories, setSelectedNonFictionCategories] = useState([]);
  // const [selectedFictionCategories, setSelectedFictionCategories] = useState([]);
  // const [chosenCategories, setChosenCategories] = useState([]);

  // const nonFictionCategories = [
  //   "Academia", "(Auto) Biography", "Language", "Literature", "Medicine",
  //   "Poetry", "Religion", "Sports", "Tech", "Other Non-Fiction"
  // ];

  // const fictionCategories = [
  //   "Fantasy", "Horror", "Literary Fiction", "Mystery", "Romance", "Sci-Fi", "Other Fiction"
  // ];

  // const handleCategoryChange = (event) => {
  //   const value = event.target.value;
  //   if (event.target.checked) {
  //     setChosenCategories((prevCategories) => [...prevCategories, value]);
  //   } else {
  //     setChosenCategories((prevCategories) =>
  //       prevCategories.filter((category) => category !== value)
  //     );
  //   }
  // };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageFile(file);
  //       setPreviewUrl(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

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
      default:
        break;
    }
  };

  // const [formData,setFormData] = useState({
  //   bookTitle: "",
  //         description:"",
  //         bookPrice: "",
  //         goodreadsLink: "",

  // })
 
  const handleSubmit = async(event) => {
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
      try {
        const formData = {
          bookTitle,
          description,
          bookPrice,
          goodreadsLink,
          // country,
          // city,
          // selectedNonFictionCategories,
          // selectedFictionCategories,
        };

        // Make a POST request to the /create endpoint
        console.log('very close')
        console.log(formData);

        const response = await axios.post("/sellBooks", formData);

        // Handle the response as needed (e.g., show success message)
        console.log("Form submitted successfully!");
        console.log(response);

      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (e.g., show error message)
      }
    }
  };

  return (
    <div className="upload-page">
      <div className="info-pane">
          <br />
          <br />
          <br />
          <div className="info-content">
            <h2 className="content Title">Welcome aboard my zozo!</h2>
            <p className="content Para">Hero na ban sheeday </p>
          </div>
        </div>
      <div className="upload-pane">
        <h4 className="sell-books-title">Post Your Ad</h4>
        <div className="sell-books-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="book-title">Book title:</label>
            <input
              type="text"
              id="book-title"
              name="bookTitle"
              value={bookTitle}
              onChange={handleInputChange}
            />
            <br />
            {formErrors.bookTitle && <span className="error">{formErrors.bookTitle}</span>}
            
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
              ></textarea>
              <br />
              {formErrors.description && <span className="error">{formErrors.description}</span>}

              <br />
              <br />
              {/* <label htmlFor="book-image">Book Image: </label> <br /> <br />
              <div>
                <input
                  type="file"
                  id="book-image"
                  onChange={handleImageChange}
                />
                <div style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  marginTop: "10px",
                  maxWidth: "1000px",
                  marginRight: "10em",
                  marginLeft: "10em"
                }}>
                  {imageFile && (
                    <img src={previewUrl} alt="Book Preview" style={{ maxWidth: "100%" }} />
                  )}
                </div>
              </div> */}



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
            
            {/* <div className="book-categories">
              <h5>Book Category:</h5>
              <div className="chosen-categories">
                Chosen categories: {chosenCategories.join(", ")}
              </div>
              <div className="maindiv1">
                <div className="subdiv1">
                  <div className="dropdown">
                  <button className="dropbtn">Fiction Categories</button>
                      <div className="dropdown-content">
                        {fictionCategories.map((category) => (
                          <div key={category}>
                            <input
                              type="checkbox"
                              id={category}
                              name="category"
                              value={category}
                              onChange={handleNonFictionChange}
                            />
                            <label htmlFor={category}>{category}</label><br />
                          </div>
                        ))}
                      </div>                  </div>
                </div>
                <div className="subdiv2">
                  <div className="dropdown">
                  <button className="dropbtn">Fiction Categories</button>
                      <div className="dropdown-content">
                        {fictionCategories.map((category) => (
                          <div key={category}>
                            <input
                              type="checkbox"
                              id={category}
                              name="category"
                              value={category}
                              onChange={handleFictionChange}
                            />
                            <label htmlFor={category}>{category}</label><br />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div> 


              <div>
                    <h3>Selected Non-Fiction Categories:</h3>
                    {selectedNonFictionCategories.join(', ')}
                  </div>
                  <div>
                    <h3>Selected Fiction Categories:</h3>
                    {selectedFictionCategories.join(', ')}
                  </div>
                   <div className='maindiv1'> 
                  <div className='subdiv1'>
                    <div class="dropdown">
                      <button class="dropbtn">Non-Fiction Categories</button>
                      <div class="dropdown-content">
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
                        <input type="checkbox" id="Other Non-Fiction" name="Other Non-Fiction" value="Other Non-Fiction" />
                        <label > Other</label><br /><br />
                      </div>
                    </div>
                  </div>

                  {/* onChange={handleCategoryChange} */}
                  <div className='subdiv2'>
                    <div class="dropdown">
                      <button class="dropbtn">Fiction Categories</button>
                      <div class="dropdown-content">
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
                        <input type="checkbox" id="Other Fiction" name="Other Fiction" value="Other Fiction" />
                        <label > Other</label><br />
                  </div>
                </div>
              </div>
            </div>
            
            </div>
            </div> */}
            <input className="button" type="submit" value="Submit" />

          </form>
        </div>
      </div>

    );
  };
};
export default SellBooks;
