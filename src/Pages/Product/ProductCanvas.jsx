import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ProductSimilar from "./ProductSimilar";
import { items } from "../../Constant";
import { CategoryContext } from "../../CategoryProvider";

function ProductCanvas(props) {
  const { selectedCategoryInJewellery, setSelectedCategoryInJewellery } =
    useContext(CategoryContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <div className="product-container">
      <Link to=".." relative="path">
        Back to home
      </Link>
      <div>
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <div>
        {" "}
        {product ? (
          <ProductSimilar
            product={product}
            setSelectedCategoryInJewellery={setSelectedCategoryInJewellery}
          />
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}

export default ProductCanvas;
