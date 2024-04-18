import ScalesListContext from "../../context/ScalesListContext";
import "./index.css";
import Navbar from "../Navbar";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductItemDetails = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = `Weighing scale | ${id}`;
  });

  return (
    <ScalesListContext.Consumer>
      {(value) => {
        const { salesList } = value;
        const filterdScleDetails = salesList.filter(
          (eachProduct) => eachProduct.id === id
        );

        const {
          name,
          imageUrl,
          category,
          description,
          capacity,
          accuarcy,
          panSize,
          model,
        } = filterdScleDetails[0];
        const displayContent = isDisplay
          ? "pop-img-container"
          : "pop-img-container-display";
        return (
          <div className="product-list-container">
            <Navbar />
            <div className="products-details-container">
              <div className="upper-container">
                <div className="image-container">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="big-image"
                    onClick={() => setIsDisplay(true)}
                  />
                </div>

                <div className={displayContent}>
                  <button type="button" onClick={() => setIsDisplay(false)}>
                    {" "}
                    <MdCancel />{" "}
                  </button>
                  <img src={imageUrl} alt={name} />
                </div>

                <div className="details-container">
                  <h1 className="image-title">{name}</h1>
                  <p className="category-scale">{category}</p>
                  <p className="category-scale">Capacity : {model}</p>
                  <div className="scales-details-container">
                    <div className="capacity-container">
                      <div className="label-container">
                        <label htmlFor="capacity" className="label">
                          Capacity
                        </label>
                      </div>

                      <ul id="capacity" className="capacity-list">
                        {capacity.map((each) => (
                          <li className="capacity-item">
                            <p className="cap">{each}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="capacity-container">
                      <div className="label-container">
                        <label htmlFor="capacity" className="label">
                          Accuracy
                        </label>
                      </div>

                      <ul id="capacity" className="capacity-list">
                        {accuarcy.map((each) => (
                          <li className="capacity-item">
                            <p className="cap">{each}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="capacity-container">
                      <div className="label-container">
                        <label htmlFor="capacity" className="label">
                          Pan Size
                        </label>
                      </div>

                      <ul id="capacity" className="capacity-list">
                        {panSize.map((each) => (
                          <li className="capacity-item">
                            <p className="cap">{each}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contactus">
                      <button type="button" className="ordered-button">
                        For Orders Contactus
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <p className="description">{description}</p>
              </div>
              <Footer />
            </div>
          </div>
        );
      }}
    </ScalesListContext.Consumer>
  );
};
export default ProductItemDetails;
