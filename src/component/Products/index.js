import { Component } from "react";

import "./index.css";
import ProductCard from "../ProductCard";
import { FaSearch } from "react-icons/fa";
import ScalesListContext from "../../context/ScalesListContext";

class Products extends Component {
  state = {
    capacity: "",
    searchInput: "",
  };

  onChangeSetCapacity = (event) => {
    this.setState({
      capacity: event.target.value,
    });
  };

  onChangeSearchInp = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };
  render() {
    return (
      <ScalesListContext.Consumer>
        {(value) => {
          const { salesList } = value;
          const { capacity, searchInput } = this.state;
          const filteredModelScales = salesList.filter(
            (eachProduct) => eachProduct.model === capacity
          );
          const producsList =
            filteredModelScales.length > 0 ? filteredModelScales : salesList;

          const searchFilteredList = salesList.filter((eachProduct) =>
            eachProduct.name.toLowerCase().includes(searchInput.toLowerCase())
          );

          const scalesList =
            searchInput === "" ? producsList : searchFilteredList;

          return (
            <div className="products-main-bg">
              <div className="products-conatiner">
                <div className="search-container">
                  <p className="search-container-title">Weighing Scales</p>

                  <div className="search-input-container">
                    <input
                      type="search"
                      placeholder="search weighing scales"
                      onChange={this.onChangeSearchInp}
                    />
                    <div className="icon-container">
                      <FaSearch />
                    </div>
                  </div>

                  <div className="model-dropdown">
                    <select
                      name="weight"
                      className="kg-selection"
                      onChange={this.onChangeSetCapacity}
                    >
                      <option name="weight">All Models</option>
                      <option value="10kg" name="weight">
                        10kg
                      </option>
                      <option value="30kg" name="weight">
                        30kg
                      </option>
                      <option value="50kg" name="weight">
                        50kg
                      </option>
                      <option value="100kg" name="weight">
                        100kg
                      </option>
                      <option value="300kg" name="weight">
                        300kg
                      </option>
                    </select>
                  </div>
                </div>
                <hr className="search-line" />
              </div>
              <ul className="products-list">
                {scalesList.map((eachProduct) => (
                  <ProductCard
                    ProductScalesist={eachProduct}
                    key={eachProduct.id}
                  />
                ))}
              </ul>
            </div>
          );
        }}
      </ScalesListContext.Consumer>
    );
  }
}

export default Products;
