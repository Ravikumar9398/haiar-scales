import { Link } from "react-router-dom";

import "./index.css";

const ProductCard = (props) => {
  const { ProductScalesist } = props;

  const { imageUrl, name, id, viewCapacity } = ProductScalesist;

  return (
    <li className="product-item">
      <Link to={`/weaghingscale/${id}`}>
        <img src={imageUrl} alt={name} className="scales-image" />

        <div>
          <h1 className="sacle-title">{name}</h1>
          <p className="scale-sub-title">Capacity : {viewCapacity}</p>
        </div>
      </Link>
      <Link to="/contactus">
        <button type="button" className="contactus-btn">
          ContactUs
        </button>
      </Link>
    </li>
  );
};

export default ProductCard;
