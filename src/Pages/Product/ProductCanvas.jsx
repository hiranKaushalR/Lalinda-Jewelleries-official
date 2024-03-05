import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { items } from "../../Constant";

function ProductCanvas() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);
  console.log(product);

  return (
    <div className="product-container">
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <p>Product not found</p>
      )}
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default ProductCanvas;
