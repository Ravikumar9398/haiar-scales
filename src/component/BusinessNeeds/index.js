import DigitalScalesCard from "../DigitalScaleCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

const businessScalesList = [
  {
    id: "01",
    title: "Cash Counting Machine",
    products: [
      {
        id: "001",
        name: "Value Counting Machine",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709272443/b0f0901f-9fa8-4db7-89de-ccc2d298e430_lhkgxu.png",
      },
      {
        id: "002",
        name: "Semi-value Counting Machine",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709274407/81o8gjOwXoL_1_sj933o.jpg",
      },
      {
        id: "003",
        name: "Mix Value Counting Machine",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709272443/b0f0901f-9fa8-4db7-89de-ccc2d298e430_lhkgxu.png",
      },
    ],
  },

  {
    id: "02",
    title: "CC Cameras",
    products: [
      {
        id: "001",
        name: "Cp Plus",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709274780/81fIqPdqTlL_qmcxmt.jpg",
      },

      {
        id: "002",
        name: "Hikvision",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709274983/61Ax7kiH2sL._AC_UF1000_1000_QL80__zpissf.jpg",
      },

      {
        id: "003",
        name: "Dhavua",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709275217/71-ikzZSSsL_lem5vd.jpg",
      },
    ],
  },

  {
    id: "03",
    title: "Cash Register Machine",
    products: [
      {
        id: "001",
        name: "Truecount",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709275473/eea10447-8d64-4ae3-bb37-d49093dc1625_mfem7z.png",
      },

      {
        id: "002",
        name: "Tvs",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709275727/pt-3124-electronic-cash-register_fupbf8.png",
      },

      {
        id: "003",
        name: "Wep Billing Machine",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709275865/61d523f5-3f8d-47ea-b071-1a44ec2f72fa_vksoqb.png",
      },
    ],
  },

  {
    id: "02",
    title: "Packing Machine",
    products: [
      {
        id: "001",
        name: "Seepack",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709276183/91ed8ca4-a854-4360-9dbc-7d0c1c2587cf_bv8lig.png",
      },

      {
        id: "002",
        name: "Ambica",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709276429/de56f0cc-ea06-4d8a-9f8c-a6cf3801a936_ihbtmz.png",
      },

      {
        id: "003",
        name: "Ganga Sealing Machine",
        imageUrl:
          "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709276806/cad42121-3f49-47c6-9f66-525326fcc9ff_obumpu.png",
      },
    ],
  },
];

const BusinessNeeds = () => {
  const [getId, setId] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    document.title = "Business Needs";
  }, []);

  const display = isDisplay ? "pop-img-container" : "pop-img-container-display";

  const onClickPart = (imageUrl) => {
    setId(imageUrl);
    setIsDisplay(true);
  };

  return (
    <div className="digital-scales-container">
      <Navbar />
      <p className="digital-description">
        Haiar Instruments, Leading Suppliers of Digital Weighing Scales all Over
        in India. All Our Digital Weighing Machines are Highly Demanded for
        Household and Commercial Purposes. We Proven Ourselves as One Stop Shop
        for all types of Digital Scales like Kitchen Scales, Pocket Jewellery
        Scales, Compact Scales, Pocket Hanging Scales, Luggage Scales, Bathroom
        Scales, Digital Personal Scales, Imported Scales etc., Haiar
        Instruments, Guntur have major Customer Segments and Supplying
        Dealership Network throughout Guntur, Coimbatore in Andhra Pradesh.
      </p>
      <ul className="digital-products-container">
        {businessScalesList.map((each) => (
          <li>
            <div className="digital-title-container">
              <h1 className="digital-scale-title">{each.title}</h1>
            </div>
            <ul className="spareparts-list-cotainer">
              {each.products.map((product) => (
                <DigitalScalesCard
                  itemDetails={product}
                  key={product.id}
                  onClickPart={onClickPart}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className={display}>
        <button type="button" onClick={() => setIsDisplay(false)}>
          {" "}
          <MdCancel />{" "}
        </button>

        <img className="spare-big-image" src={getId} alt="big" />
      </div>
      <Footer />
    </div>
  );
};

export default BusinessNeeds;
