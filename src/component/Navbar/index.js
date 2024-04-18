import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { FiMenu } from "react-icons/fi";
import {
  MdCancel,
  MdConnectWithoutContact,
  MdBusinessCenter,
} from "react-icons/md";
import { FaWeightScale, FaScrewdriverWrench } from "react-icons/fa6";
import { FaHome, FaBalanceScale } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import "./index.css";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="nav-bg nav-container">
      <div className="mobile-menu-container">
        <FiMenu size={25} onClick={() => setIsShow(true)} className="pointer" />
        {isShow && (
          <div className="mobile-menu-bg">
            <Link to="/">
              <div className="mobile-menu-items-con">
                <FaHome color="white" />
                <h1 className="menu-item">Home</h1>
              </div>
            </Link>

            <Link to="/weighing-scales">
              <div className="mobile-menu-items-con">
                <FaBalanceScale color="white" />
                <h1 className="menu-item">Weighing Scales</h1>
              </div>
            </Link>
            <Link to="/digital-scales">
              <div className="mobile-menu-items-con">
                <FaWeightScale color="white" />
                <h1 className="menu-item">Digital Scales</h1>
              </div>
            </Link>
            <Link to="/spareparts">
              <div className="mobile-menu-items-con">
                <FaScrewdriverWrench color="white" />
                <h1 className="menu-item">Spare Parts</h1>
              </div>
            </Link>

            <Link to="/Business-needs">
              <div className="mobile-menu-items-con">
                <MdBusinessCenter color="white" />
                <h1 className="menu-item">Business Needs</h1>
              </div>
            </Link>
            <Link to="/manual-measurements">
              <div className="mobile-menu-items-con">
                <TbRulerMeasure color="white" />
                <h1 className="menu-item">Manual Measurements</h1>
              </div>
            </Link>

            <Link to="/contactus">
              <div className="mobile-menu-items-con">
                <MdConnectWithoutContact color="white" />
                <h1 className="menu-item">ContactUs</h1>
              </div>
            </Link>
            <MdCancel
              onClick={() => setIsShow(false)}
              size={22}
              className="cancel-icon"
            />
          </div>
        )}
      </div>

      <Link to="/">
        <div className="nav_logo">
          <img
            src="https://res.cloudinary.com/ditfxnb3j/image/upload/v1709025720/HAIAR_PNG_1_fsdkky.png"
            alt="Upload"
          />
        </div>
      </Link>

      <div className="nav-list">
        <Link to="/">
          <p className="list-item text-decoration ">Home</p>
        </Link>
        <div className="list-item dropdown-list ">
          <DropdownMenu />
        </div>
        <Link to="/contactus">
          <p className="list-item text-decoration  contactus">Contactus</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
