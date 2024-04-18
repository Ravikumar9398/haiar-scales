import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";

import SparePartsCard from "../SparePartsCard";
import { MdCancel } from "react-icons/md";

const SparePartsList = [
  {
    id: "01",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709029253/Weighing-scale-Battery-6v-4.5Ah-Ampteck-Sealed-Lead-acid-2-scaled_e2n0rd.webp",
    title: "Battery 6V * 4.5 Amps",
  },

  {
    id: "02",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/CORNER_LOADCELL_lqav01.png",
    title: "4-Corner Load Cells",
  },

  {
    id: "03",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/FRC_CABLE_-_With_Connectors_muw5kv.jpg",
    title: "Flat Cable With Connectors",
  },
  {
    id: "04",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/KEYPAD_-_With_Wire_Domes_Key_gmjuu9.png",
    title: "KEYPAD - With Wire & Domes Key",
  },
  {
    id: "05",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/L_N_BOLT_qbuvwp.jpg",
    title: "L N Bolt & Key Accessories",
  },
  {
    id: "06",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/LED_DISPLAYS_zca04f.jpg",
    title: "LED Display & Segmentss",
  },
  {
    id: "07",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/LOADCELL_CABLE_CONNECTORS_ojfbmg.jpg",
    title: "4 Pin Male & Female Connectorss",
  },
  {
    id: "09",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/LOADCELL_FITTING_SPACER_LEGS_yd8fej.jpg",
    title: "Load Cell Fitting Spacer & Legs",
  },
  {
    id: "10",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/LOADCELLS_xhxqql.jpg",
    title: "All Types of Load Cells",
  },
  {
    id: "11",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145664/PCB_FULL_SET_-_With_Keypad_Display_uqgyyn.jpg",
    title: "PCB Motherboard Full Set",
  },
  {
    id: "12",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/PIN_TYPE_CONNECOTR_-_With_Cover_totdrg.jpg",
    title: "15 PIN D Type Connectors",
  },
  {
    id: "13",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/POLE_BOX_-_ACCESSORIES_dgka8v.jpg",
    title: "Pole Display Box - Full Set",
  },
  {
    id: "14",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/POWER_CORD_CABLES_-_With_2_Pin_3_Pin_y8bafp.jpg",
    title: "Power Cord Cables / 2 Pin & 3 Pin",
  },
  {
    id: "15",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/SWITCHES_nkae7e.jpg",
    title: "Switches",
  },
  {
    id: "16",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/TRANSFORMER_12_V_-_Fully_Copper_Coiled_hnrsik.jpg",
    title: "Transformer 12 V - Fully Copper Coiled",
  },
  {
    id: "17",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145663/UNBRAND_STICKERS_STAMPING_PLATES_oo3hxh.jpg",
    title: "Unbrand Stickers & Stamping Plates",
  },
  {
    id: "18",
    imageUrl:
      "https://res.cloudinary.com/dewzkraqq/image/upload/v1708145662/spares_overall_jhksuw.jpg",
    title: "All Types of Weighing Scales Spares & Accessories",
  },
];

const Spareparts = () => {
  const [getId, setId] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    document.title = "Spare Parts";
  }, []);

  const display = isDisplay ? "pop-img-container" : "pop-img-container-display";

  const onClickPart = (id) => {
    setId(id);
    setIsDisplay(true);
  };

  const filterList = SparePartsList.filter((each) => each.id === getId);

  return (
    <div className="spareparts-container">
      <Navbar />

      <ul className="spareparts-list-cotainer">
        {SparePartsList.map((each) => (
          <SparePartsCard
            itemDetails={each}
            key={each.id}
            onClickPart={onClickPart}
          />
        ))}
      </ul>
      <div className={display}>
        <button type="button" onClick={() => setIsDisplay(false)}>
          {" "}
          <MdCancel />{" "}
        </button>
        {filterList.map((each) => (
          <img
            className="spare-big-image"
            src={each.imageUrl}
            alt={each.name}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Spareparts;
