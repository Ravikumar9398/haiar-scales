import React from "react";
import Navbar from "../Navbar";
import { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./index.css";
import Products from "../Products";

import Footer from "../Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Haiar Instruments";
  }, []);
  return (
    <div>
      <div className="Nav-position">
        <Navbar />
      </div>
      <div className="below-container ">
        <div className=" banner-card">
          <div>
            <h1 className="main-heading">
              Haiar <span className="span-word">(హయర్)</span> Instruments
            </h1>
            <p className="sub-heading">
              We Providing Best Quality With Economic Pricing Weighing Scales,
              As We are Well- Known Weighing Scales Manufacturers & Suppliers
              from Andhra Pradesh.
            </p>
            <div className="address-container">
              <FaLocationDot color="white" size={14} />
              <p className="address-info">
                D.No 18-132, Piduguralla (V)(M) Andhra Pradesh-522413
              </p>
            </div>
            <ul className="contact-list-items">
              <li>
                Sk.Yusuf<span className="span-num"> +91 8092-8092-56</span>{" "}
              </li>

              <li>
                S.M. Vali<span> +91 8092-8092-57</span>{" "}
              </li>
            </ul>
            <div className="address-container">
              <IoIosMail color="white" />
              <p className="address-info">haiarinstruments@gmail.com</p>
            </div>
          </div>

          <div className="img-haiar-con">
            <img
              src="https://res.cloudinary.com/ditfxnb3j/image/upload/v1709887780/DSC_2040_1_1_pcj0ih.png"
              alt="Haiar"
              className="size"
            />
          </div>
        </div>

        <div className="products-list-container">
          <Products />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
