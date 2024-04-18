import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div>
      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/ditfxnb3j/image/upload/v1709790667/5203299_kxufka.jpg"
          alt="not-found"
          className="not-found-img"
        />
        <h1>NotFound</h1>
        <Link to="/">
          <button type="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
