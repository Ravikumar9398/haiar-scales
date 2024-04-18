import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

import { Link } from "react-router-dom";

import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <div className="info-container">
      <div className="info-1">
        <h1 className="info-1-header">Haiar Instruments</h1>
        <hr className="footer-line" />
        <div className="info-mail-container">
          <IoIosMail size={26} color="rgb(230, 222, 222)" />
          <p className="color">haiarinstruments@gmail.com</p>
        </div>
        <div className="info-mail-container">
          <IoLocation size={45} color="rgb(230, 222, 222)" />
          <p className="color">
            D.No 18-132, Piduguralla (V)(M) Palnadu District, Andhra
            Pradesh-522413
          </p>
        </div>
        <div className="info-mail-container">
          <IoMdContact size={26} color="rgb(230, 222, 222)" />
          <p className="color">
            Sk Yusuf +91 8092-8092-56
            <br /> S.M. Vali +91 8092-8092-57
          </p>
        </div>
      </div>

      <div className="info-1">
        <h1 className="color">Weaghing Scales-Models</h1>
        <hr className="footer-line w-fit" />
        <ul>
          <li className="color">Mini Tabletop</li>
          <li className="color">Tabletop Scale</li>
          <li className="color">Mobile Scale</li>
          <li className="color">Commercial Platform Scale</li>
          <li className="color">Heavy-Duty Scales </li>
        </ul>
      </div>

      <div className="info-1">
        <h1 className="color">Need help?</h1>
        <hr className="footer-line w-fit" />
        <Link to="/contactus">
          <p className="color">Contact Us</p>
        </Link>
        <Link to="/contactus">
          <p className="color">About Us</p>
        </Link>
        <Link to="/contactus">
          <p className="color">Terms and conditions are apply</p>
        </Link>
      </div>
    </div>
    <hr className="big-line" />
    <div className="footer-bottom-bg">
      <p className="copyiright">
        © www.haiarscales.com. All Rights Are Reserved
      </p>
      <div className="social-media-container">
        <a
          href="https://api.whatsapp.com/send?phone=+918092809256"
          target="__blank"
        >
          <img
            className="whatsapp"
            src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708269718/pngwing.com_aahpjz.png"
            alt="whatsapp"
          />
        </a>

        <img
          className="whatsapp"
          src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708305169/pngwing.com_1_kfuoz4.png"
          alt="whatsapp"
        />

        <img
          className="whatsapp"
          src="https://res.cloudinary.com/dewzkraqq/image/upload/v1708305170/pngwing.com_2_ep9ram.png"
          alt="whatsapp"
        />
      </div>
    </div>
  </div>
);

export default Footer;
