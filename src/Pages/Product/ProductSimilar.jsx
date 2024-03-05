import React from "react";
import { items } from "../../Constant";
import { Link } from "react-router-dom";

function ProductSimilar() {
  return (
    <div className="product-container--similar">
      <div className="product-container--similar--header">
        <h1>Similar Items</h1>
      </div>
      <div className="product-container--similar--body">
        <div className="product-container--similar--body-products">
          {items.slice(0, 3).map((item) => (
            <Link to={`/${item.id}`}> test {item.id}</Link>
          ))}
        </div>
        <div className="product-container--similar--body-category"></div>
      </div>
    </div>
  );
}

export default ProductSimilar;
