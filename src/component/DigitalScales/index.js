import DigitalScalesCard from "../DigitalScaleCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

const digitalScalesList = [
  {
    id: "01",
    title: "Kitchen Scales",
    products: [
      {
        id: "001",
        name: "capacity : 10kg / 1 gm with Backlight 2 AAA Battery",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315506/1._KITCHEN_SCALES_-_Capacity_7_Kg_x_1_gm_rp8ful.jpg",
      },
      {
        id: "002",
        name: "capacity : 10kg / 1 gm with Backlight and Adapter Optional",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315506/1._KITCHEN_SCALES_2_-_Capacity_7_Kg_x_1_gm_fl1xds.jpg",
      },
      {
        id: "003",
        name: "capacity : 10kg / 1 gm with Backlight and Adapter Optional",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315507/1._KITCHEN_SCALES_3_-_Capacity_10_Kg_x_1_gm_htnsjf.jpg",
      },
      {
        id: "004",
        name: "capacity : 25kg / 1 gm with Backlight and Adapter Optional",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315507/1._KITCHEN_SCALES_3_-_Capacity_25_Kg_x_1_gm_nrf5du.jpg",
      },
      {
        id: "005",
        name: "capacity : 30kg / 1 gm with Backlight and Adapter Optional",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315506/1._KITCHEN_SCALES_4_-_Capacity_30_Kg_x_5_gm_rylmug.jpg",
      },
      {
        id: "006",
        name: "capacity : 5kg / 1 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315508/1._KITCHEN_SCALES_5_-_Capacity_5_Kg_x_1_gm_zvs1ll.jpg",
      },
      {
        id: "007",
        name: "capacity : 7kg / 1 gm with Backlight",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708315506/1._KITCHEN_SCALES_6_-_Capacity_7_Kg_x_1_gm_xnltdd.jpg",
      },
    ],
  },

  {
    id: "02",
    title: "Hanging Scales",
    products: [
      {
        id: "001",
        name: "capacity : 100kg / 50 gm ",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708398130/2._HANGING_SCALES_2_-_Capacity_100_Kg_x_50_gm_u1jfqk.jpg",
      },

      {
        id: "002",
        name: "capacity : 50kg / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708398064/2._POCKET_HANGING_SCALES_-_40_KG_X_10_gm_nvb0fk.jpg",
      },

      {
        id: "003",
        name: "capacity : 300kg / 100 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708398064/2._DIGITAL_-_HANGING_SCALES_2_-_Capacity_300_Kg_x_010_gm_rx1jfm.jpg",
      },

      {
        id: "004",
        name: "capacity : 50kg / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708398063/2._POCKET_HANGING_SCALES_1_-_Capacity_50_Kg_x_10_gm_gt0akg.jpg",
      },
    ],
  },

  {
    id: "03",
    title: "Jewellery Scales",
    products: [
      {
        id: "001",
        name: "capacity : 600gm / 10 gm ",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408224/3._DIGITAL_JEWELLERY_SCALES_-_600_gm_X_10_mg_-_IMG-20160125-WA0038_r03bu7.jpg",
      },

      {
        id: "002",
        name: "capacity : 500gm / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408224/3._JEWELLERY_SCALES_-_600_gm_X_10_mg_-_IMG-20160125-WA0041_i9vqh3.jpg",
      },

      {
        id: "003",
        name: "capacity : 200gm / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408224/3._POCKET_JEWELLERY_SCALES_-_200_gm_X_10_mg_-_IMG-20160125-WA0038_log3n0.jpg",
      },

      {
        id: "004",
        name: "capacity : 500gm / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408223/3._POCKET_JEWELLERY_SCALES_-_500_gm_X_10_mg_-_IMG-20160125-WA0038_jj8rc7.jpg",
      },
      {
        id: "005",
        name: "capacity : 500gm / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408223/3._POCKET_JEWELLERY_SCALES_-_500_gm_X_10_mg_-_IMG-20160125-WA0039_sniq5k.jpg",
      },
      {
        id: "006",
        name: "capacity : 500gm / 10 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408223/3._POCKET_JEWELLERY_SCALES_-_500_gm_X_10_mg_-_IMG-20160125-WA0040_s8m2sg.jpg",
      },
    ],
  },

  {
    id: "04",
    title: "Personal Scales",
    products: [
      {
        id: "001",
        name: "capacity : 130kg / 1 kg ",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408776/4._DIGITAL_-_PERSONAL_SCALES_1-_Capacity_130_Kg_x_1_Kg_vrhj2t.jpg",
      },

      {
        id: "002",
        name: "capacity : 150kg / 500 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408776/4._DIGITAL_-_PERSONAL_SCALES_2-_Capacity_150_Kg_x_500_gm_qqmbfe.jpg",
      },

      {
        id: "003",
        name: "capacity : 180kg / 100 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408776/4._DIGITAL_-_PERSONAL_SCALES_3_-_Capacity_180_Kg_x_100_gm_eexddz.jpg",
      },

      {
        id: "004",
        name: "capacity : 180kg / 100 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408776/4._DIGITAL_-_PERSONAL_SCALES_4-_Capacity_180_Kg_x_100_gm_ewqrgp.jpg",
      },
      {
        id: "005",
        name: "capacity : 180kg / 100 gm",
        imageUrl:
          "https://res.cloudinary.com/dewzkraqq/image/upload/v1708408776/personal_oqtxc8.jpg",
      },
    ],
  },
];

const DigitalScales = () => {
  const [getId, setId] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    document.title = "Digital Scales";
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
        {digitalScalesList.map((each) => (
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

export default DigitalScales;
