import Footer from "../Footer";
import Navbar from "../Navbar";
import Products from "../Products";
import "./index.css";

import { useEffect } from "react";

const WeaghingScales = () => {
  useEffect(() => {
    document.title = "Weighing Scales";
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default WeaghingScales;
