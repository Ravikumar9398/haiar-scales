import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";

import SparePartsCard from "../SparePartsCard";
import { MdCancel } from "react-icons/md";

const ManuelScalesList = [
  {
    id: "01",
    title: "Milk Measures",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709177730/51zl_G0I7vL_tgygk3.jpg",
  },
  {
    id: "02",
    title: "Milk Measures",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709272151/Web_Photo_Editor_dt8k50.jpg",
  },
  {
    id: "03",
    title: "Bullion weight set",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709261390/6122b10b-73e8-4313-beb9-3479f7b32a42_chxc8h.png",
  },
  {
    id: "04",
    title: "Cast Iron weight set",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709261758/0a1be344-b013-4090-8be0-a0b739a59a0e_xngy2x.png",
  },
  {
    id: "05",
    title: "2kg Counter Scale",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709262437/15282064-599d-4844-8872-b114c7dda104_x7yya1.png",
  },
  {
    id: "06",
    title: "5kg Counter Scale",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709262313/0fdecc09-eea8-4672-86c5-90599ff7a606_nekaw7.png",
  },
  {
    id: "07",
    title: "10 kg Counter Scale",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709262305/c3fb5f61-84ae-4d40-b14e-11b4b0ef3cb5_mierbl.png",
  },

  {
    id: "08",
    title: "meter and half meter scale",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709262812/c8de3903-fd0d-49d4-aa38-659280a7d683_rjjnhk.png",
  },
  {
    id: "09",
    title: "5kg to 200kg Beam Scale ",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709264304/200-kg-manual-weighing-scale-500x500_1_zr3plz.png",
  },

  {
    id: "10",
    title: "Platform Trolley Weighing Scale",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709264061/digital-platform-trolley-weighing-scale-500x500_uifuwv.png",
  },
  {
    id: "11",
    title: "Belto Oil Pump",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709264825/51MUEsLFliL_gjn5mx.jpg",
  },
  {
    id: "12",
    title: "Lamination Machine",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709265037/31EAWLnUBcL._AC_UF1000_1000_QL80__z2ex8k.jpg",
  },
  {
    id: "13",
    title: "Kerosene Measures ",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709884245/mild-steel-kerosene-measure-500x500_1_vtbvn7.png",
  },
  {
    id: "14",
    title: "kerosene Bronze Measures",
    imageUrl:
      "https://res.cloudinary.com/ditfxnb3j/image/upload/v1709884239/81b-0x659OL._AC_UF894_1000_QL80__bs7jqv.jpg",
  },
];

const ManualMeasurements = () => {
  const [getId, setId] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    document.title = "Manual Measurements";
  }, []);

  const display = isDisplay ? "pop-img-container" : "pop-img-container-display";

  const onClickPart = (id) => {
    setId(id);
    setIsDisplay(true);
  };

  const filterList = ManuelScalesList.filter((each) => each.id === getId);

  return (
    <div className="spareparts-container">
      <Navbar />

      <ul className="spareparts-list-cotainer">
        {ManuelScalesList.map((each) => (
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

export default ManualMeasurements;
